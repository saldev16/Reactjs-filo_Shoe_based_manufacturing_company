import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import GroupForm from "./GroupForm";

const EditGroup = () => {
    return (
        <Background heading="Setting">
            <CustomCard title="Edit Group">
                <GroupForm type="EDIT" />
            </CustomCard>
        </Background>
    );
};

export default EditGroup;
