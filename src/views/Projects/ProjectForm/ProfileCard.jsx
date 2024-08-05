import React from "react";
import InfoSign from "../../../assets/icons/infosign.png";
import { PrimaryButtonOutlined } from "../../../shared/Button/PrimaryButton";
import { getDefaultImage, getImageURL } from "../../../utils/imageUrl";
import shoe1 from "../../../assets/image/shoePlaceholder1.png";
import shoe2 from "../../../assets/image/shoePlaceholder2.png";

export default function ProfileCard({ project, onEditProfile, onAdoptProfile, editProfileId, type }) {
    return (
        <>
            {project?.profiles?.length > 0 && (
                <div className="curve bg-lightest-blue p-2 profile-box">
                    <div className="flex">
                        {project?.profiles.map((item, i) => (
                            <div key={i} className="xxl:col-2 xl:col-2 lg:col-3 md:col-3">
                                <div
                                    className={` card curve overflow-hidden card-box p-0 ${
                                        editProfileId === i + 1 ? "bg-blue-100" : "bg-white"
                                    }`}
                                >
                                    <div className="card-header relative p-0 img-box">
                                        <div className="flex absolute" style={{ top: "10px", right: "10px" }}>
                                           <div
                                                className="btn bg-white border-circle p-0 ml-2 justify-content-center flex align-items-center"
                                                style={{ width: "30px", height: "30px" }}
                                                onClick={() => onEditProfile(i)}
                                            >
                                                 { type === "EDIT" ? <i className="fa-solid fa-pencil" style={{ color: "#30a638" }}></i> : 
                                                 <i className="fa-solid fa-eye" style={{ color: "#30a638" }}></i> }
                                            </div> 
                                            <div
                                                className="btn bg-white border-circle p-0 ml-2 justify-content-center flex align-items-center"
                                                style={{ width: "30px", height: "30px" }}
                                                // onClick={() => onAdoptProfile(i)}
                                            >
                                                <i className="fa-solid fa-copy" style={{ color: "#2097F3" }}></i>
                                            </div>
                                        </div>

                                        <img
                                            alt=""
                                            src={
                                                item?.images[1]
                                                    ? typeof item?.images[1] === "string"
                                                        ? getImageURL(item?.images[1])
                                                        : URL.createObjectURL(item?.images[1])
                                                    : shoe2
                                            }
                                            onError={(e) => (e.target.src = getDefaultImage())}
                                            className="w-full h-full fit-cover"
                                        />
                                    </div>
                                    <div className="card-body text-center pb-4">
                                        <div
                                            className="profile_img border-circle m-auto mb-2"
                                            style={{ width: "100px", height: "100px" }}
                                        >
                                            <img
                                                src={
                                                    item?.images[0]
                                                        ? typeof item?.images[0] === "string"
                                                            ? getImageURL(item?.images[0])
                                                            : URL.createObjectURL(item?.images[0])
                                                        : shoe1
                                                }
                                                onError={(e) => (e.target.src = getDefaultImage())}
                                                className="w-full h-full fit-cover border-circle"
                                                alt=""
                                            />
                                        </div>
                                        <p className="font-bold mb-2">{item?.color}</p>
                                        <div className="mb-4 flex content-center justify-content-center">
                                            <img className="my-auto" src={InfoSign} alt="" />
                                            &nbsp; <p className="text-yellow-500">Missing Information</p>
                                        </div>
                                        <div className="grid justify-content-center mb-2">
                                            <p className="md:col-6 border-right-1 border-dark">In publishing..</p>
                                            <p className="md:col-6">{"card.publish"}</p>
                                        </div>
                                        <PrimaryButtonOutlined 
                                        // onClick={() => onAdoptProfile(i)} 
                                        label="Adopt Profile" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
