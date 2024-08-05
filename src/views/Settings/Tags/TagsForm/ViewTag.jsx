import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import TagForm from "./TagForm";

const ViewTag = () => {
    return (
        <Background heading="Setting">
            <CustomCard title="View Tag">
                <TagForm type="VIEW" />
            </CustomCard>
        </Background>
    );
};

export default ViewTag;
