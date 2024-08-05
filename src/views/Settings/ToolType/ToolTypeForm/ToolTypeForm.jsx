import React, { useEffect } from "react";
import CustomAccordion from "../../../../shared/Accordion/CustomAccordion";
import { CustomForm, CustomInput, CustomInputSwitch } from "../../../../shared/Input/AllInputs";
import PrimaryButtom, { PrimaryButtonOutlined } from "../../../../shared/Button/PrimaryButton";
import ToolTypeContainer from "./ToolTypeContainer";

const ToolTypeForm = ({ type }) => {
    const { toolType, handleChange, loading, onSubmit, setFormType, history } = ToolTypeContainer();

    useEffect(() => {
        setFormType(type);
    }, [type, setFormType]);

    return (
        <CustomAccordion isActive={true} title="toolType Information">
            <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                <CustomInput label="Name" name="name" onChange={handleChange} data={toolType} required />
                <CustomInput label="Code" name="code" onChange={handleChange} data={toolType} />
                <CustomInputSwitch label="Mold" name="isMold" onChange={handleChange} data={toolType} />
            </CustomForm>

            <div className="flex justify-content-center">
                <PrimaryButtom loading={loading} label="Save" onClick={onSubmit} />
                <PrimaryButtonOutlined onClick={() => history.goBack()} label="Cancel" />
            </div>
        </CustomAccordion>
    );
};

export default ToolTypeForm;
