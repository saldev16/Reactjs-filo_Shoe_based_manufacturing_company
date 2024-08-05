import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import TagForm from "./TagForm";

export default function AddTag() {
    return (
        <Background heading="Setting">
            <CustomCard title="Add New Tag">
                <TagForm type="ADD" />
            </CustomCard>
        </Background>
    );
}
