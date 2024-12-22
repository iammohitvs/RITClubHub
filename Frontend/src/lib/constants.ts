export const NAVIGATION = [
    {
        label: "Clubs",
        path: "/clubs",
    },
    {
        label: "Upcoming Events",
        path: "/events/upcoming",
    },
    {
        label: "Completed Events",
        path: "/events/completed",
    },
    {
        label: "Events Calendar",
        path: "/events/calender",
    },
];

export const PORT = "http://localhost:3000/api";

export const MONTHS = Array.from({ length: 12 }, (_, i) => ({
    value: i + 1, // Month number (1 to 12)
    label: new Date(0, i).toLocaleString("en-US", { month: "long" }), // Month name
}));

const currentYear = new Date().getFullYear(); // Get the current year
export const YEARS = Array.from({ length: currentYear - 2024 + 2 }, (_, i) => ({
    value: 2024 + i,
    label: (2024 + i).toString(),
}));