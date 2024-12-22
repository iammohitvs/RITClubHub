import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getCompletedEvents, getEventsByMonth } from "@/services/events";
import LongerEventCard from "@/components/eventsPageComponents/LongerEventCard";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MONTHS, YEARS } from "@/lib/constants";

const EventsCalender = () => {
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(2024);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["events-calender", month, year],
        queryFn: async () => await getEventsByMonth(month, year),
    });

    return (
        <section id="clubs" className="flex flex-col gap-5 mb-20">
            <h1 className="text-3xl font-extrabold w-fit mb-10 mx-auto">
                Our event calender
            </h1>
            <div className="flex flex-row gap-10 mx-auto">
                <Select
                    defaultValue="1"
                    onValueChange={(v) => setMonth(Number(v))}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                        {MONTHS.map((month) => (
                            <SelectItem
                                value={String(month.value)}
                                key={month.value}
                            >
                                {month.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select
                    defaultValue="2024"
                    onValueChange={(v) => setYear(Number(v))}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                        {YEARS.map((year) => (
                            <SelectItem
                                value={String(year.value)}
                                key={year.value}
                            >
                                {year.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            {isLoading && <p>Loading...</p>}
            {isError && (
                <p className="text-red-600">Error occured. Reload Page.</p>
            )}
            {data && data.length === 0 && (
                <p className="text-center">
                    No events at this selected time period
                </p>
            )}
            {data &&
                data.map((event) => (
                    <LongerEventCard event={event} key={event.id} />
                ))}
        </section>
    );
};

export default EventsCalender;
