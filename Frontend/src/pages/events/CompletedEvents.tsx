import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCompletedEvents } from "@/services/events";
import LongerEventCard from "@/components/eventsPageComponents/LongerEventCard";

const CompletedEvents = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["events-completed"],
        queryFn: async () => await getCompletedEvents(),
    });

    return (
        <section id="clubs" className="flex flex-col gap-5 mb-20">
            <h1 className="text-3xl font-extrabold w-fit mx-auto mb-10">
                All Upcoming Events
            </h1>
            {isLoading && <p>Loading...</p>}
            {isError && (
                <p className="text-red-600">Error occured. Reload Page.</p>
            )}
            {data && data.length === 0 && <p className="text-center">No completed events</p>}
            {data &&
                data.map((event) => (
                    <LongerEventCard event={event} key={event.id} />
                ))}
        </section>
    );
};

export default CompletedEvents;
