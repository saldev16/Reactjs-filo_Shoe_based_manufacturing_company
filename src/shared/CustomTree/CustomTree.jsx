import React from "react";
import Tree from "react-d3-tree";
import { useCenteredTree } from "./helper";

export default function CustomTree({ data }) {
    const nodeDiv = ({ nodeDatum, foreignObjectProps }) => {
        return (
            <g>
                <foreignObject {...foreignObjectProps}>
                    <div className={`curve p-3 ${nodeDatum?.selected ? "bg-blue-200" : "bg-blue-100"}`}>
                        <div className="flex justify-content-between align-items-start">
                            <div className="">
                                <div className="flex">
                                    <h6>Operation Code:</h6>
                                    <h6 className="text-main my-0 ml-2">{nodeDatum?.name}</h6>
                                </div>
                                <div className="flex">
                                    <h6>Operation Type: </h6>
                                    <h6 className="text-main my-0 ml-2">{nodeDatum?.gender}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </foreignObject>
            </g>
        );
    };

    const nodeSize = { x: 300, y: 200 };
    const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -150, y: -90 };
    const [translate, containerRef] = useCenteredTree();
    return (
        <div className="card w-100" style={{ minHeight: "80vh", height: "100%" }} ref={containerRef}>
            <div ref={containerRef} style={{ minHeight: "60vh !important" }}>
                <Tree
                    style={{ minHeight: "60vh !important" }}
                    data={data}
                    translate={translate}
                    nodeSize={nodeSize}
                    renderCustomNodeElement={(e) => nodeDiv({ ...e, foreignObjectProps })}
                    orientation="vertical"
                    enableLegacyTransitions="true"
                    transitionDuration="1400"
                    zoom={0.8}
                    hasInteractiveNodes="true"
                    // pathFunc="straight"
                />
            </div>
        </div>
    );
}
