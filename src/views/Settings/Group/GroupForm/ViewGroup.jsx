import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import GroupForm from "./GroupForm";

const ViewGroup = () => {
    return (
        <Background heading="Setting">
            <CustomCard title="View Group">
                <GroupForm type="VIEW" />
            </CustomCard>
        </Background>
    );
};

export default ViewGroup;
