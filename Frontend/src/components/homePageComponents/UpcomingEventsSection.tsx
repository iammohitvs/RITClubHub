import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getUpcomingEvents } from "@/services/events";
import EventCard from "./EventCard";

const UpcomingEventsSection = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["events"],
        queryFn: async () => await getUpcomingEvents(),
    });

    return (
        <Card className="border-none w-[1000px] dark:bg-zinc-900">
            <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>
                    All upcoming events hosted by RIT clubs
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row flex-wrap gap-2">
                {isLoading && <p>Loading...</p>}
                {isError && (
                    <p className="text-red-600">Error occured. Reload Page.</p>
                )}
                {data && data.length === 0 && <p>No upcoming events</p>}
                {data &&
                    data
                        .slice(0, 5)
                        .map((event) => (
                            <EventCard event={event} key={event.id} />
                        ))}
            </CardContent>
            <CardFooter>
                <NavLink to="/events/upcoming">
                    <Button
                        variant={"default"}
                        className="font-bold flex flex-row gap-2"
                    >
                        View All <ArrowRight />
                    </Button>
                </NavLink>
            </CardFooter>
        </Card>
    );
};

export default UpcomingEventsSection;
