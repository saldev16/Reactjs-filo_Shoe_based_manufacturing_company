import React from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";
import { Calendar } from "primereact/calendar";
import Background from "../../../shared/Background/Background";
import TableCard from "../../../shared/TableCard/TableCard";
import EmployeeLogs from "./EmployeeLogs";

export default function EmployeeLogTable() {
    const { data, loading, jobPositions, machines } = EmployeeLogs();
    const filters = {
        department: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        jobPosition: { value: null, matchMode: FilterMatchMode.IN },
        machine: { value: null, matchMode: FilterMatchMode.IN },
        time: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    };
    const jobPositionFilter = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Job Position</div>
                <MultiSelect
                    className="p-column-filter"
                    value={options.value}
                    options={jobPositions}
                    onChange={(e) => options.filterCallback(e.value)}
                    optionLabel="name"
                    placeholder="Job Position"
                />
            </>
        );
    };

    const machineFilter = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Machine</div>
                <MultiSelect
                    className="p-column-filter"
                    value={options.value}
                    options={machines}
                    onChange={(e) => options.filterCallback(e.value)}
                    optionLabel="name"
                    placeholder="Machine"
                />
            </>
        );
    };

    const dateFilter = (options) => {
        return (
            <Calendar
                value={options.value}
                onChange={(e) => options.filterCallback(e.value, options.index)}
                dateFormat="mm/dd/yy"
                placeholder="mm/dd/yyyy"
                mask="99/99/9999"
            />
        );
    };

    const dateBody = (rowData) => {
        return formatDate(rowData.time);
    };

    const formatDate = (value) => {
        return value.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };

    return (
        <Background heading="Employee">
            <TableCard title="Employee Log">
                <DataTable
                    className="p-datatable-gridlines"
                    value={data}
                    filters={filters}
                    rows={10}
                    loading={loading}
                    paginator
                    showGridlines
                    responsiveLayout="scroll"
                    emptyMessage="No Logs found."
                >
                    <Column
                        header="Department"
                        field="department"
                        filter
                        filterField="department"
                        showFilterMatchModes={false}
                        style={{ minWidth: "14rem" }}
                    ></Column>
                    <Column
                        header="Job Position"
                        body={(d) => d?.jobPosition?.name}
                        filter
                        filterField="jobPosition"
                        filterElement={jobPositionFilter}
                        filterMenuStyle={{ width: "14rem" }}
                        showFilterMatchModes={false}
                        style={{ minWidth: "14rem" }}
                    ></Column>
                    <Column
                        header="Machine"
                        body={(d) => d?.machine?.name}
                        filter
                        filterField="machine"
                        filterElement={machineFilter}
                        filterMenuStyle={{ width: "14rem" }}
                        showFilterMatchModes={false}
                        style={{ minWidth: "14rem" }}
                    ></Column>
                    <Column
                        header="Date"
                        filterField="time"
                        dataType="date"
                        style={{ minWidth: "10rem" }}
                        body={dateBody}
                        filter
                        filterElement={dateFilter}
                    ></Column>
                </DataTable>
            </TableCard>
        </Background>
    );
}
