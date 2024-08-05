import React from "react";
import Background from "../../../shared/Background/Background";
import Index from "./index";
import UnitsTable from "./UnitsTable";

const Units = () => {
    const { AllUnits, loading, history, search, setSearch, deleteRow } = Index();
    return (
        <Background heading="Setting">
            <UnitsTable
                AllUnits={AllUnits}
                loading={loading}
                history={history}
                search={search}
                setSearch={setSearch}
                deleteRow={deleteRow}
            />
        </Background>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
};
export default React.memo(Units, comparisonFn);
