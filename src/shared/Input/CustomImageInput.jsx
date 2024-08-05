import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Gallery from "../../assets/image/gallery.png";
import InputLayout from "./InputLayout";
import { getDefaultImage, getImageURL } from "../../utils/imageUrl.js";
import { showToast } from "../../redux/actions/toastAction";
import { Image } from "primereact/image";

export default function CustomImageInput({
  label,
  name,
  onFilesChange,
  errorMessage,
  extraClassName,
  value,
  data,
  limit,
  multiple,
  col,
  required,
  removeable,
  editable,
  disabled = false,
  ...props
}) {
  const [files, setFiles] = useState(value || data?.[name] || []);
  const dispatch = useDispatch();

  useEffect(() => {
    if (value || data?.[name]) {
      if (JSON.stringify(value || data?.[name]) !== JSON.stringify(files)) {
        setFiles(value || data?.[name]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value || data?.[name]]);

  useEffect(() => {
    if (onFilesChange) {
      onFilesChange({ name, value: files });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files, name]);

  const onDelete = (id) => {
    if (editable) {
      const s = files.filter((item, index) => index !== id);
      setFiles([...s]);
    }
  };

  const onFileChange = (e) => {
    if (editable) {
      const chossenFile = e.target.files;
      handlefileChange(Object.values(chossenFile));
    }
  };
  const handlefileChange = (uploadedfile) => {
    let uploadedFiles = [];
    uploadedfile.forEach((file) => {
      if (files.findIndex((f) => f.name === file.name) === -1) {
        uploadedFiles.push(file);
      }
    });
    if (multiple) {
      if (limit) {
        let newarr = [...files, ...uploadedFiles];
        if (newarr.length > limit) {
          newarr = newarr.slice(0, limit);
          dispatch(
            showToast({
              severity: "warn",
              summary: "Limit Exceeded",
              detail: `Max. file limit is ${limit}.`,
            })
          );
        }
        setFiles(newarr);
      } else {
        setFiles([...files, ...uploadedFiles]);
      }
    } else {
      setFiles([...uploadedFiles]);
    }
  };

  return (
    <>
      <input
        name={name}
        onChange={onFileChange}
        id="formImage"
        type="file"
        accept="image/*"
        hidden
        {...props}
        multiple={multiple}
        disabled={disabled}
      />
      <InputLayout
        col={col || 12}
        label={label || "Upload Photo"}
        name={name}
        required={required}
        extraClassName={extraClassName}
        data={data}
        errorMessage={errorMessage}
      >
        <div className="image-box">
          <div
            className="md:col-12 grid"
            style={disabled ? { pointerEvents: "none" } : {}}
          >
            {files.length
              ? Object.values(files).map((image, i) => (
                  <div
                    key={i}
                    className="mr-2 my-1 photoDiv"
                    style={{
                      height: "90px",
                      width: "90px",
                    }}
                  >
                    <Image
                      src={
                        image
                          ? typeof image === "string"
                            ? getImageURL(image)
                            : URL.createObjectURL(image)
                          : Gallery
                      }
                      onError={(e) => (e.target.src = getDefaultImage())}
                      alt="Image"
                      width="90"
                      height="90"
                      preview
                      icon="pi pi-eye"
                    />{" "}
                    {removeable && (
                      <i
                        onClick={() => onDelete(i)}
                        className="fa-solid fa-circle-xmark cursor-pointer"
                      ></i>
                    )}
                  </div>
                ))
              : null}
            {files.length < limit || !limit ? (
              <div
                className="photo-upload flex justify-content-center align-items-center"
                style={{
                  height: "95px",
                  width: "90px",
                }}
              >
                <label htmlFor="formImage">
                  <img
                    className="w-full h-full fit-cover"
                    src={Gallery}
                    onError={(e) => (e.target.src = getDefaultImage())}
                    alt=""
                  />
                </label>
              </div>
            ) : null}
          </div>
        </div>
      </InputLayout>
    </>
  );
}
