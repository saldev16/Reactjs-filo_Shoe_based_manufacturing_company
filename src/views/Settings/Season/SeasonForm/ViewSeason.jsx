import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import SeasonForm from "./SeasonForm";

const ViewSeason = () => {
    return (
        <Background heading="Setting">
            <CustomCard title="View Season">
                <SeasonForm type="VIEW" />
            </CustomCard>
        </Background>
    );
};

export default ViewSeason;
