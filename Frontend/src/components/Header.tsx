import React from "react";
import Logo from "./Logo";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router";
import { NAVIGATION } from "@/lib/constants";
import UserAvatar from "./UserAvatar";

const Header = () => {
    return (
        <div className="fixed w-full -mt-[100px] z-10 flex flex-row justify-between px-5 py-3 items-center bg-background">
            <Logo />

            <NavigationMenu>
                <NavigationMenuList>
                    {NAVIGATION.map((nav) => (
                        <NavigationMenuItem>
                            <NavLink to={nav.path}>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <span className="font-bold">
                                        {nav.label}
                                    </span>
                                </NavigationMenuLink>
                            </NavLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            <UserAvatar />
        </div>
    );
};

export default Header;
