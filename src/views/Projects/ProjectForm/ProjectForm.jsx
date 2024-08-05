import React, { useEffect } from "react";
import ProjectContainer from "./ProjectContainer";
import CustomAccordion from "../../../shared/Accordion/CustomAccordion";
import CustomCard from "../../../shared/Card/CustomCard";
import ProfileForm from "./ProfileForm";
import { CustomForm, CustomInput, CustomTextArea, CustomDropDown } from "../../../shared/Input/AllInputs";
import PrimaryButton from "../../../shared/Button/PrimaryButton";
import CustomDialog from "../../../shared/Dialog/CustomDialog";
import SemiProducedMaterialsForm from "./SemiProducedMaterialForm";

export default function ProjectForm({ type }) {
    const {
        project,
        profile,
        operation,
        material,
        handleChange,
        setFormType,
        handleProfileChange,
        handleOperationChange,
        handleMaterialChange,
        history,
        loading,
        onSubmit,
        onProfileSave,
        onAddMaterial,
        deleteMaterial,
        editMaterial,
        groups,
        classTypes,
        injectionTypes,
        seasons,
        onAddOperation,
        editOperationId,
        onEditOperation,
        editProfileId,
        onEditProfile,
        onAdoptProfile,
        allOperations,
        allTools,
        allTags,
        onClickAddInjectionTool,
        onClickAddProfileTool,
        operationsTree,
        handleNodeEdges,
        setProfile,
        allMaterials,
        setOperation,
        semiProducedMaterial,
        setSemiProducedMaterial,
        showSemiProducedMaterialDialog,
        setShowSemiProducedMaterialDialog,
        allCategories,
        allUnits,
        getTreeTable,
        // onAddOrCancelSemiProducedMaterial,
        handleSemiProducedMatChange,
    } = ProjectContainer();

    useEffect(() => {
        setFormType(type);
    }, [type, setFormType]);

    return (
        <>
            <CustomDialog
                header="Semi Produced Material Details"
                visible={showSemiProducedMaterialDialog}
                onHide={() => {
                    setSemiProducedMaterial(null);
                    setShowSemiProducedMaterialDialog(false);
                }}
                position="center"
            >
                <SemiProducedMaterialsForm
                    // onSave={onAddOrCancelSemiProducedMaterial}
                    categories={allCategories}
                    units={allUnits}
                    getTreeTable={getTreeTable}
                    semiProducedMaterial={semiProducedMaterial}
                    handleSemiProducedMatChange={handleSemiProducedMatChange}
                />
            </CustomDialog>
            <CustomCard title={type === "EDIT" ? "Edit Project" : type === "VIEW" ? "View Project" : "Add Project"}>
                <div style={type === "VIEW" ? { pointerEvents: "none" } : {}}>
                    <CustomAccordion isActive={true} extraClassName="employee-accordion" title="Project Information">
                        <CustomForm>
                            <CustomInput data={project} onChange={handleChange} name="name" label="Name" required />
                            <CustomDropDown
                                data={project}
                                onChange={handleChange}
                                name="classType"
                                label="Class"
                                options={classTypes}
                                required
                            />
                            <CustomDropDown
                                data={project}
                                onChange={handleChange}
                                name="group"
                                label="Group"
                                options={groups}
                                required
                            />
                            <CustomDropDown
                                data={project}
                                onChange={handleChange}
                                name="injectionType"
                                label="Injection Type"
                                options={injectionTypes}
                                required
                            />
                            <CustomDropDown
                                data={project}
                                onChange={handleChange}
                                name="season"
                                label="Season"
                                options={seasons}
                                required
                            />
                            <CustomDropDown
                                data={project}
                                onChange={handleChange}
                                name="status"
                                label="Status"
                                options={["PROCESSING", "READY"]}
                                required
                                optionLabel=""
                            />
                            <CustomInput
                                col={6}
                                data={project}
                                onChange={handleChange}
                                value={project.injectionTool}
                                name="injectionTool"
                                label="Injection Tool"
                                disabled
                            />
                            <div className="flex justify-content-end h-3rem mt-1">
                                <PrimaryButton label="Add" onClick={onClickAddInjectionTool} />
                            </div>
                            <CustomTextArea
                                data={project}
                                onChange={handleChange}
                                name="description"
                                label="Description"
                                rows={5}
                            />
                        </CustomForm>
                    </CustomAccordion>
                </div>
            </CustomCard>
            <br />
            <ProfileForm
                project={project}
                profile={profile}
                operation={operation}
                material={material}
                allTags={allTags}
                editOperationId={editOperationId}
                handleProfileChange={handleProfileChange}
                onProfileSave={onProfileSave}
                handleOperationChange={handleOperationChange}
                handleMaterialChange={handleMaterialChange}
                onAddMaterial={onAddMaterial}
                deleteMaterial={deleteMaterial}
                editMaterial={editMaterial}
                onAddOperation={onAddOperation}
                onEditOperation={onEditOperation}
                editProfileId={editProfileId}
                onEditProfile={onEditProfile}
                onAdoptProfile={onAdoptProfile}
                onClickAddProfileTool={onClickAddProfileTool}
                allOperations={allOperations}
                allTools={allTools}
                onSubmit={onSubmit}
                history={history}
                loading={loading}
                type={type}
                handleNodeEdges={handleNodeEdges}
                operationsTree={operationsTree}
                setProfile={setProfile}
                allMaterials={allMaterials}
                setOperation={setOperation}
            />
        </>
    );
}
