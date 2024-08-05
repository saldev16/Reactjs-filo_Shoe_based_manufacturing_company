import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MultiSelect } from "primereact/multiselect";
import TableCard from "../../shared/TableCard/TableCard";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { getUniqueObjFromArray } from "../../utils/arrayFunctions";
import TableImage from "../../shared/Input/TableImage";

export default function ToolsTable({
    data,
    loading,
    history,
    search,
    setSearch,
    location,
    selectedTool,
    setSelectedTool,
    onClickCancel,
    onClick,
}) {
    const filters = {
        code: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        operation: { value: null, matchMode: FilterMatchMode.IN },
        toolType: { value: null, matchMode: FilterMatchMode.IN },
        season: { value: null, matchMode: FilterMatchMode.IN },
        classType: { value: null, matchMode: FilterMatchMode.IN },
        group: { value: null, matchMode: FilterMatchMode.IN },
        injectionType: { value: null, matchMode: FilterMatchMode.IN },
    };

    if (location.state?.fromProjects) {
        filters.classType.value = [location.state?.project.classType];
        filters.group.value = [location.state?.project.group];
        filters.season.value = [location?.state.project.season];
        filters.injectionType.value = [location?.state.project.injectionType];
    }

    const operationFilter = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Operations</div>
                <MultiSelect
                    className="p-column-filter"
                    value={options.value}
                    options={getUniqueObjFromArray(data.map((item) => item.operation))}
                    onChange={(e) => options.filterCallback(e.value)}
                    optionLabel="name"
                    placeholder="Operations"
                />
            </>
        );
    };
    const toolTypeFilter = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Tool Types</div>
                <MultiSelect
                    className="p-column-filter"
                    value={options.value}
                    options={getUniqueObjFromArray(data.map((item) => item.toolType))}
                    onChange={(e) => options.filterCallback(e.value)}
                    optionLabel="name"
                    placeholder="Tool Types"
                />
            </>
        );
    };
    const seasonFilter = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Seasons</div>
                <MultiSelect
                    className="p-column-filter"
                    value={options.value}
                    options={getUniqueObjFromArray(data.map((item) => item.season))}
                    onChange={(e) => options.filterCallback(e.value)}
                    optionLabel="name"
                    placeholder="Seasons"
                />
            </>
        );
    };
    const classTypeFilter = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Class Types</div>
                <MultiSelect
                    className="p-column-filter"
                    value={options.value}
                    options={getUniqueObjFromArray(data.map((item) => item.classType))}
                    onChange={(e) => options.filterCallback(e.value)}
                    optionLabel="name"
                    placeholder="Class Types"
                />
            </>
        );
    };
    const groupFilter = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Groups</div>
                <MultiSelect
                    className="p-column-filter"
                    value={options.value}
                    options={getUniqueObjFromArray(data.map((item) => item.group))}
                    onChange={(e) => options.filterCallback(e.value)}
                    optionLabel="name"
                    placeholder="Groups"
                />
            </>
        );
    };
    const injectionTypeFilter = (options) => {
        return (
            <>
                <div className="mb-3 text-bold">Injection Types</div>
                <MultiSelect
                    className="p-column-filter"
                    value={options.value}
                    options={getUniqueObjFromArray(data.map((item) => item.injectionType))}
                    onChange={(e) => options.filterCallback(e.value)}
                    optionLabel="name"
                    placeholder="Injection Type"
                />
            </>
        );
    };

    const actions = (d) => {
        return (
            <div className="flex justify-content-around">
                <i className="fa-solid fa-eye cursor-pointer" onClick={() => history.push(`/tools/view/${d._id}`)}></i>
                <i className="fa-solid fa-pencil cursor-pointer" onClick={() => history.push(`tools/edit/${d._id}`)}></i>
            </div>
        );
    };

    return (
        <TableCard
            title="Tools Directory"
            onSearch={setSearch}
            searchKeyword={search}
            buttonTitle={location.state?.fromProjects || location.state?.fromOperations ? "Import" : "Add New"}
            showCancel={location.state?.fromProjects || location.state?.fromOperations}
            onClick={onClick}
            onClickCancel={onClickCancel}
        >
            <DataTable
                className="p-datatable-gridlines"
                value={data}
                filters={filters}
                rows={10}
                loading={loading}
                paginator
                showGridlines
                responsiveLayout="scroll"
                emptyMessage="No tools found."
                selectionMode={location.state?.fromProjects || location.state?.fromOperations ? "checkbox" : null}
                selection={selectedTool}
                onSelectionChange={(e) => setSelectedTool(e.value)}
            >
                {location.state?.fromProjects || location.state?.fromOperations ? <Column selectionMode="single"></Column> : null}
                <Column
                    style={{ minWidth: "14rem" }}
                    header="Tool Code"
                    field="code"
                    filter={!location.state?.fromProjects}
                ></Column>
                <Column
                    header="Operation"
                    body={(d) => d?.operation?.name}
                    filter={!location.state?.fromProjects}
                    filterField="operation"
                    filterElement={operationFilter}
                    filterMenuStyle={{ width: "14rem" }}
                    showFilterMatchModes={false}
                    style={{ minWidth: "14rem" }}
                />
                <Column
                    header="Tool Type"
                    body={(d) => d?.toolType?.name}
                    filter={!location.state?.fromProjects}
                    filterField="toolType"
                    filterElement={toolTypeFilter}
                    filterMenuStyle={{ width: "14rem" }}
                    showFilterMatchModes={false}
                    style={{ minWidth: "10rem" }}
                ></Column>
                <Column
                    header="Injection Type"
                    body={(d) => d?.injectionType?.name}
                    filter={!location.state?.fromProjects}
                    filterField="injectionType"
                    filterElement={injectionTypeFilter}
                    filterMenuStyle={{ width: "14rem" }}
                    showFilterMatchModes={false}
                    style={{ minWidth: "12rem" }}
                ></Column>
                <Column
                    header="Season"
                    body={(d) => d?.season?.name}
                    filter={!location.state?.fromProjects}
                    filterField="season"
                    filterElement={seasonFilter}
                    filterMenuStyle={{ width: "14rem" }}
                    showFilterMatchModes={false}
                    style={{ minWidth: "14rem" }}
                ></Column>
                <Column
                    header="Class"
                    body={(d) => d?.classType?.name}
                    filter={!location.state?.fromProjects}
                    filterField="classType"
                    filterElement={classTypeFilter}
                    filterMenuStyle={{ width: "14rem" }}
                    showFilterMatchModes={false}
                    style={{ minWidth: "14rem" }}
                ></Column>
                <Column
                    header="Group"
                    body={(d) => d?.group?.name}
                    filter={!location.state?.fromProjects}
                    filterField="group"
                    filterElement={groupFilter}
                    filterMenuStyle={{ width: "14rem" }}
                    showFilterMatchModes={false}
                    style={{ minWidth: "14rem" }}
                ></Column>
                <Column header="Image" body={({ images }) => <TableImage image={images[0]} />}></Column>
                <Column header="Description" field="description"></Column>

                {location.state?.fromProjects || location.state?.fromOperations ? null : (
                    <Column header="Action" body={actions} style={{ width: "100px" }}></Column>
                )}
            </DataTable>
        </TableCard>
    );
}
