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

const AllClubsSection = () => {
    return (
        <Card className="border-none w-[1000px] dark:bg-zinc-900">
            <CardHeader>
                <CardTitle>All Clubs</CardTitle>
                <CardDescription>The clubs we have at RIT</CardDescription>
            </CardHeader>
            <CardContent>clubs...</CardContent>
            <CardFooter>
                <NavLink to="/clubs">
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

export default AllClubsSection;
