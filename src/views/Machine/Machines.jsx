import React from "react";
import Background from "../../shared/Background/Background";
import MachinesTable from "./MachinesTable";
import Index from "./index";

const Machines = () => {
    const { machines, loading, history, search, setSearch, deleteRow } = Index();
    return (
        <Background heading="Machines">
            <MachinesTable
                machines={machines}
                operations={[]}
                deleteRow={deleteRow}
                loading={loading}
                history={history}
                search={search}
                setSearch={setSearch}
            />
        </Background>
    );
};
const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
};
export default React.memo(Machines, comparisonFn);
