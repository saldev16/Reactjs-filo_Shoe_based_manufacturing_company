import React from "react";
import PrimaryButtom, { PrimaryButtonOutlined } from "../../../shared/Button/PrimaryButton";
import { CustomForm, CustomInput, CustomTextArea, CustomChipInput, CustomInputNumber, CustomDropDown, CustomMultiSelect } from "../../../shared/Input/AllInputs";

export default function SubToolForm({ subTool, machines, locations, handleChange, onCancel, onSave }) {
    return (
        <>
            <CustomForm>
                <CustomInput data={subTool} onChange={handleChange} name="name" label="Name" required />
                <CustomInputNumber data={subTool} onChange={handleChange} name="cover" label="Cover" />
                <CustomInputNumber data={subTool} onChange={handleChange} name="weight" label="Weight" />
                <CustomMultiSelect col={6} options={machines} data={subTool} onChange={handleChange} value={subTool && subTool.machines} name="machines" label="Machines" />
                <CustomDropDown options={locations} optionLabel="" data={subTool} value={subTool && subTool.location} onChange={handleChange} name="location" label="Location" />
                <CustomTextArea data={subTool} onChange={handleChange} name="notes" label="Notes" />
            </CustomForm>
            <div className="flex justify-content-center">
                <PrimaryButtom label="Save" onClick={onSave} />
                <PrimaryButtonOutlined label="Cancel" onClick={onCancel} />
            </div>
        </>
    );
}
