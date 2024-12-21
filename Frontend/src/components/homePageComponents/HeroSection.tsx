import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";

const HeroSection = () => {
    return (
        <div className="max-w-[500px] mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center">
                Welcome to RITClubHub!
            </h1>
            <p className="text-primary text-xl md:text-2xl text-center font-light mt-3">
                Your one stop app for all club related needs at RIT
            </p>

            <NavLink to="/clubs">
                <Button
                    variant={"default"}
                    className="font-bold flex flex-row gap-2 mx-auto mt-10"
                >
                    View All Clubs <ArrowRight />
                </Button>
            </NavLink>
        </div>
    );
};

export default HeroSection;
