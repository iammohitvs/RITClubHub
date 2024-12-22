import { EventType } from "@/lib/types";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { NavLink } from "react-router";
import Tag from "../Tag";
import { convertPostgresDateToReadable } from "@/lib/utils";

const LongerEventCard = ({
    event: {
        id,
        name,
        createdAt,
        updatedAt,
        ratings,
        desc,
        prize,
        location,
        date,
        clubId,
    },
}: {
    event: EventType;
}) => {
    return (
        <NavLink to={`/clubs/${id}`}>
            <Card className="bg-zinc-900 max-w-[800px] mx-auto">
                <CardHeader>
                    <CardTitle className="text-primary">{name}</CardTitle>
                    <CardDescription>{desc}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Hosted By: {clubId}</p>
                    <p className="text-primary">
                        Date of event: {convertPostgresDateToReadable(date)}
                    </p>
                    <p>Prize: {prize ? prize : "No prize pool"}</p>
                </CardContent>
                <CardFooter>
                    <p>Location: {location}</p>
                </CardFooter>
            </Card>
        </NavLink>
    );
};

export default LongerEventCard;
