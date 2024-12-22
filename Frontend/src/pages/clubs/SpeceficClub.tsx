import Tag from "@/components/Tag";
import { getSpeceficClub } from "@/services/clubs";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";

const SpeceficClub = () => {
    const { clubid } = useParams();

    const { data, isLoading, isError } = useQuery({
        queryKey: [`club-${clubid}`],
        queryFn: async () => await getSpeceficClub(clubid as string),
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
                    <p>Description: {data.desc ? data.desc : "No rating yet"}</p>
                    <p className="text-yellow-600">
                        Rating: {data.ratings ? data.ratings : "No rating yet"}
                    </p>
                    <p>
                        Tags:{" "}
                        {data.tags
                            ? data.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)
                            : "No tags"}
                    </p>
                    <p>
                        Accolades:{" "}
                        {data.accolades ? data.accolades : "Not listed"}
                    </p>
                    <p>Dept: {data.dept ? data.dept : "Not listed"}</p>
                    <p>Number: {data.cnumber}</p>
                    <p>Email: {data.cemail}</p>
                    <p>Member count: {data.members}</p>
                </div>
            )}
        </div>
    );
};

export default SpeceficClub;
