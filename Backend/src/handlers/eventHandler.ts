import { Context } from 'hono';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Fetch all events
export const getAllEvents = async (c: Context) => {
  try {
    const events = await prisma.event.findMany();
    return c.json(events);
  } catch (error) {
    return c.json({ error: 'Error fetching events' }, 500);
  }
};

// Fetch a specific event by ID
export const getEventById = async (c: Context) => {
  const { id } = c.req.param();

  try {
    const event = await prisma.event.findUnique({
      where: { id: Number(id) },
      include: { Club: true, ratingsRel: true },
    });

    if (!event) return c.json({ error: 'Event not found' }, 404);

    return c.json(event);
  } catch (error) {
    return c.json({ error: 'Error fetching event details' }, 500);
  }
};

// Fetch events for a specific club by Club ID
export const getEventsByClubId = async (c: Context) => {
  const { cid } = c.req.param();

  try {
    const events = await prisma.event.findMany({ where: { clubId: Number(cid) } });

    if (events.length === 0) return c.json({ error: 'No events found for this club' }, 404);

    return c.json(events);
  } catch (error) {
    return c.json({ error: 'Error fetching events for the club' }, 500);
  }
};

// Fetch past events with query for month and year, ordered by recent first
export const getPastEvents = async (c: Context) => {
  try {
    const pastEvents = await prisma.event.findMany({
      where: { date: { lt: new Date() } },
      orderBy: { date: 'desc' },
    });

    return c.json(pastEvents);
  } catch (error) {
    return c.json({ error: 'Error fetching past events' }, 500);
  }
};

// Fetch future events, ordered by earliest first
export const getFutureEvents = async (c: Context) => {
  try {
      // Fetch all events from the database
      const allEvents = await prisma.event.findMany({
          orderBy: { date: "asc" }, // Sort by date if you want them ordered
      });

      // Filter events to get future events (date greater than current date)
      const futureEvents = allEvents.filter(
          (event) => new Date(event.date) > new Date()
      );

      // Return the future events in the response
      return c.json(futureEvents);
  } catch (error) {
      // Log the error for debugging

      // Return a more detailed error message
      return c.json(
          { error: "Error fetching future events" },
          500
      );
  }
};

// Fetch events in a specific month
export const getEventsByMonth = async (c: Context) => {
  const month = Number(c.req.query('m'));
  const year = Number(c.req.query('y'));

  try {
    const events = await prisma.event.findMany({
      where: {
        date: {
          gte: new Date(year, month - 1, 1),
          lt: new Date(year, month, 1),
        },
      },
    });

    return c.json(events);
  } catch (error) {
    return c.json({ error: 'Error fetching events by month' }, 500);
  }
};

// Update event attributes
export const updateEvent = async (c: Context) => {
  const { id } = c.req.param();
  const data = await c.req.json();

  try {
    const updatedEvent = await prisma.event.update({
      where: { id: Number(id) },
      data,
    });

    return c.json(updatedEvent);
  } catch (error) {
    return c.json({ error: 'Error updating event' }, 500);
  }
};

// Delete an event
export const deleteEvent = async (c: Context) => {
  const { id } = c.req.param();

  try {
    await prisma.event.delete({
      where: { id: Number(id) },
    });

    return c.json({ message: 'Event deleted successfully' });
  } catch (error) {
    return c.json({ error: 'Error deleting event' }, 500);
  }
};
