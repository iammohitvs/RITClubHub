import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { NavLink } from "react-router";

const AlertForEventcalender = () => {
    return (
        <Alert className="w-[1000px] border-primary text-primary">
            <Info className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription className="text-white">
                Check out our event calender by clicking
                <NavLink to="/events/calender" className="text-primary ml-1 font-bold underline">here!</NavLink>
            </AlertDescription>
        </Alert>
    );
};

export default AlertForEventcalender;
