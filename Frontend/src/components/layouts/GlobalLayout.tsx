import React from "react";
import Header from "../Header";
import { Outlet } from "react-router";
import Footer from "../Footer";

const GlobalLayout = () => {
    return (
        <div className="py-[100px]">
            <Header />

            <Outlet />

            <Footer />
        </div>
    );
};

export default GlobalLayout;
