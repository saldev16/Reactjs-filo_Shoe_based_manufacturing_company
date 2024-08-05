import React from "react";
import Background from "../../../shared/Background/Background";
import ReadyProjectForm from "./ReadyProjectForm";

export default function AddReadyProject() {
    return (
        <Background heading="Design">
            <ReadyProjectForm type="ADD" />
        </Background>
    );
}
