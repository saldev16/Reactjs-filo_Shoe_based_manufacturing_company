import React from "react";
import { useSelector } from "react-redux";
import { ternary } from "../utils/javascript";

const Loader = () => {
    const isLoading = useSelector((state) => state.loader.isLoading);
    return (
        <div style={{ display: ternary(isLoading, "block", "none") }}>
            <div
                style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    height: "100%",
                    width: "100%",
                    backgroundColor: "#ffffff",
                    opacity: 0.6,
                    zIndex: 3000,
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        textAlign: "center",
                        top: "47%",
                        left: "47%",
                        zIndex: 1001,
                    }}
                >
                    Loading...
                </div>
            </div>
        </div>
    );
};
export default Loader;
