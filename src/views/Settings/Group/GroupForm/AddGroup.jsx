import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import GroupForm from "./GroupForm";

export default function AddGroup() {
    return (
        <Background heading="Setting">
            <CustomCard title="Add New Group">
                <GroupForm type="ADD" />
            </CustomCard>
        </Background>
    );
}
