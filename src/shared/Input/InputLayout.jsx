import React from "react";

export default function InputLayout({ label, name, required, col, extraClassName, errorMessage, data, children }) {
    col = parseInt(col);
    if (col > 12) {
        col = 12;
    }
    return (
        <div className={`px-1 my-1 col-12  ${col > 6 ? "md:col-12 lg:col-12" : "md:col-6 lg:col-6"} ${extraClassName}`}>
            <div className="grid align-items-center">
                <div className={`my-auto col-12 ${col > 6 ? "md:col-1 lg:col-1" : "md:col-2 lg:col-2"}`}>
                    <label htmlFor={name}>
                        {label}
                        {required ? <span className="p-error">*</span> : ""}
                    </label>
                </div>
                <div className={`col-12 ${col > 6 ? "md:col-" + (col - 1) : "md:col-10"}`}>{children}</div>
            </div>
            <div className="grid justify-content-end">
                <div className={`col-12 ${col > 6 ? "md:col-" + (col - 1) : "md:col-10"}`}>
                    {errorMessage || data?.formErrors?.[name] ? (
                        <small className="p-error">{errorMessage || data?.formErrors?.[name]}</small>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
