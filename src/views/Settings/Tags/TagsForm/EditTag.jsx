import React from "react";
import Background from "../../../../shared/Background/Background";
import CustomCard from "../../../../shared/Card/CustomCard";
import TagForm from "./TagForm";

const EditTag = () => {
    return (
        <Background heading="Setting">
            <CustomCard title="Edit Tag">
                <TagForm type="EDIT" />
            </CustomCard>
        </Background>
    );
};

export default EditTag;
