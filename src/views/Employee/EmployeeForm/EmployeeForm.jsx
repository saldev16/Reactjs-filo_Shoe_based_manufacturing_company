import React, { useEffect } from "react";
import EmployeeContainer from "./EmployeeContainer";

import CustomAccordion from "../../../shared/Accordion/CustomAccordion";
import PrimaryButtom, {
  PrimaryButtonOutlined,
} from "../../../shared/Button/PrimaryButton";

import Permissions from "./Permissions";
import AdvancedInfo from "./AdvancedInfo";

import {
  CustomForm,
  CustomInput,
  CustomTextArea,
  CustomDropDown,
  CustomInputMask,
  CustomCalenderInput,
  CustomTreeSelect,
} from "../../../shared/Input/AllInputs";
import CustomImageInput from "../../../shared/Input/CustomImageInput";
import CustomFilesInput from "../../../shared/Input/CustomFilesInput";

export default function EmployeeForm({ type }) {
  const {
    employee,
    handleChange,
    selectedPermissions,
    handlePermissionSelection,
    Departments,
    history,
    onSubmit,
    loading,
    setFormType,
    pricingTypes,
    getExpertiesTreeSelect,
    handleExpertise,
    getMachinesWithExpertiseId,
  } = EmployeeContainer();
  useEffect(() => {
    setFormType(type);
  }, [type, setFormType]);
  return (
    <div style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
      <CustomAccordion
        isActive={true}
        extraClassName="employee-accordion"
        title="Personal Information"
      >
        <CustomForm>
          <CustomInput
            data={employee}
            onChange={handleChange}
            name="firstName"
            label="First Name"
            required
          />
          <CustomInput
            data={employee}
            onChange={handleChange}
            name="lastName"
            label="Last Name"
            required
          />
          <CustomImageInput
            data={employee}
            onFilesChange={handleChange}
            name="image"
            editable={type !== "VIEW" ? true : false}
          />
          <CustomFilesInput
            data={employee}
            onFilesChange={handleChange}
            name="files"
            label="Upload Files"
            accept="image/*,.pdf"
            removeable
            editable
            multiple
          />
          <CustomCalenderInput
            data={employee}
            onChange={handleChange}
            name="dob"
            label="D.O.B."
          />
          <CustomInput
            data={employee}
            onChange={handleChange}
            name="address"
            label="Address"
          />
          <CustomInputMask
            data={employee}
            onChange={handleChange}
            name="mobile"
            label="Phone Number"
          />
          <CustomInput
            data={employee}
            onChange={handleChange}
            name="email"
            label="Email"
            type="email"
            required
          />

          <CustomDropDown
            data={employee}
            onChange={handleChange}
            name="department"
            label="Department"
            options={Departments}
          />
          <CustomTreeSelect
            data={employee}
            name="expertiseRaw"
            label="Expertise"
            options={getExpertiesTreeSelect()}
            onChange={handleExpertise}
            filter
            metaKeySelection={false}
            selectionMode="checkbox"
            display="chip"
          />
          <CustomDropDown
            data={employee}
            name="jobPosition"
            disabled={employee?.expertise?.length ? false : true}
            label="Job Position"
            options={employee?.expertise}
            onChange={handleChange}
            placeholder="Select a Job Position"
            required
          />
          <CustomDropDown
            data={employee}
            name="machine"
            disabled={employee?.jobPosition?._id ? false : true}
            label="Machine"
            options={getMachinesWithExpertiseId(employee?.jobPosition?._id)}
            onChange={handleChange}
            placeholder="Select a Machine"
          />

          <CustomTextArea
            onChange={handleChange}
            name="description"
            label="Description"
            data={employee}
            rows={5}
            cols={30}
          />
        </CustomForm>
      </CustomAccordion>
      <CustomAccordion isActive={true} title="Advanced Information (Pricing)">
        <AdvancedInfo
          handleChange={handleChange}
          pricingTypes={pricingTypes}
          employee={employee}
        />
        <Permissions
          selected={selectedPermissions}
          setSelected={handlePermissionSelection}
        />
      </CustomAccordion>
      {type === "VIEW" ? null : (
        <div className="flex justify-content-center">
          <PrimaryButtom loading={loading} label="Save" onClick={onSubmit} />
          <PrimaryButtonOutlined
            onClick={() => history.goBack()}
            label="Cancel"
          />
        </div>
      )}
    </div>
  );
}
