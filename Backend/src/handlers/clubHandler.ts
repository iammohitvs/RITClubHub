import { Context } from 'hono';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to return an array of objects containing data of each club
export const getAllClubs = async (c: Context) => {
  try {
    // Fetch all clubs
    const clubs = await prisma.club.findMany({
      select: {
        id: true,
        name: true,
        desc: true,
        cnumber: true,
        cemail: true,
        dept: true,
        tags: true,
        ratings: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return c.json(clubs);
  } catch (error) {
    return c.json({ error: 'Error fetching clubs' }, 500);
  }
};

// Function to return information about a specific club given its ID
export const getClubById = async (c: Context) => {
  const { id } = c.req.param(); // Get club ID from URL parameter

  try {
    // Fetch specific club by ID
    const club = await prisma.club.findUnique({
      where: { id: Number(id) },
      include: {
        events: true,  // Include related events
        ratingsRel: true, // Include ratings
      },
    });

    if (!club) {
      return c.json({ error: 'Club not found' }, 404);
    }

    return c.json(club);
  } catch (error) {
    return c.json({ error: 'Error fetching club details' }, 500);
  }
};
