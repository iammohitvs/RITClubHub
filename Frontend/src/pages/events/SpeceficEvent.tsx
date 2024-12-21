import React from "react";
import { useParams } from "react-router";

const SpeceficEvent = () => {
    const { eventid } = useParams();
    return <div>SpeceficEvent: {eventid}</div>;
};

export default SpeceficEvent;
