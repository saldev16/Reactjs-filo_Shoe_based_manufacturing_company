import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import UnitForm from "./UnitForm";

const EditUnit = () => {
    return (
        <Background heading="Setting">
            <CustomCard title="Edit Unit">
                <UnitForm type="EDIT" />
            </CustomCard>
        </Background>
    );
};

export default EditUnit;
