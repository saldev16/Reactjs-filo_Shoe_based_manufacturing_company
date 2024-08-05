import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import ReplacementForm from "./ReplacementForm";

export default function EditReplacement() {
    return (
        <Background heading="Design">
            <CustomCard title="Edit Replacement">
                <ReplacementForm type="EDIT" />
            </CustomCard>
        </Background>
    );
}
