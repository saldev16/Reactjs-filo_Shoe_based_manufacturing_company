import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import SeasonForm from "./SeasonForm";

const EditSeason = () => {
    return (
        <Background heading="Setting">
            <CustomCard title="Edit Season">
                <SeasonForm type="EDIT" />
            </CustomCard>
        </Background>
    );
};

export default EditSeason;
