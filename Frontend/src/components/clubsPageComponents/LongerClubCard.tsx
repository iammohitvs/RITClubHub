import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ClubType } from "@/lib/types";
import { NavLink } from "react-router";
import Tag from "../Tag";

const LongerClubCard = ({
    club: {
        id,
        name,
        createdAt,
        updatedAt,
        ratings,
        tags,
        desc,
        members,
        accolades,
        cnumber,
        cemail,
        dept,
    },
}: {
    club: ClubType;
}) => {
    return (
        <NavLink to={`/clubs/${id}`}>
            <Card className="bg-zinc-900 max-w-[800px] mx-auto">
                <CardHeader>
                    <CardTitle className="text-primary">{name}</CardTitle>
                    <CardDescription>{desc}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-yellow-600">
                        Rating: {ratings ? ratings : "No rating yet"}
                    </p>
                    <p>
                        Tags:{" "}
                        {tags ? tags.map((tag) => <Tag key={tag}>{tag}</Tag>) : "No tags"}
                    </p>
                </CardContent>
                <CardFooter>
                    <p>Accolades: {accolades ? accolades : ""}</p>
                </CardFooter>
            </Card>
        </NavLink>
    );
};

export default LongerClubCard;
