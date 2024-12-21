import React from "react";
import { useParams } from "react-router";

const SpeceficClub = () => {
    const { clubid } = useParams();
    return <div>SpeceficClub: {clubid}</div>;
};

export default SpeceficClub;
