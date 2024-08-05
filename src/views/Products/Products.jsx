import React from "react";
import Background from "../../shared/Background/Background";

const Products = () => {
    return (
        <Background heading="Design">
            <h1>Products</h1>
        </Background>
    );
};
const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname && prevProps.colorMode === nextProps.colorMode;
};
export default React.memo(Products, comparisonFn);
