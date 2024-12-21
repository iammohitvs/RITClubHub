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

const UpcomingEventsSection = () => {
    return (
        <Card className="border-none w-[1000px] dark:bg-zinc-900">
            <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>
                    All upcoming events hosted by RIT clubs
                </CardDescription>
            </CardHeader>
            <CardContent>events...</CardContent>
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
