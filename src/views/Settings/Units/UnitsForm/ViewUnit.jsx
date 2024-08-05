import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import UnitForm from "./UnitForm";

const ViewUnit = () => {
    return (
        <Background heading="Setting">
            <CustomCard title="View Unit">
                <UnitForm type="VIEW" />
            </CustomCard>
        </Background>
    );
};

export default ViewUnit;
