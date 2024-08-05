import React, { useEffect } from "react";
import CustomAccordion from "../../../../shared/Accordion/CustomAccordion";
import { CustomForm, CustomInput } from "../../../../shared/Input/AllInputs";
import PrimaryButtom, { PrimaryButtonOutlined } from "../../../../shared/Button/PrimaryButton";
import ClassTypeContainer from "./ClassTypeContainer";

const ClassTypeForm = ({ type }) => {
    const { classType, handleChange, loading, onSubmit, setFormType, history } = ClassTypeContainer();

    useEffect(() => {
        setFormType(type);
    }, [type, setFormType]);

    return (
        <CustomAccordion isActive={true} title="classType Information">
            <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                <CustomInput label="Code" name="code" onChange={handleChange} data={classType} />
                <CustomInput label="Name" name="name" onChange={handleChange} data={classType} required />
            </CustomForm>

            <div className="flex justify-content-center">
                <PrimaryButtom loading={loading} label="Save" onClick={onSubmit} />
                <PrimaryButtonOutlined onClick={() => history.goBack()} label="Cancel" />
            </div>
        </CustomAccordion>
    );
};

export default ClassTypeForm;
