import { Hono } from 'hono';
import { authMiddleware } from './middleware/authMiddleware';
import { login, register } from './handlers/authHandler';
import { getAccountById, getAllAccounts, updateAccount, deleteAccount } from './handlers/accountHandler';
import { getAllClubs, getClubById, updateClub } from './handlers/clubHandler';
import { addClub, addEvent, addAccount } from './handlers/createHandler';
import { 
  getAllEvents, 
  getEventById, 
  getEventsByClubId, 
  getPastEvents, 
  getFutureEvents, 
  getEventsByMonth,
  updateEvent,
  deleteEvent 
} from './handlers/eventHandler';
import { createRating, getRatingsForClub, getRatingsForEvent, deleteRatingsByClubOrEvent } from './handlers/ratingHandler';

const app = new Hono();

// Auth routes
app.post('/api/register', register);
app.post('/api/login', login);

// Club routes
app.get('/api/clubs', authMiddleware, getAllClubs);
app.get('/api/clubs/:id', authMiddleware, getClubById);
app.post('/api/addclub', authMiddleware, addClub);
app.put('/api/clubs/updateclub', authMiddleware, updateClub);

// Event routes
app.get('/api/events', authMiddleware, getAllEvents);
app.get('/api/events/:id', authMiddleware, getEventById);
app.get('/api/events/:cid', authMiddleware, getEventsByClubId);
app.get('/api/events/past', authMiddleware, getPastEvents);
app.get('/api/events/future', authMiddleware, getFutureEvents);
app.get('/api/events/calendar', authMiddleware, getEventsByMonth);
app.post('/api/addevent', authMiddleware, addEvent);
app.put('/api/events/updateevent', authMiddleware, updateEvent);
app.delete('/api/events/deleteevent', authMiddleware, deleteEvent);

// Account routes
app.get('/api/accounts', authMiddleware, getAllAccounts);
app.get('/api/accounts/:id', authMiddleware, getAccountById);
app.post('/api/addaccount', authMiddleware, addAccount);
app.put('/api/accounts', authMiddleware, updateAccount);
app.delete('/api/account/deleteaccount', authMiddleware, deleteAccount);

// Rating routes
app.post('/api/addrating', authMiddleware, createRating);
app.get('/api/ratings/clubs/:id', authMiddleware, getRatingsForClub);
app.get('/api/ratings/events/:id', authMiddleware, getRatingsForEvent);
app.delete('/api/ratings/deleteratings', authMiddleware, deleteRatingsByClubOrEvent);

// Default route for undefined paths
app.notFound((c) => c.text('Route not found', 404));

// Start the server
app.fire();