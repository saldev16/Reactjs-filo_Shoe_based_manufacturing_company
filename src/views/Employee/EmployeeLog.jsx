import React, { useState } from "react";
import dots from "../../assets/icons/Group.png";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// import EmployeeLogData from "./EmployeeData";

export default function EmployeeLog() {
    const [activeIndex, setActiveIndex] = useState(0);
    // const { employeeLogData } = EmployeeLogData();
    const employeeLogData = [];
    return (
        <div>
            <div className="header bg-white flex flex-wrap justify-item-center align-items-center">
                <img src={dots} alt="" />
                <span className="design font-bold text-lg">Employee</span>
                <div className="btn-group ml-3">
                    <Button
                        onClick={() => setActiveIndex(0)}
                        className={activeIndex === 0 ? "active fs-6 bg-transparent text-dark-color border-0 fw-light top-headerlink" : " fs-6 bg-transparent text-dark-color border-0 fw-light top-headerlink"}
                        icon="pi pi-chevron-down"
                        iconPos="right"
                        label="Employee"
                    />
                </div>
            </div>
            <div className="main-background p-3">
                <div className="">
                    <div className="project-directory ">
                        <div className="content-2 border-round-lg overflow-hidden">
                            <DataTable value={employeeLogData} showGridlines>
                                <Column field="department" header="Department" filterField="country.name" style={{ minWidth: "12rem" }} filter filterPlaceholder="Search by country"></Column>
                                <Column field="jobposition" header="Job Position" filter></Column>
                                <Column field="machine" header="Machine" filterField="country.name" style={{ minWidth: "12rem" }} filter filterPlaceholder="Search by country"></Column>
                                <Column field="date" header="Date" filterField="country.name" style={{ minWidth: "12rem" }} filter filterPlaceholder="Search by country"></Column>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
