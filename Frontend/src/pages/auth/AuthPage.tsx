import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { ArrowRight } from "lucide-react";

const AuthPage = () => {
    return (
        <div className="w-fit mx-auto flex flex-col gap-5 justify-center items-center my-20">
            <NavLink to="/signup/student">
                <Button variant="default">
                    Student signup <ArrowRight />
                </Button>
            </NavLink>
            <NavLink to="/signup/club">
                <Button variant="default">
                    Club signup <ArrowRight />
                </Button>
            </NavLink>
            <NavLink to="/login/student">
                <Button variant="secondary">
                    student login <ArrowRight />
                </Button>
            </NavLink>
            <NavLink to="/login/club">
                <Button variant="secondary">
                    club login <ArrowRight />
                </Button>
            </NavLink>
        </div>
    );
};

export default AuthPage;
