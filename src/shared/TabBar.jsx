import React from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function TabBar({ btnText }) {
    return (
        <div className="flex flex-row justify-content-between bg-white  px-5 py-3">
            <Button className="p-button-secondary" label={btnText} icon="pi pi-plus" iconPos="right" />
            <span className="p-input-icon-right">
                <InputText type="text" placeholder="Search" />
                <i className="pi pi-search" />
            </span>
        </div>
    );
}
