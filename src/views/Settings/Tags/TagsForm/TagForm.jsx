import React, { useEffect } from "react";
import CustomAccordion from "../../../../shared/Accordion/CustomAccordion";
import { CustomForm, CustomInput } from "../../../../shared/Input/AllInputs";
import PrimaryButtom, { PrimaryButtonOutlined } from "../../../../shared/Button/PrimaryButton";
import TagContainer from "./TagContainer";

const TagForm = ({ type }) => {
    const { tag, handleChange, loading, onSubmit, setFormType, history } = TagContainer();

    useEffect(() => {
        setFormType(type);
    }, [type, setFormType]);

    return (
        <CustomAccordion isActive={true} title="Tag Information">
            <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                <CustomInput label="Name" name="name" onChange={handleChange} data={tag} required />
            </CustomForm>

            <div className="flex justify-content-center">
                <PrimaryButtom loading={loading} label="Save" onClick={onSubmit} />
                <PrimaryButtonOutlined onClick={() => history.goBack()} label="Cancel" />
            </div>
        </CustomAccordion>
    );
};

export default TagForm;
