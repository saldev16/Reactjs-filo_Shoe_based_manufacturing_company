import React, { useState, useEffect, useRef, useCallback } from "react";
import { Tree } from "primereact/tree";
import ReactFlow, { MiniMap, Controls, Background, updateEdge } from "reactflow";
import OperationNode from "./operationNode";

import "../../../node_modules/reactflow/dist/style.css";

export function CustomTree({ values, expandedKeys, selectionKeys, onSelectionChange }) {
    return (
        <Tree
            selectionMode="checkbox"
            value={values}
            expandedKeys={expandedKeys}
            selectionKeys={selectionKeys}
            onSelectionChange={(e) => onSelectionChange(e.value)}
        />
    );
}

export function ReactFlowTree({ data, handleNodeEdges, onEditOperation, state, setState, keyToBeUpdated }) {
    const initialEdges = data.map((item) => item.edges);
    const operationNode = OperationNode;

    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([...initialEdges]);
    const edgeUpdateSuccessful = useRef(true);

    const nodeTypes = {
        operationNode: operationNode,
    };

    useEffect(() => {
        setNodes([...data.map((item) => ({ ...item, data: { ...item?.data, onEditOperation } }))]);
    }, [data]);

    const onConnect = (e) => {
        setEdges([...edges, { ...e, updatable: true }]);
        handleNodeEdges(e.source, e.target);
    };

    const onNodesChange = (e) => {
        if (e[0].dragging) {
            const dragged = nodes.map((item) => {
                if (item.id === e[0].id) {
                    item.position = { ...e[0].position };
                }
                return item;
            });

            setNodes([...dragged]);
            setState({ ...state, [keyToBeUpdated]: [...dragged] });
        }
    };

    const onEdgesChange = (e) => {
        console.log("change", e);
    };

    const onEdgeUpdateStart = useCallback(() => {
        edgeUpdateSuccessful.current = false;
    }, []);

    const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
        edgeUpdateSuccessful.current = true;
        setEdges((els) => updateEdge(oldEdge, newConnection, els));
        handleNodeEdges(newConnection.source, newConnection.target);
    }, []);

    const onEdgeUpdateEnd = useCallback((_, edge) => {
        if (!edgeUpdateSuccessful.current) {
            setEdges((eds) => eds.filter((e) => e.id !== edge.id));
        }
        edgeUpdateSuccessful.current = true;
        handleNodeEdges(null, edge.target);
    }, []);

    // useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes]);
    return (
        <div style={{ width: "100vw", height: "50vh" }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onEdgeUpdate={onEdgeUpdate}
                onEdgeUpdateStart={onEdgeUpdateStart}
                onEdgeUpdateEnd={onEdgeUpdateEnd}
                nodeTypes={nodeTypes}
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
}
