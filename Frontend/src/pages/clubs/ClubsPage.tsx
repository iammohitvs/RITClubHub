import LongerClubCard from "@/components/clubsPageComponents/LongerClubCard";
import { getAllClubs } from "@/services/clubs";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ClubsPage = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["clubs"],
        queryFn: async () => await getAllClubs(),
    });

    return (
        <section id="clubs" className="flex flex-col gap-5 mb-20">
            <h1 className="text-3xl font-extrabold w-fit mx-auto mb-10">
                All Clubs
            </h1>
            {isLoading && <p>Loading...</p>}
            {isError && (
                <p className="text-red-600">Error occured. Reload Page.</p>
            )}
            {data && data.length === 0 && <p>No clubs yet</p>}
            {data &&
                data.map((club) => (
                    <LongerClubCard club={club} key={club.id} />
                ))}
        </section>
    );
};

export default ClubsPage;
