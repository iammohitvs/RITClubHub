import React from "react";

const Tag = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="px-2 py-0.5 rounded-full border-gray-700 bg-gray-500 mx-1">
            {children}
        </span>
    );
};

export default Tag;
