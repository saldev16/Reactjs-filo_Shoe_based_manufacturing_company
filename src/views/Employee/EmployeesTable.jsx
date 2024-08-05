import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Chip } from "primereact/chip";
import { Column } from "primereact/column";
import TableCard from "../../shared/TableCard/TableCard";
import { getMyId } from "../../services/auth";
import { getSearchedData } from "../../utils/commonFunctions";
import Index from "./index";
import TableImage from "../../shared/Input/TableImage";

export default function EmployeesTable() {
    const { employees, loading, history, deleteRow } = Index();

    const keys = ["firstName", "lastName", "jobPosition.name", "operation.name", "department", "description"];
    const [keyword, setKeyword] = useState("");
    const actions = (d) => {
        return (
            <>
                {d._id === getMyId() ? (
                    <Chip label="It's You" icon="pi pi-user" />
                ) : (
                    <div className="flex justify-content-around">
                        <i
                            className="fa-solid fa-eye cursor-pointer"
                            onClick={() => history.push(`/employees/view/${d._id}`)}
                        ></i>
                        <i
                            className="fa-solid fa-pencil cursor-pointer"
                            onClick={() => history.push(`/employees/edit/${d._id}`)}
                        ></i>
                        <i className="fa-solid fa-trash-can cursor-pointer" onClick={(e) => deleteRow(e, d._id)}></i>
                    </div>
                )}
            </>
        );
    };
    const logs = (d) => {
        return <i className="fa-solid fa-eye cursor-pointer" onClick={() => history.push(`/employees/logs/${d._id}`)}></i>;
    };

    return (
        <>
            <TableCard
                title="Employee Directory"
                onSearch={setKeyword}
                searchKeyword={keyword}
                buttonTitle="Add New Employee"
                linkTo="/employees/add"
            >
                <DataTable
                    value={getSearchedData(employees, keyword, keys)}
                    paginator
                    className="p-datatable-gridlines"
                    showGridlines
                    rows={10}
                    filterDisplay="menu"
                    loading={loading}
                    responsiveLayout="scroll"
                    emptyMessage="No employee found."
                >
                    <Column
                        field="fullName"
                        header="Full Name"
                        filterField="fullName"
                        filterMatchMode="contains"
                        style={{ minWidth: "12rem" }}
                        filter
                        filterPlaceholder="Search by name"
                    ></Column>
                    <Column body={({ image }) => <TableImage image={image} />} header="Photo"></Column>
                    <Column
                        field="department"
                        header="Department"
                        filterField="department"
                        filterMatchMode="contains"
                        style={{ minWidth: "12rem" }}
                        filter
                        filterPlaceholder="Search by department"
                    ></Column>
                    <Column
                        field="jobPosAndOperation"
                        header="Current Job Position+Operation"
                        filterMatchMode="contains"
                        filterField="jobPosAndOperation"
                        style={{ minWidth: "12rem" }}
                        filter
                    ></Column>
                    <Column field="description" header="Description"></Column>
                    <Column body={actions} style={{ minWidth: "150px" }} header="Action"></Column>
                    <Column body={logs} header="Logs"></Column>
                </DataTable>
            </TableCard>
        </>
    );
}
