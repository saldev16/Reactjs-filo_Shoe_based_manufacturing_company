import React from "react";

export default function PageLayout({ heading, children }) {
    return (
        <div className="my-1 p-5">
            <div className="card">
                <div className="text-3xl">{heading}</div>
                <div className="mt-4">{children}</div>
            </div>
        </div>
    );
}
