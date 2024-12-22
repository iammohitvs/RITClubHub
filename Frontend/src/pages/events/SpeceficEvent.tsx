import { convertPostgresDateToReadable } from "@/lib/utils";
import { getSpeceficEvent } from "@/services/events";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";

const SpeceficEvent = () => {
    const { eventid } = useParams();

    const { data, isLoading, isError } = useQuery({
        queryKey: [`club-${eventid}`],
        queryFn: async () => await getSpeceficEvent(eventid as string),
    });

    return (
        <div className="max-w-[500px] mx-auto py-20">
            {isLoading && <p>Loading...</p>}
            {isError && (
                <p className="text-red-600">Error occured. Reload Page.</p>
            )}
            {!data && <p>No info on this club</p>}
            {data && (
                <div className="text-xl font-bold flex flex-col gap-5 items-start justify-center">
                    <h1 className="text-3xl">{data.name}</h1>
                    <p>
                        Description: {data.desc ? data.desc : "No rating yet"}
                    </p>
                    <p className="text-yellow-600">
                        Rating: {data.ratings ? data.ratings : "No rating yet"}
                    </p>
                    <p>Prize: {data.prize ? data.prize : "No Prize"}</p>
                    <p>
                        Location: {data.location ? data.location : "Not listed"}
                    </p>
                    <p>
                        Date:{" "}
                        {data.date
                            ? convertPostgresDateToReadable(data.date)
                            : "Not listed"}
                    </p>
                </div>
            )}
        </div>
    );
};

export default SpeceficEvent;
