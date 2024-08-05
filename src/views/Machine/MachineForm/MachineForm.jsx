import React, { useEffect } from "react";
import MachineContainer from "./MachineContainer";
import CustomAccordion from "../../../shared/Accordion/CustomAccordion";
import PrimaryButtom, {
  PrimaryButtonOutlined,
} from "../../../shared/Button/PrimaryButton";

import {
  CustomForm,
  CustomInput,
  CustomInputNumber,
  CustomTextArea,
  CustomDropDown,
  CustomCalenderInput,
} from "../../../shared/Input/AllInputs";

import CustomImageInput from "../../../shared/Input/CustomImageInput";
import CustomFilesInput from "../../../shared/Input/CustomFilesInput";

export default function MachineForm({ type }) {
  const {
    machine,
    operation,
    getCode,
    handleChange,
    loading,
    onSubmit,
    setFormType,
    history,
  } = MachineContainer();
  useEffect(() => {
    setFormType(type);
  }, [type, setFormType]);

  return (
    <CustomAccordion
      isActive={true}
      extraClassName="employee-accordion"
      title="Machine Information"
    >
      <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
        <CustomDropDown
          data={machine}
          name="operation"
          label="Operation"
          onChange={handleChange}
          options={operation}
        />
        <CustomInput
          data={machine}
          name="name"
          label="Name"
          onChange={handleChange}
          required
        />
        <CustomInput
          value={getCode()}
          label="Code"
          onChange={handleChange}
          required
          disabled
        />
        <CustomInputNumber
          data={machine}
          name="stationsQuantity"
          label="Stations Quantity"
          onChange={handleChange}
          required
        />
        <CustomCalenderInput
          data={machine}
          name="startTime"
          label="Start Time"
          onChange={handleChange}
        />
        <CustomCalenderInput
          data={machine}
          name="endTime"
          label="End Time"
          onChange={handleChange}
        />
        <CustomTextArea
          data={machine}
          name="description"
          label="Description"
          onChange={handleChange}
          required
          rows={5}
        />
        <CustomImageInput
          data={machine}
          onFilesChange={handleChange}
          name="images"
          editable={type !== "VIEW" ? true : false}
          multiple
          removeable
        />
        <CustomFilesInput
          data={machine}
          onFilesChange={handleChange}
          name="files"
          label="Upload Files"
          accept="image/*,.dwg"
          removeable
          editable
          multiple
        />
      </CustomForm>
      <div className="flex justify-content-center">
        <PrimaryButtom loading={loading} label="Save" onClick={onSubmit} />
        <PrimaryButtonOutlined
          onClick={() => history.goBack()}
          label="Cancel"
        />
      </div>
    </CustomAccordion>
  );
}
