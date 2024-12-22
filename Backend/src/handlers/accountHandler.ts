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

// Update account attributes
export const updateAccount = async (c: Context) => {
  const { id } = c.req.param();
  const data = await c.req.json();

  try {
    const updatedAccount = await prisma.account.update({
      where: { id: Number(id) },
      data,
    });

    return c.json(updatedAccount);
  } catch (error) {
    return c.json({ error: 'Error updating account' }, 500);
  }
};

// Delete account
export const deleteAccount = async (c: Context) => {
  const { id } = c.req.param();

  try {
    await prisma.account.delete({ where: { id: Number(id) } });
    return c.json({ message: 'Account deleted successfully' });
  } catch (error) {
    return c.json({ error: 'Error deleting account' }, 500);
  }
};