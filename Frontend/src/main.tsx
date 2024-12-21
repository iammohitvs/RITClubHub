import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";

import GlobalLayout from "./components/layouts/GlobalLayout";

import HomePage from "./pages/HomePage";

import StudentSignup from "./pages/auth/StudentSignup";
import ClubSignup from "./pages/auth/ClubSignup";
import StudentLogin from "./pages/auth/StudentLogin";
import ClubLogin from "./pages/auth/ClubLogin";

import EventsPage from "./pages/events/EventsPage";
import UpcomingEvents from "./pages/events/UpcomingEvents";
import CompletedEvents from "./pages/events/CompletedEvents";
import EventsCalender from "./pages/events/EventsCalender";
import SpeceficEvent from "./pages/events/SpeceficEvent";

import ClubsPage from "./pages/clubs/ClubsPage";
import SpeceficClub from "./pages/clubs/SpeceficClub";

import UserProfilePage from "./pages/user/UserProfilePage";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route element={<GlobalLayout />}>
                {/* Home Pages */}
                <Route index element={<HomePage />} />

                {/* Auth Pages */}
                <Route path="/signup/student" element={<StudentSignup />} />
                <Route path="/signup/club" element={<ClubSignup />} />
                <Route path="/login/student" element={<StudentLogin />} />
                <Route path="/login/club" element={<ClubLogin />} />

                {/* Events Pages */}
                <Route path="events">
                    <Route index element={<EventsPage />} />
                    <Route path="upcoming" element={<UpcomingEvents />} />
                    <Route path="completed" element={<CompletedEvents />} />
                    <Route path="calender" element={<EventsCalender />} />
                    <Route path="event/:eventid" element={<SpeceficEvent />} />
                </Route>

                {/* Clubs Pages */}
                <Route path="clubs">
                    <Route index element={<ClubsPage />} />
                    <Route path=":clubid" element={<SpeceficClub />} />
                </Route>

                {/* User Pages */}
                <Route path="profile" element={<UserProfilePage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
