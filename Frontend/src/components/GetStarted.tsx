import React from "react";
import { Button } from "./ui/button";
import { NavLink } from "react-router";

const GetStarted = () => {
    return (
        <NavLink to="/auth">
            <Button variant="outline">Get Started</Button>
        </NavLink>
    );
};

export default GetStarted;
