import React from "react";
import Background from "../../../shared/Background/Background";
import CustomCard from "../../../shared/Card/CustomCard";
import MaterialsForm from "./MaterialsForm";
const AddMaterials = () => {
    return (
        <Background heading="Design">
            <CustomCard title="Add New Material">
                <MaterialsForm type="ADD" />
            </CustomCard>
        </Background>
    );
};

export default AddMaterials;
