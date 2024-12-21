import { PrismaClient } from '@prisma/client';
import { Context } from 'hono';

const prisma = new PrismaClient();

// Add a new rating and update the average for the club/event
export const createRating = async (c: Context) => {
  try {
    const { rating, clubId, eventId, accountId } = await c.req.json();

    if (!clubId && !eventId) {
      return c.json({ error: 'Either clubId or eventId must be provided' }, 400);
    }

    // Create the new rating
    const newRating = await prisma.rating.create({
      data: {
        rating,
        clubId,
        eventId,
        accountId,
      },
    });

    // Update the average rating for the club or event
    if (clubId) {
      const averageRating = await prisma.rating.aggregate({
        where: { clubId },
        _avg: { rating: true },
      });
      await prisma.club.update({
        where: { id: clubId },
        data: { ratings: averageRating._avg.rating || 0 },
      });
    }

    if (eventId) {
      const averageRating = await prisma.rating.aggregate({
        where: { eventId },
        _avg: { rating: true },
      });
      await prisma.event.update({
        where: { id: eventId },
        data: { ratings: averageRating._avg.rating || 0 },
      });
    }

    return c.json({ success: true, data: newRating });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return c.json({ success: false, error: errorMessage }, 500);
  }
};

// Get all ratings for a club
export const getRatingsForClub = async (c: Context) => {
  const { id } = c.req.param();

  try {
    const ratings = await prisma.rating.findMany({
      where: { clubId: Number(id) },
      include: {
        account: {
          select: { id: true, name: true },
        },
      },
    });

    return c.json(ratings);
  } catch (error) {
    return c.json({ error: 'Error fetching ratings for the club' }, 500);
  }
};

// Get all ratings for an event
export const getRatingsForEvent = async (c: Context) => {
  const { id } = c.req.param();

  try {
    const ratings = await prisma.rating.findMany({
      where: { eventId: Number(id) },
      include: {
        account: {
          select: { id: true, name: true },
        },
      },
    });

    return c.json(ratings);
  } catch (error) {
    return c.json({ error: 'Error fetching ratings for the event' }, 500);
  }
};
