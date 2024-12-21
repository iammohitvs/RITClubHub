import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { NavLink } from "react-router";

const UserAvatar = () => {
    return (
        <NavLink to="/profile">
            <Button variant="ghost" className="flex flex-row gap-4 py-6">
                <span className="font-extrabold">diddyParty</span>

                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </Button>
        </NavLink>
    );
};

export default UserAvatar;
