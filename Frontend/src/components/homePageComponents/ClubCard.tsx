import { ClubType } from "@/lib/types";
import React from "react";
import { NavLink } from "react-router";

const ClubCard = ({
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
            <div className="dark:bg-zinc-800 w-fit p-3 rounded-md max-w-[300px] min-w-[300px]">
                <h4 className="font-bold text-md text-primary">
                    {name.toUpperCase()}
                </h4>
                <p className="text-sm font-light">{desc.slice(0, 60)}...</p>
                <p className="text-yellow-600">Rating: {ratings ? ratings : "No rating yet"}</p>
            </div>
        </NavLink>
    );
};

export default ClubCard;
