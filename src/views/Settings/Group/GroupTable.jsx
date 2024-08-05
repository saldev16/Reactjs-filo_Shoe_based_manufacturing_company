import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableCard from "../../../shared/TableCard/TableCard";

const GroupTable = ({ allGroups, loading, history, search, setSearch, deleteRow }) => {
    const actions = (d) => {
        return (
            <div className="flex justify-content-around">
                <i className="fa-solid fa-eye cursor-pointer" onClick={() => history.push(`groups/view/${d._id}`)}></i>
                <i className="fa-solid fa-pencil cursor-pointer" onClick={() => history.push(`groups/edit/${d._id}`)}></i>
                <i className="fa-solid fa-trash-can cursor-pointer" onClick={(e) => deleteRow(e, d._id)}></i>
            </div>
        );
    };

    return (
        <TableCard
            title="Group Directory"
            onSearch={setSearch}
            searchKeyword={search}
            buttonTitle="Add Group"
            linkTo="/groups/add"
        >
            <DataTable
                paginator
                value={allGroups}
                className="p-datatable-gridlines"
                showGridlines
                rows={10}
                loading={loading}
                responsiveLayout="scroll"
                emptyMessage="No group found."
            >
                <Column field="code" header="Code" style={{ width: "45%" }}></Column>
                <Column field="name" header="Name" style={{ width: "45%" }}></Column>
                <Column body={actions} style={{ width: "10%" }} header="Action"></Column>
            </DataTable>
        </TableCard>
    );
};

export default GroupTable;
