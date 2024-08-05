import React from "react";

export default function CustomCard({ title, children }) {
    return (
        <div className="card p-4 curve">
            <h2 className="mb-3">{title}</h2>
            {children}
        </div>
    );
}
