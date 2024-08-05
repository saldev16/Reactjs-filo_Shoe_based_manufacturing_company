import React from "react";
import Index from "./index";
import Background from "../../shared/Background/Background";
import ProductionTable from "./ProdcutionTable";


const Production = () => {

    const {dummyData} = Index();

    return (
        <Background heading="Production">
            <ProductionTable data={dummyData}/>
        </Background>
    );
};
const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
};
export default React.memo(Production, comparisonFn);
