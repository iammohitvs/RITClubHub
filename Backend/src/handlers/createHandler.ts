import { PrismaClient } from '@prisma/client';
import { Context } from 'hono';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const addClub = async (c: Context) => {
  const { name, desc, members, accolades, cnumber, cemail, dept, tags } = await c.req.json();
  try {
    const club = await prisma.club.create({
      data: { name, desc, members, accolades, cnumber, cemail, dept, tags },
    });
    return c.json(club);
  } catch (error) {
    return c.json({ error: 'Error creating club' }, 500);
  }
};

export const addEvent = async (c: Context) => {
  const { name, desc, prize, location, date, clubId } = await c.req.json();
  try {
    const event = await prisma.event.create({
      data: { name, desc, prize, location, date: new Date(date), clubId },
    });
    return c.json(event);
  } catch (error) {
    return c.json({ error: 'Error creating event' }, 500);
  }
};

export const addAccount = async (c: Context) => {
  const { name, password, type } = await c.req.json();
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const account = await prisma.account.create({ data: { name, password: hashedPassword, type } });
    return c.json(account);
  } catch (error) {
    return c.json({ error: 'Error creating account' }, 500);
  }
};
