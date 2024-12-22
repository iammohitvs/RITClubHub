import { Context } from "hono";
import { hashPassword, comparePassword } from "../utils/bcryptUtils";
import { generateToken } from "../utils/jwtUtils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Register a new user
export const register = async (c: Context) => {
    const { name, password, type } = await c.req.json();
    const hashedPassword = await hashPassword(password);

    const user = await prisma.account.create({
        data: { name, password: hashedPassword, type },
    });

    return c.json({ id: user.id, name: user.name, type: user.type });
};

// Log in an existing user
export const login = async (c: Context) => {
    const { name, password } = await c.req.json();
    const user = await prisma.account.findUnique({ where: { name } });

    if (!user || !(await comparePassword(password, user.password))) {
        return c.json({ error: "Invalid credentials" }, 401);
    }

    const token = await generateToken({
        userId: user.id,
        name: user.name,
        type: user.type,
    });
    return c.json({ token, name: user.name });
};
