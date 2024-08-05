import React, { useEffect } from "react";
import ToolContainer from "./ToolContainer";
import CustomImageInput from "../../../shared/Input/CustomImageInput";
import CustomFilesInput from "../../../shared/Input/CustomFilesInput";

import CustomAccordion from "../../../shared/Accordion/CustomAccordion";
import PrimaryButtom, { PrimaryButtonOutlined } from "../../../shared/Button/PrimaryButton";
import SubToolsTable from "./SubToolsTable";

import {
    CustomForm,
    CustomInput,
    CustomTextArea,
    CustomDropDown,
    CustomChipInput,
    CustomInputButton,
} from "../../../shared/Input/AllInputs";
import CustomDialog from "../../../shared/Dialog/CustomDialog";
import SubToolForm from "./SubToolForm";

export default function ToolForm({ type }) {
    const {
        tool,
        handleChange,
        handleSubToolChange,
        setFormType,
        getCode,
        history,
        loading,
        onSubmit,
        allOperations,
        groups,
        classTypes,
        toolTypes,
        seasons,
        handleDeleteTool,
        subTool,
        setSubTool,
        generateSubTools,
        onSubToolSave,
        openSubToolEdit,
        handleOnAdd,
        onRemove,
        handleKeyUp,
        locations,
        allMachines,
        injectionTypes
    } = ToolContainer();
    
    useEffect(() => {
        setFormType(type);
    }, [type, setFormType]);

    return (
        <>
            <CustomDialog header="Sub tools Details" visible={subTool} onHide={() => setSubTool(null)}>
                <SubToolForm
                    subTool={subTool}
                    locations={locations}
                    machines={allMachines}
                    handleChange={handleSubToolChange}
                    onCancel={() => setSubTool(null)}
                    onSave={onSubToolSave}
                />
            </CustomDialog>
            <div style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                <CustomAccordion isActive={true} extraClassName="employee-accordion" title="Tool Information">
                    <CustomForm>
                        <CustomDropDown
                            data={tool}
                            onChange={handleChange}
                            options={allOperations}
                            name="operation"
                            label="Operation"
                            disabled={type !== "ADD" ? true : false}
                            required
                        />
                        <CustomDropDown
                            data={tool}
                            onChange={handleChange}
                            options={toolTypes}
                            name="toolType"
                            label="Tool Type"
                            disabled={type !== "ADD" ? true : false}
                            required
                        />
                        <CustomDropDown
                            data={tool}
                            onChange={handleChange}
                            options={seasons}
                            name="season"
                            label="Season"
                            disabled={type !== "ADD" ? true : false}
                            required
                        />
                        <CustomDropDown
                            data={tool}
                            onChange={handleChange}
                            options={classTypes}
                            name="classType"
                            label="Class Type"
                            disabled={type !== "ADD" ? true : false}
                            required
                        />
                        <CustomDropDown
                            data={tool}
                            onChange={handleChange}
                            options={groups}
                            name="group"
                            label="Group"
                            disabled={type !== "ADD" ? true : false}
                            required
                        />
                        <CustomInput
                            data={tool}
                            onChange={handleChange}
                            name="code"
                            label="Tools Code"
                            value={getCode()}
                            disabled
                        />
                        {tool?.toolType?.isMold ? (
                            <CustomDropDown data={tool} options={injectionTypes} onChange={handleChange} name="injectionType" label="Injection Type" 
                            disabled={type !== "ADD" ? true : false} />
                        ) : null}
                        <CustomTextArea data={tool} onChange={handleChange} name="description" label="Description" rows={5} />
                        <CustomTextArea data={tool} onChange={handleChange} name="notes" label="Notes" rows={5} 
                        disabled={type !== "ADD" ? true : false} />
                        <CustomChipInput
                            data={tool}
                            // onChange={handleChange}
                            onKeyUp={handleKeyUp}
                            onAdd={handleOnAdd}
                            onRemove={onRemove}
                            name="names"
                            label="names"
                            required
                            keyFilter={/^[0-9~/]*$/}
                        />
                        <CustomInputButton label="Generate Sub Tools" col="12" position="end" onClick={generateSubTools} />
                        <CustomImageInput
                            data={tool}
                            onFilesChange={handleChange}
                            name="images"
                            label="Upload Images"
                            disabled={type !== "ADD" ? true : false}
                            editable={type !== "VIEW" ? true : false}
                            multiple
                            removeable
                        />
                        {/* {type === "ADD" ? ( */}
                        <CustomFilesInput
                            data={tool}
                            onFilesChange={handleChange}
                            name="files"
                            label="Upload Files"
                            accept="image/*,.pdf"
                            disabled={type !== "ADD" ? true : false}
                            removeable
                            editable
                            multiple
                        />
                        {/* ) : null} */}
                    </CustomForm>
                </CustomAccordion>
            </div>

            {tool?.subTool && tool?.subTool?.length ? (
                <SubToolsTable openSubToolEdit={openSubToolEdit} data={tool?.subTool} loading={loading} history={history} />
            ) : null}
            {type === "ADD" || type === "EDIT" ? (
                <div className="flex justify-content-center">
                    <PrimaryButtom loading={loading} label="Save" onClick={onSubmit} />
                    <PrimaryButtonOutlined onClick={() => history.goBack()} label="Cancel" />
                </div>
            ) : (
                <div className="flex justify-content-center mt-4">
                    <PrimaryButtonOutlined loading={loading} onClick={handleDeleteTool} label="Delete Tool" />
                    <PrimaryButtonOutlined onClick={() => history.goBack()} label="Cancel" />
                </div>
            )}
        </>
    );
}
