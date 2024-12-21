import { Context } from 'hono';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../utils/bcryptUtils';

const prisma = new PrismaClient();

// Fetch account by ID
export const getAccountById = async (c: Context) => {
  const { id } = c.req.param();

  try {
    const account = await prisma.account.findUnique({ where: { id: Number(id) } });

    if (!account) return c.json({ error: 'Account not found' }, 404);

    return c.json(account);
  } catch (error) {
    return c.json({ error: 'Error fetching account' }, 500);
  }
};

// Fetch all accounts
export const getAllAccounts = async (c: Context) => {
  try {
    const accounts = await prisma.account.findMany();
    return c.json(accounts);
  } catch (error) {
    return c.json({ error: 'Error fetching accounts' }, 500);
  }
};


