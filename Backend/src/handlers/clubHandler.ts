import { Context } from 'hono';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Fetch all clubs or clubs with specific tags
export const getAllClubs = async (c: Context) => {
  const tags = c.req.query('tags')?.split(',');

  try {
    const clubs = tags
      ? await prisma.club.findMany({ where: { tags: { hasSome: tags } } })
      : await prisma.club.findMany();
    return c.json(clubs);
  } catch (error) {
    return c.json({ error: 'Error fetching clubs' }, 500);
  }
};

// Fetch a club by ID
export const getClubById = async (c: Context) => {
  const { id } = c.req.param();

  try {
    const club = await prisma.club.findUnique({
      where: { id: Number(id) },
      include: { events: true, ratingsRel: true },
    });

    if (!club) return c.json({ error: 'Club not found' }, 404);

    return c.json(club);
  } catch (error) {
    return c.json({ error: 'Error fetching club details' }, 500);
  }
};
