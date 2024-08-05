import React from "react";
import Background from "../../../shared/Background/Background";
import ProjectForm from "./ProjectForm";

export default function EditProject() {
    return (
        <Background heading="Design">
            <ProjectForm type="EDIT" />
        </Background>
    );
}
