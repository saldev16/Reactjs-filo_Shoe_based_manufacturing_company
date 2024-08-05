import React from "react";
import GroupTable from "./GroupTable";
import Background from "../../../shared/Background/Background";
import Index from "./index";

const Group = () => {
    const { allGroups, loading, history, search, setSearch, deleteRow } = Index();
    return (
        <Background heading="Setting">
            <GroupTable
                allGroups={allGroups}
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
export default React.memo(Group, comparisonFn);
