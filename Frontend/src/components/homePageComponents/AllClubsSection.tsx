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
import { getAllClubs } from "@/services/clubs";
import ClubCard from "./ClubCard";

const AllClubsSection = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["clubs"],
        queryFn: async () => await getAllClubs(),
    });

    return (
        <Card className="border-none w-[1000px] dark:bg-zinc-900">
            <CardHeader>
                <CardTitle>All Clubs</CardTitle>
                <CardDescription>The clubs we have at RIT</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row flex-wrap gap-2">
                {isLoading && <p>Loading...</p>}
                {isError && (
                    <p className="text-red-600">Error occured. Reload Page.</p>
                )}
                {data && data.length === 0 && <p>No clubs yet</p>}
                {data &&
                    data
                        .slice(0, 5)
                        .map((club) => <ClubCard club={club} key={club.id} />)}
            </CardContent>
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
