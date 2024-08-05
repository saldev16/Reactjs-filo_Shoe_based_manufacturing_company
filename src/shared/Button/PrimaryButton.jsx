import React from "react";
import { Button } from "primereact/button";

export default function PrimaryButton({ type, onClick, label, loading, ...props }) {
    return <Button type={type} label={label} onClick={onClick} loading={loading} className="mx-1 p-button-info" {...props} />;
}
export function PrimaryButtonOutlined({ type, onClick, label, loading, ...props }) {
    return <Button type={type} label={label} onClick={onClick} loading={loading} className="mx-1 p-button-outlined p-button-info" {...props} />;
}
