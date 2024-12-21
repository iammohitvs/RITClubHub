import React from "react";
import Header from "../Header";
import { Outlet } from "react-router";

const GlobalLayout = () => {
    return (
        <div>
            <Header />

            <Outlet />
        </div>
    );
};

export default GlobalLayout;
