import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableCard from "../../shared/TableCard/TableCard";

export default function OperationTable({ data, loading, history, deleteRow, search, setSearch }) {
    const actions = (d) => {
        return (
            <div className="flex justify-content-around">
                <i className="fa-solid fa-hard-drive cursor-pointer"></i>
                <i className="fa-solid fa-screwdriver-wrench cursor-pointer"></i>
                <i className="fa-solid fa-calendar-days cursor-pointer"></i>
                <i className="fa-solid fa-pencil cursor-pointer" onClick={() => history.push(`/operations/edit/${d._id}`)}></i>
                <i className="fa-solid fa-trash-can cursor-pointer" onClick={(e) => deleteRow(e, d._id)}></i>
            </div>
        );
    };
    return (
        <TableCard
            title="Operation Directory"
            onSearch={setSearch}
            searchKeyword={search}
            buttonTitle="Add Operation"
            linkTo="/operations/add"
        >
            <DataTable
                value={data}
                paginator
                className="p-datatable-gridlines"
                showGridlines
                rows={10}
                loading={loading}
                responsiveLayout="scroll"
                emptyMessage="No operation found."
            >
                {/* <Column field="code" header="Code" style={{ width: "200px" }}></Column> */}

                <Column
                    field="name"
                    header="Operation Name"
                    style={{ width: "200px" }}
                    filterField="fullName"
                    filterMatchMode="contains"
                    filter
                    filterPlaceholder="Search by name"
                ></Column>
                <Column body={(v) => v.description.slice(0, 700)} header="Description"></Column>
                <Column body={actions} style={{ width: "200px" }} header="Action"></Column>
            </DataTable>
        </TableCard>
    );
}
