import React from "react";
import Index from "./index";
import Background from "../../shared/Background/Background";
import OperationTable from "./OperationTable";

const Operations = () => {
    const { allOperations, loading, history, deleteRow, search, setSearch } = Index();
    return (
        <Background heading="Design">
            <OperationTable data={allOperations} loading={loading} history={history} deleteRow={deleteRow} search={search} setSearch={setSearch} />
        </Background>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
};
export default React.memo(Operations, comparisonFn);
