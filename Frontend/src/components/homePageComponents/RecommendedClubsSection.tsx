import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const RecommendedClubsSection = () => {
    return (
        <Card className="border-none w-[1000px] bg-zinc-800">
            <CardHeader>
                <CardTitle>Recommended Clubs</CardTitle>
                <CardDescription>
                    Clubs we recommend to you based on your preferences
                </CardDescription>
            </CardHeader>
            <CardContent>clubs...</CardContent>
        </Card>
    );
};

export default RecommendedClubsSection;
