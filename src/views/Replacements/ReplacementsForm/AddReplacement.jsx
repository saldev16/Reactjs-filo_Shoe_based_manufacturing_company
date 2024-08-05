import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import ReplacementForm from "./ReplacementForm";

export default function AddReplacement() {
    return (
        <Background heading="Replacement">
            <CustomCard title="Add New Replacement">
                <ReplacementForm type="ADD" />
            </CustomCard>
        </Background>
    );
}
