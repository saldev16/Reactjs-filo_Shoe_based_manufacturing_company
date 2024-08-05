import React, { useEffect } from "react";
import CustomAccordion from "../../../../shared/Accordion/CustomAccordion";
import { CustomForm, CustomInput } from "../../../../shared/Input/AllInputs";
import PrimaryButtom, { PrimaryButtonOutlined } from "../../../../shared/Button/PrimaryButton";
import SeasonContainer from "./SeasonContainer";

const SeasonForm = ({ type }) => {
    const { season, handleChange, loading, onSubmit, setFormType, history } = SeasonContainer();

    useEffect(() => {
        setFormType(type);
    }, [type, setFormType]);

    return (
        <CustomAccordion isActive={true} title="Season Information">
            <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                <CustomInput label="Code" name="code" onChange={handleChange} data={season} />
                <CustomInput label="Name" name="name" onChange={handleChange} data={season} required />
            </CustomForm>

            <div className="flex justify-content-center">
                <PrimaryButtom loading={loading} label="Save" onClick={onSubmit} />
                <PrimaryButtonOutlined onClick={() => history.goBack()} label="Cancel" />
            </div>
        </CustomAccordion>
    );
};

export default SeasonForm;
