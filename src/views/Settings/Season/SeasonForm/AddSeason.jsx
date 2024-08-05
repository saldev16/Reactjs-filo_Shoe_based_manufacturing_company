import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import SeasonForm from "./SeasonForm";

export default function AddSeason() {
    return (
        <Background heading="Setting">
            <CustomCard title="Add New Season">
                <SeasonForm type="ADD" />
            </CustomCard>
        </Background>
    );
}
