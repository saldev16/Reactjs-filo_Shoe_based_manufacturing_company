import React from "react";
import { Dialog } from "primereact/dialog";

export default function CustomDialog({ children, position = "bottom", ...props }) {
    return (
        <Dialog draggable={false} resizable={false} position={position} style={{ width: "70vw", minHeight: "100px" }} {...props}>
            <div className="mt-4">{children}</div>
        </Dialog>
    );
}
