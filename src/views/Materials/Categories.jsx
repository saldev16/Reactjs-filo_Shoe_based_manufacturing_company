import React, { useState } from "react";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useDispatch } from "react-redux";
import { allValidations } from "../../utils/formValidations";
import { showFormErrors } from "../../utils/commonFunctions";
import { addCategory, editCategory } from "../../redux/actions/materialAction";

import PrimaryButton from "../../shared/Button/PrimaryButton";

export default function Categories({ allCategories, getTreeTable, activeCategory, setActiveCategory }) {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [info, setInfo] = useState({
        heading: "",
        categoryName: "",
        formType: "",
        parent: "",
    });

    const [loading, setLoading] = useState(false);

    const onHide = () => {
        setInfo({});
        setVisible(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        const formErrors = allValidations(name, value, info);
        setInfo((prev) => ({ ...prev, [name]: value, formErrors }));
    };

    const onAddCategory = (data) => {
        setInfo({ heading: `Add ${data.name}'s Sub category`, categoryName: "", formType: "ADD", parent: data?.key });
        setVisible(true);
    };

    const onAdd = (data) => {
        setInfo({ heading: `Add category`, categoryName: "", formType: "ADD", parent: null });
        setVisible(true);
    };

    const onEditCategory = (data) => {
        setInfo({ heading: `Edit ${data.name}`, categoryName: data.name, formType: "Edit", id: data?.key });
        setVisible(true);
    };

    const onSubmit = () => {
        if (showFormErrors(info, setInfo)) {
            if (info?.formType === "ADD") {
                dispatch(addCategory(info, setLoading, onHide));
            } else {
                if (info?.id) {
                    dispatch(editCategory(info.id, info, setLoading, onHide));
                }
            }
        }
    };

    return (
        <>
            <Dialog header={info?.heading} visible={visible} style={{ width: "400px" }} onHide={onHide}>
                <div className="flex flex-column gap-2">
                    <label htmlFor="username">Category Name</label>
                    <InputText value={info?.categoryName} name="categoryName" onChange={handleChange} />
                    {info?.formErrors?.categoryName ? <small className="p-error">{info?.formErrors?.categoryName}</small> : null}
                </div>
                <div className="flex justify-content-end my-2">
                    <PrimaryButton loading={loading} label={info.formType === "ADD" ? "Save" : "Update"} onClick={onSubmit} />
                </div>
            </Dialog>
            <div className="card">
                <div className="category-heading-div flex justify-content-between align-items-center">
                    <p className="cursor-pointer" onClick={() => setActiveCategory(null)}>
                        All Material
                    </p>
                    <i
                        onClick={onAdd}
                        className="pi pi-plus"
                        style={{ color: "#000000", fontWeight: "bold", fontSize: "1rem", cursor: "pointer" }}
                    ></i>
                </div>
                <TreeTable
                    scrollable
                    value={getTreeTable(allCategories)}
                    selectionMode="single"
                    selectionKeys={activeCategory}
                    onSelectionChange={(e) => setActiveCategory(e.value)}
                >
                    <Column body={(d) => d.name} expander style={{ width: "80%" }}></Column>
                    <Column
                        body={(d) => (
                            <div className="flex justify-content-around">
                                <i className="pi pi-check-square" onClick={() => onEditCategory(d)}></i>
                                <i className="pi pi-trash"></i>
                                <i className="pi pi-plus" onClick={() => onAddCategory(d)}></i>
                            </div>
                        )}
                    ></Column>
                </TreeTable>
            </div>
        </>
    );
}
