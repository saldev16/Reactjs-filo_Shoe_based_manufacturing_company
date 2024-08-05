import React from "react";
import Background from "../../../shared/Background/Background";
import ProjectForm from "./ProjectForm";

export default function AddProject() {
    return (
        <Background heading="Design">
            <ProjectForm type="ADD" />
        </Background>
    );
}
