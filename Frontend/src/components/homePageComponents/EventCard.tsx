import { EventType } from "@/lib/types";
import { convertPostgresDateToReadable } from "@/lib/utils";
import React from "react";
import { NavLink } from "react-router";

const EventCard = ({
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
        <NavLink to={`/events/event/${id}`}>
            <div className="dark:bg-zinc-800 w-fit p-3 rounded-md max-w-[300px] min-w-[300px]">
                <h4 className="font-bold text-md text-primary">
                    {name.toUpperCase()}
                </h4>
                <p className="text-sm font-light">{desc.slice(0, 60)}...</p>
                <p>Date: {convertPostgresDateToReadable(date)}</p>
                <p>Prize: {prize ? prize : "None"}</p>
            </div>
        </NavLink>
    );
};

export default EventCard;
