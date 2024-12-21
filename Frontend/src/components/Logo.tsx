import React from "react";
import { NavLink } from "react-router";

const Logo = () => {
    return (
        <NavLink
            to="/"
            className="bg-black p-2 flex flex-row items-center justify-center w-fit rounded-md"
        >
            <span className="text-2xl font-bold text-white">RITClub</span>
            <span className="text-2xl font-bold text-black ml-1 bg-primary rounded-sm px-1">
                Hub
            </span>
        </NavLink>
    );
};

export default Logo;
