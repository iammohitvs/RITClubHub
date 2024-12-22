import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { NavLink } from "react-router";
import { useAuthContext } from "@/providers/AuthProvider";

const UserAvatar = () => {
    const { user } = useAuthContext();

    return (
        <NavLink to="/profile">
            <Button variant="ghost" className="flex flex-row gap-4 py-6">
                <span className="font-extrabold">{user}</span>

                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </Button>
        </NavLink>
    );
};

export default UserAvatar;
