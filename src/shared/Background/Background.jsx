import React from "react";
import MenuBar from "../MenuBar";

export default function Background({ children, heading }) {
    return (
        <div className="main-background">
            <MenuBar heading={heading} />
            <div className="p-3 h-full">{children}</div>
        </div>
    );
}
