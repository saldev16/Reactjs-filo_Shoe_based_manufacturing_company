import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import Deletegreen from "../../assets/icons/deletegreen.png";

export default memo(({ data, isConnectable }) => {
    return (
        <>
            <Handle
                type='target'
                position={Position.Top}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div className="p-1">
                <div
                    className={`curve p-3 bg-white`}
                    style={{ width: "20rem" }}
                >
                    <div className="flex justify-content-between align-items-start">
                        <div className="">
                            <div className="flex">
                                <h6>Operation Code:</h6>
                                <h6 className="text-main my-0 ml-2">{data?.operationCode}</h6>
                            </div>
                            <div className="flex">
                                <h6>Operation Type: </h6>
                                <h6 className="text-main my-0 ml-2">{data?.operationType}</h6>
                            </div>
                        </div>
                        <img
                            src={Deletegreen}
                            onClick={(e) => data.onEditOperation(data?.id)}
                            className=""
                            width={15}
                            alt=""
                        />
                    </div>
                    <div className="flex align-items-center mb-2">
                        <h6 className="m-0">Process Name: </h6>
                        <h6 className="text-main ms-2 my-0 ml-2">{data?.processName}</h6>
                    </div>
                    <div className="flex align-items-center mb-2">
                        <h6 className="m-0">Tool: </h6>
                        <h6 className="text-main ms-2 my-0 ml-2">{data?.tool}</h6>
                    </div>
                    <div className="flex align-items-center mb-2">
                        <h6 className="m-0">Operation Label: </h6>
                        <h6 className="text-main my-0 ml-2 ml-2">{data?.label}</h6>
                    </div>
                </div>
            </div>
            <Handle
                type='source'
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
                position={Position.Bottom}
            />
        </>
    );
});