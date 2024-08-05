import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import MaterialsForm from "./MaterialsForm";

const ViewMaterials = () => {
    return (
        <Background heading="Design">
            <CustomCard title="View Material">
                <MaterialsForm type="VIEW" />
            </CustomCard>
        </Background>
    );
};

export default ViewMaterials;
