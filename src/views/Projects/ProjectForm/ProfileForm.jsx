import React, { useState } from "react";
import CustomAccordion from "../../../shared/Accordion/CustomAccordion";
import PrimaryButtom, { PrimaryButtonOutlined } from "../../../shared/Button/PrimaryButton";
import CustomCard from "../../../shared/Card/CustomCard";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableCard from "../../../shared/TableCard/TableCard";
import Viewer from "../../../assets/icons/view.png";
import Attach from "../../../assets/icons/link.png";
import ProfileCard from "./ProfileCard";
import { Chip } from "primereact/chip";
import { AutoComplete } from "primereact/autocomplete";

import {
    CustomForm,
    CustomInput,
    CustomTextArea,
    CustomDropDown,
    CustomChipInput,
    CustomAutoComplete,
} from "../../../shared/Input/AllInputs";
import CustomImageInput from "../../../shared/Input/CustomImageInput";
import ProjectContainer from "../../Tools/ToolForm/ToolContainer";
import PrimaryButton from "../../../shared/Button/PrimaryButton";
import { CustomD3Tree, ReactFlowTree } from "../../../shared/Tree/CustomTree";

export default function ProfileForm({
    project,
    profile,
    operation,
    material,
    handleProfileChange,
    handleOperationChange,
    handleMaterialChange,
    onProfileSave,
    onAddMaterial,
    deleteMaterial,
    editMaterial,
    onAddOperation,
    editOperationId,
    onEditOperation,
    editProfileId,
    onEditProfile,
    onAdoptProfile,
    allOperations,
    allTools,
    onSubmit,
    history,
    loading,
    allTags,
    onClickAddProfileTool,
    type,
    handleNodeEdges,
    setProfile,
    allMaterials,
    setOperation,
}) {
    const [filtered, setFiltered] = useState([]);
    const [operationsExpandedRows, setOperationsExpandedRows] = useState(null);

    const actions = (d, i) => {
        return (
            <div className="flex justify-content-around">
                <i className="fa-solid fa-pencil cursor-pointer" onClick={() => editMaterial(i.rowIndex)}></i>
                <i className="fa-solid fa-trash-can cursor-pointer" onClick={() => deleteMaterial(i.rowIndex)}></i>
            </div>
        );
    };

    const rawMaterialActions = (d, i) => {
        return (
            <div className="flex justify-content-around">
                <i
                    className="fa-solid fa-pencil cursor-pointer"
                    onClick={() => {
                        const op = profile.operations[i.rowIndex];
                        onEditOperation(op.id);
                    }}
                ></i>
            </div>
        );
    };

    const rowExpansionTemplate = (data) => {
        data = data.materials.map((item) => item);
        return (
            <div className="p-3">
                <DataTable value={data}>
                    <Column body={materialTagsTemplate} header="Material Tag"></Column>
                    <Column field="description" header="Material Tag Description"></Column>
                    <Column body={rawMaterialTemplate} header="Raw Material"></Column>
                    <Column field="qty" header="Raw Material Quantity"></Column>
                    <Column field="unit" header="Unit"></Column>
                </DataTable>
            </div>
        );
    };

    const search = (event, data) => {
        const materialTags = data.materialTags;

        const filteredMaterials = [];
        materialTags.map((item) => {
            allMaterials.map((mat) => {
                if (mat?.tags.includes(item)) {
                    if (!filteredMaterials.includes(mat)) {
                        filteredMaterials.push(mat);
                    }
                }
            });
            return filteredMaterials;
        });

        let _filtered;

        if (!event.query.trim().length) {
            _filtered = [...filteredMaterials];
        } else {
            _filtered = filteredMaterials.filter((mat) => {
                return mat.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
        setFiltered(_filtered);
    };

    const materialTagsTemplate = (d, i) => {
        return (
            <div className=" flex flex-wrap gap-2">
                {d?.materialTags.map((item, index) => {
                    return <Chip key={index} label={item} />;
                })}
            </div>
        );
    };

    const rawMaterialTemplate = (d, i) => {
        return (
            <div className=" flex flex-wrap gap-2">
                <AutoComplete
                    id="_id"
                    field="name"
                    value={d?.rawMaterial}
                    suggestions={filtered}
                    completeMethod={(e) => search(e, d)}
                    onChange={(e) => {
                        d.rawMaterial = e.value;
                        setOperation({ ...operation });
                    }}
                    onSelect={(e) => {
                        d.unit = e.value.unit.name;
                        setOperation({ ...operation });
                    }}
                    forceSelection="true"
                />
            </div>
        );
    };

    return (
        <CustomCard title="Profile">
            {/* Listing Of Profiles  */}
            <ProfileCard
                onEditProfile={onEditProfile}
                project={project}
                editProfileId={editProfileId}
                type={type}
                onAdoptProfile={onAdoptProfile}
            />
            {/* Create Profile Form  */}
            <CustomAccordion isActive={true} extraClassName="employee-accordion" title="Create New Profile">
                <CustomForm>
                    <CustomInput
                        data={profile}
                        onChange={handleProfileChange}
                        name="color"
                        label="Color"
                        required
                        disabled={type === "VIEW"}
                    />
                    {/* <CustomChipInput data={profile} onChange={handleProfileChange} name="sizes" label="Size" required /> */}
                    <CustomTextArea
                        data={profile}
                        onChange={handleProfileChange}
                        name="description"
                        label="Description"
                        rows={5}
                        disabled={type === "VIEW"}
                    />
                    <CustomImageInput
                        data={profile}
                        onFilesChange={handleProfileChange}
                        name="images"
                        label="Upload Images"
                        multiple
                        editable
                        removeable
                        disabled={type === "VIEW"}
                    />
                </CustomForm>
            </CustomAccordion>
            {/* Listing of Operations  */}
            <CustomAccordion isActive={true} extraClassName="employee-accordion" title="Operation Table">
                <form>
                    <div className="grid">
                        <div className="md:col-12">
                            <div className="relative curve operational-table bg-lightest-blue p-2">
                                <div className="flex">
                                    {profile.operations && profile.operations.length ? (
                                        <ReactFlowTree
                                            data={profile.operations}
                                            handleNodeEdges={handleNodeEdges}
                                            onEditOperation={onEditOperation}
                                            state={profile}
                                            setState={setProfile}
                                            keyToBeUpdated="operations"
                                        ></ReactFlowTree>
                                    ) : null}
                                </div>
                                <div className="absolute top-0 right-0 mr-3 mt-3">
                                    <button className="bg-main border-none p-2 curve ml-2">
                                        <img src={Viewer} width="20" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </CustomAccordion>

            {/* Operation Table */}
            <CustomAccordion isActive={true} extraClassName="employee-accordion" title="Operation Table">
                <TableCard>
                    <DataTable
                        value={profile.operations}
                        className="p-datatable-gridlines"
                        showGridlines
                        responsiveLayout="scroll"
                        emptyMessage="No Operation found."
                        expandedRows={operationsExpandedRows}
                        onRowToggle={(e) => setOperationsExpandedRows(e.data)}
                        rowExpansionTemplate={rowExpansionTemplate}
                    >
                        <Column field="operation.code" header="Operation Code"></Column>
                        <Column field="operation.name" header="Operation Name"></Column>
                        <Column field="processName" header="Process"></Column>
                        <Column field="capacityPerHour" header="Capacity Per hour"></Column>
                        <Column field="tool" header="Tool"></Column>
                        <Column field="label" header="Operations Lables"></Column>
                        <Column field="noOflabels" header="Labels Quantity"></Column>
                        <Column expander={true} body={rawMaterialActions} header="Action"></Column>
                        <Column expander={true} style={{ width: "5rem" }} />
                    </DataTable>
                </TableCard>
            </CustomAccordion>

            {/* Create Operation Form  */}
            <CustomAccordion isActive={true} extraClassName="employee-accordion" title="Create New Operation">
                <CustomForm>
                    <CustomDropDown
                        data={operation}
                        onChange={handleOperationChange}
                        name="operation"
                        label="Operation Type"
                        options={allOperations}
                        required
                        disabled={type === "VIEW"}
                    />
                    <CustomInput
                        data={operation}
                        onChange={handleOperationChange}
                        name="processName"
                        label="Process Name"
                        required
                        disabled={type === "VIEW"}
                    />
                    <CustomInput col={6} data={operation} onChange={handleOperationChange} name="tool" label="Tool" disabled />
                    <div className="flex justify-content-end h-3rem mt-1">
                        <PrimaryButton label="Add" onClick={onClickAddProfileTool} disabled={type === "VIEW"} />
                    </div>
                    <CustomInput
                        data={operation}
                        onChange={handleOperationChange}
                        name="capacityPerHour"
                        label="Capicity Per Hour"
                        required
                        disabled={type === "VIEW"}
                    />
                </CustomForm>
            </CustomAccordion>

            <CustomAccordion isActive={true} extraClassName="employee-accordion" title="Labeling">
                <CustomForm>
                    <CustomDropDown
                        data={operation}
                        onChange={handleOperationChange}
                        name="label"
                        label="Operation Label"
                        options={["None", "Fixed Quantity", "Related with Sizes Quantity"]}
                        optionLabel=""
                        required
                        disabled={type === "VIEW"}
                    />
                    <CustomInput
                        data={operation}
                        onChange={handleOperationChange}
                        name="noOflabels"
                        label="No of Label"
                        required={operation.label !== "None"}
                        type="number"
                        disabled={type === "VIEW" || operation.label === "None"}
                    />
                    <CustomChipInput
                        data={operation}
                        onChange={handleOperationChange}
                        name="labels"
                        label="Label"
                        required={operation.label !== "None"}
                        disabled={type === "VIEW" || operation.label === "None"}
                    />
                </CustomForm>
            </CustomAccordion>
            <CustomAccordion isActive={true} extraClassName="employee-accordion" title="Add Material">
                <CustomForm>
                    <CustomAutoComplete
                        suggestions={allTags}
                        onChange={handleMaterialChange}
                        data={material}
                        name="materialTags"
                        label="Material Tag"
                        forceSelection={true}
                        required
                        multiple
                        disabled={type === "VIEW"}
                    />
                    <CustomInput
                        data={material}
                        onChange={handleMaterialChange}
                        name="qty"
                        label="Qty"
                        type="number"
                        disabled={type === "VIEW"}
                    />
                    <CustomInput
                        data={material}
                        onChange={handleMaterialChange}
                        name="description"
                        label="Description"
                        disabled={type === "VIEW"}
                    />
                </CustomForm>

                <div className="flex justify-content-end">
                    <PrimaryButtom onClick={onAddMaterial} label="Add" disabled={type === "VIEW"} />
                </div>
            </CustomAccordion>
            <TableCard>
                <DataTable
                    value={operation.materials}
                    className="p-datatable-gridlines"
                    showGridlines
                    responsiveLayout="scroll"
                    emptyMessage="No Material Tag found."
                >
                    <Column body={materialTagsTemplate} header="Material Tag"></Column>
                    <Column field="description" header="Description"></Column>
                    <Column field="qty" header="Qty"></Column>
                    {type !== "VIEW" ? <Column body={actions} style={{ width: "200px" }} header="Action"></Column> : null}
                </DataTable>
            </TableCard>
            <br />
            <div className="flex justify-content-center">
                <PrimaryButtom onClick={onAddOperation} label={editOperationId ? "Update Operation" : "Create Operation"} />
                {profile.operations.length > 0 && (
                    <PrimaryButtonOutlined onClick={onProfileSave} label={editProfileId ? "Update Profile" : "Create Profile"} />
                )}
                {project?.profiles?.length > 0 && <PrimaryButtom loading={loading} label="Save Project" onClick={onSubmit} />}
                <PrimaryButtonOutlined onClick={() => history.push("/projects")} label="Cancel" />
            </div>
        </CustomCard>
    );
}
