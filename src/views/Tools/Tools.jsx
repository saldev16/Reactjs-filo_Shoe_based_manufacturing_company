import React from "react";
import Index from "./index";
import Background from "../../shared/Background/Background";
import ToolsTable from "./ToolsTable";

const Tools = () => {
    const { allTools, loading, history, search, setSearch, location, selectedTool, setSelectedTool, onClickCancel, onClick } =
        Index();
    return (
        <Background heading="Design">
            <ToolsTable
                data={allTools}
                loading={loading}
                history={history}
                search={search}
                setSearch={setSearch}
                location={location}
                onClick={onClick}
                selectedTool={selectedTool}
                setSelectedTool={setSelectedTool}
                onClickCancel={onClickCancel}
            />
        </Background>
    );
};
const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
};
export default React.memo(Tools, comparisonFn);
