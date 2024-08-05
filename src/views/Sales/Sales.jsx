import React from "react";
import Background from "../../shared/Background/Background";
import SalesTable from "./SalesTable";
import Index from "./index";

const Sales = () => {
    const { drafts, loading, history, search, setSearch, deleteRow } = Index();
    return (
        <Background heading="Sales">
            <SalesTable
                data={drafts}
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
export default React.memo(Sales, comparisonFn);
