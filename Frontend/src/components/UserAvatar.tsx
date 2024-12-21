import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

const UserAvatar = () => {
    return (
        <Button variant="ghost" className="flex flex-row gap-4 py-6">
            diddyParty

            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </Button>
    );
};

export default UserAvatar;
