import React from "react";

import CustomAccordion from "../../../shared/Accordion/CustomAccordion";
import PrimaryButtom from "../../../shared/Button/PrimaryButton";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableCard from "../../../shared/TableCard/TableCard";

import Deletegreen from "../../../assets/icons/deletegreen.png";
import Viewer from "../../../assets/icons/view.png";
import Attach from "../../../assets/icons/link.png";
import { CustomChipInput, CustomDropDown, CustomForm, CustomInput, CustomInputNumber } from "../../../shared/Input/AllInputs";

const PreparationForm = ({
    type,
    prepare,
    handlePreparationChange,
    allOperations,
    allTools,
    prepareMaterial,
    handleChangePreparationMaterial,
    allMaterials,
    onAddMaterial,
    onDeleteMaterial,
    onEditMaterial,
    material,
    editOperationId,
    onEditOperation,
    labels,
}) => {
    const actions = (d, i) => {
        return (
            <div className="flex justify-content-around">
                <i className="fa-solid fa-pencil cursor-pointer" onClick={() => onEditMaterial(i.rowIndex)}></i>
                <i className="fa-solid fa-trash-can cursor-pointer" onClick={() => onDeleteMaterial(i.rowIndex)}></i>
            </div>
        );
    };
    return (
        <>
            <h2 className="mb-3">Preparation Table</h2>
            {/* Listing of Operations  */}

            <form>
                <div className="grid">
                    <div className="md:col-12">
                        <div className="relative curve operational-table bg-lightest-blue p-2">
                            <div className="flex">
                                {material?.operations?.map((item, i) => (
                                    <div key={i} className="p-1">
                                        <div
                                            className={`curve p-3 ${editOperationId === i + 1 ? "bg-blue-100" : "bg-white"}`}
                                            style={{ width: "20rem" }}
                                        >
                                            <div className="flex justify-content-between align-items-start">
                                                <div className="">
                                                    <div className="flex">
                                                        <h6>Operation Code:</h6>
                                                        <h6 className="text-main my-0 ml-2">{item?.operation?.code}</h6>
                                                    </div>
                                                    <div className="flex">
                                                        <h6>Operation Type: </h6>
                                                        <h6 className="text-main my-0 ml-2">{item?.operation?.name}</h6>
                                                    </div>
                                                </div>
                                                <img
                                                    src={Deletegreen}
                                                    onClick={() => onEditOperation(i)}
                                                    className=""
                                                    width={15}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex align-items-center mb-2">
                                                <h6 className="m-0">Process Name: </h6>
                                                <h6 className="text-main ms-2 my-0 ml-2">{item?.processName}</h6>
                                            </div>
                                            <div className="flex align-items-center mb-2">
                                                <h6 className="m-0">Tool: </h6>
                                                <h6 className="text-main ms-2 my-0 ml-2">{item?.tool?.code}</h6>
                                            </div>
                                            <div className="flex align-items-center mb-2">
                                                <h6 className="m-0">Operation Label: </h6>
                                                <h6 className="text-main my-0 ml-2 ml-2">{item?.label}</h6>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute top-0 right-0 mr-3 mt-3">
                                <button className="bg-main border-none p-2 curve ml-2">
                                    <img src={Attach} width="20" alt="" />
                                </button>
                                <button className="bg-main border-none p-2 curve ml-2">
                                    <img src={Viewer} width="20" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {/* Create Operation Form  */}
            <CustomAccordion isActive={true} extraClassName="employee-accordion" title="Create New Operation">
                <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                    <CustomDropDown
                        label="Operation Type"
                        name="operation"
                        onChange={handlePreparationChange}
                        data={prepare}
                        options={allOperations}
                        optionLabel="name"
                        required
                    />
                    <CustomInput
                        label="Process Name"
                        name="processName"
                        onChange={handlePreparationChange}
                        data={prepare}
                        required
                    />
                    <CustomDropDown
                        label="Tools"
                        name="tool"
                        onChange={handlePreparationChange}
                        data={prepare}
                        options={allTools}
                        optionLabel="code"
                    />
                    <CustomInputNumber
                        label="Capicity Per Hour"
                        name="capacityPerHour"
                        onChange={handlePreparationChange}
                        data={prepare}
                    />
                    <CustomDropDown
                        label="Operation Label"
                        name="label"
                        onChange={handlePreparationChange}
                        data={prepare}
                        options={labels}
                        required
                    />
                    <CustomInputNumber
                        label="No of Label"
                        name="noOflabels"
                        onChange={handlePreparationChange}
                        data={prepare}
                        required={prepare.label !== "None"}
                        disabled={prepare.label === "None"}
                    />
                    <CustomChipInput
                        label="Label"
                        name="labels"
                        onChange={handlePreparationChange}
                        data={prepare}
                        required={prepare.label !== "None"}
                        disabled={type === "VIEW" || prepare.label === "None"}
                    />
                </CustomForm>
            </CustomAccordion>
            <CustomAccordion isActive={true} extraClassName="employee-accordion" title="Raw Material Details">
                <CustomForm style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                    <CustomDropDown
                        label="Raw Material"
                        name="material"
                        onChange={handleChangePreparationMaterial}
                        data={prepareMaterial}
                        options={allMaterials}
                        required
                    />
                    <CustomInputNumber label="Qty" name="qty" onChange={handleChangePreparationMaterial} data={prepareMaterial} />
                </CustomForm>

                <div className="flex justify-content-end">
                    <PrimaryButtom onClick={onAddMaterial} label="Add" />
                </div>
            </CustomAccordion>
            <TableCard>
                <DataTable
                    value={prepare?.materials}
                    className="p-datatable-gridlines"
                    showGridlines
                    responsiveLayout="scroll"
                    emptyMessage="No Material found."
                >
                    <Column field="material.name" header="Raw Material"></Column>
                    <Column field="qty" header="Qty"></Column>
                    <Column body={actions} style={{ width: "200px" }} header="Action"></Column>
                </DataTable>
            </TableCard>
        </>
    );
};

export default PreparationForm;
