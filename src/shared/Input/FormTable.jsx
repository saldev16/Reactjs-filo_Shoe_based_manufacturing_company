import React from "react";

export default function FormTable({ label, required, children }) {
    return (
        <div className="grid align-items-center">
            <div className="md:col-1">
                <label>
                    {label} {required && <span className="p-error">*</span>}
                </label>
            </div>
            <div className="md:col-11">{children}</div>
        </div>
    );
}
