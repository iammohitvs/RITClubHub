import { Hono } from "hono";
import { serve } from "@hono/node-server";
//import { authMiddleware } from './middleware/authMiddleware';
import { isClub, login, register } from "./handlers/authHandler";
import {
    getAccountById,
    getAllAccounts,
    updateAccount,
    deleteAccount,
} from "./handlers/accountHandler";
import { getAllClubs, getClubById, updateClub } from "./handlers/clubHandler";
import { addClub, addEvent, addAccount } from "./handlers/createHandler";
import {
    getAllEvents,
    getEventById,
    getEventsByClubId,
    getPastEvents,
    getFutureEvents,
    getEventsByMonth,
    updateEvent,
    deleteEvent,
} from "./handlers/eventHandler";
import {
    createRating,
    getRatingsForClub,
    getRatingsForEvent,
    deleteRatingsByClubOrEvent,
} from "./handlers/ratingHandler";
import { cors } from "hono/cors";
import { authMiddleware } from "./middleware/authMiddleware";

const app = new Hono();

app.use(
    "*", // Apply to all routes
    cors({
        origin: "http://localhost:5173", // Replace with your Vite client URL
        allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    })
);

// Auth routes
app.post("/api/register", register);
app.post("/api/login", login);
app.get("/api/isclub/:name", isClub);

// Club routes
app.get("/api/clubs", /*authMiddleware,*/ getAllClubs);
app.get("/api/clubs/club/:id", /*authMiddleware,*/ getClubById);
app.post("/api/addclub", authMiddleware, addClub);
app.put("/api/clubs/updateclub", authMiddleware, updateClub);

// Event routes
app.get("/api/events", /*authMiddleware,*/ getAllEvents);
app.get("/api/events/event/:id", /*authMiddleware,*/ getEventById);
app.get("/api/events/cevent/:cid", /*authMiddleware,*/ getEventsByClubId);
app.get("/api/events/past", /*authMiddleware,*/ getPastEvents);
app.get("/api/events/future", /*authMiddleware,*/ getFutureEvents);
app.get("/api/events/calendar", /*authMiddleware,*/ getEventsByMonth);
app.post("/api/addevent", authMiddleware, addEvent);
app.put("/api/events/updateevent", authMiddleware, updateEvent);
app.delete("/api/events/deleteevent", authMiddleware, deleteEvent);

// Account routes
app.get("/api/accounts", /*authMiddleware,*/ getAllAccounts);
app.get("/api/accounts/acc/:id", /*authMiddleware,*/ getAccountById);
app.post("/api/addaccount", authMiddleware, addAccount);
app.put("/api/accounts/updateaccount", authMiddleware, updateAccount);
app.delete("/api/account/deleteaccount", authMiddleware, deleteAccount);

// Rating routes
app.post("/api/addrating", authMiddleware, createRating);
app.get("/api/ratings/clubs/:id", /*authMiddleware,*/ getRatingsForClub);
app.get("/api/ratings/events/:id", /*authMiddleware,*/ getRatingsForEvent);
app.delete(
    "/api/ratings/deleteratings",
    authMiddleware,
    deleteRatingsByClubOrEvent
);

// Default route for undefined paths
app.notFound((c) => c.text("Route not found", 404));

// Start the server
//app.fire();

serve(app);
