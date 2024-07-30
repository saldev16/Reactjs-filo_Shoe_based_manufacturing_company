import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";
import TableCard from "../../shared/TableCard/TableCard";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { getUniqueObjFromArray } from "../../utils/arrayFunctions";

export default function MachinesTable({ machines, loading, history, search, setSearch }) {
    const filters = {
        code: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }] },
        operation: { value: null, matchMode: FilterMatchMode.IN },
    };
    const actions = (d) => {
        return (
            <div className="flex justify-content-around">
                <i
                    className="fa-solid fa-calendar-days cursor-pointer"
                    onClick={() => history.push(`/machines/view/${d._id}`)}
                ></i>
                <i
                    className="fa-solid fa-people-group cursor-pointer"
                    onClick={() => history.push(`/machines/edit/${d._id}`)}
                ></i>
                <i className="fa-solid fa-wrench cursor-pointer"></i>
                <i className="fa-solid fa-repeat cursor-pointer"></i>
            </div>
        );
    };
    const operationFilter = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Operations</div>
                <MultiSelect
                    className="p-column-filter"
                    value={options.value}
                    options={getUniqueObjFromArray(machines.map((item) => item.operation))}
                    onChange={(e) => options.filterCallback(e.value)}
                    optionLabel="name"
                    placeholder="Opeations"
                />
            </>
        );
    };
    return (
        <>
            <TableCard
                title="Machines Directory"
                onSearch={setSearch}
                searchKeyword={search}
                buttonTitle="Add Machine"
                linkTo="/machines/add"
            >
                <DataTable
                    value={machines}
                    paginator
                    className="p-datatable-gridlines"
                    showGridlines
                    rows={10}
                    filters={filters}
                    filterDisplay="menu"
                    loading={loading}
                    responsiveLayout="scroll"
                    emptyMessage="No machines found."
                >
                    <Column
                        header="Operation"
                        body={(d) => d?.operation?.name}
                        filter
                        filterField="operation"
                        filterElement={operationFilter}
                        filterMenuStyle={{ width: "14rem" }}
                        showFilterMatchModes={false}
                        style={{ minWidth: "14rem" }}
                    />
                    <Column header="Machine Code" field="code" filter filterPlaceholder="Search by code"></Column>
                    <Column
                        field="name"
                        header="Name"
                        filterField="name"
                        filterMatchMode="contains"
                        style={{ minWidth: "12rem" }}
                        filter
                        filterPlaceholder="Search by name"
                    ></Column>

                    <Column field="stationsQuantity" header="Stations"></Column>
                    <Column body={() => "Draft"} header="Status"></Column>
                    <Column body={actions} style={{ minWidth: "100px" }} header="Action"></Column>
                </DataTable>
            </TableCard>
        </>
    );
}
