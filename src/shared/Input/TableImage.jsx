import React from "react";
import { Image } from "primereact/image";
import { getDefaultImage, getImageURL } from "../../utils/imageUrl";

export default function TableImage({ image }) {
    return (
        <Image
            src={image ? (typeof image === "string" ? getImageURL(image) : URL.createObjectURL(image)) : getDefaultImage()}
            onError={(e) => (e.target.src = getDefaultImage())}
            alt="Image"
            width="30"
            height="30"
            preview
        />
    );
}
