import React from "react";
import Background from "../../../shared/Background/Background";
import ReadyProjectForm from "./ReadyProjectForm";

export default function EditReadyProject() {
    return (
        <Background heading="Design">
            <ReadyProjectForm type="EDIT" />
        </Background>
    );
}
