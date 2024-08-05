import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableCard from "../../shared/TableCard/TableCard";
import { ProgressBar } from 'primereact/progressbar';

export default function ProductionTable({ data, loading, history, deleteRow, search, setSearch }) {
    const actions = (d) => {
        return (
            <div className="flex justify-content-around">
                <i className="fa-solid fa-eye cursor-pointer"></i>

                <i className="fa-solid fa-pencil cursor-pointer" onClick={() => history.push(`/production/edit/${d._id}`)}></i>
                <i className="fa-solid fa-trash-can cursor-pointer" onClick={(e) => deleteRow(e, d._id)}></i>
            </div>
        );
    };

    const progress = (d) => {
        return (
            <ProgressBar value={d.progress}/>
        )
    }

    return (
        <TableCard
            title="Production Request Directory"
            onSearch={setSearch}
            searchKeyword={search}
            buttonTitle="Add New Production Request"
            linkTo="/production/add"
        >
            <DataTable
                value={data}
                paginator
                className="p-datatable-gridlines"
                showGridlines
                rows={10}
                loading={loading}
                responsiveLayout="scroll"
                emptyMessage="No production found."
            >
                {/* <Column field="code" header="Code" style={{ width: "200px" }}></Column> */}

                <Column
                    field="requestNumber"
                    header="Request Number"
                    style={{ width: "200px" }}
                    filterField="fullName"
                    filterMatchMode="contains"
                    filter
                    filterPlaceholder="Search by name"
                ></Column>
                <Column field="deadline" header="Deadline"></Column>
                <Column field="priority" header="Priority"></Column>
                <Column field="progress" body={progress} header="Progress"></Column>
                <Column body={actions} style={{ width: "200px" }} header="Action"></Column>
            </DataTable>
        </TableCard>
    );
}
