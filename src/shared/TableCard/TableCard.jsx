import React from "react";
import { useHistory } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import plusgreen from "../../assets/icons/plusgreen.png";
import PrimaryButton, { PrimaryButtonOutlined } from "../Button/PrimaryButton";

export default function TableCard({
    title,
    onSearch,
    searchKeyword,
    buttonTitle,
    onClick,
    linkTo,
    children,
    extraClassName,
    showCancel = false,
    onClickCancel,
}) {
    const history = useHistory();
    return (
        <div className={`label-table ${extraClassName}`}>
            {title || onSearch || linkTo || buttonTitle ? (
                <div className="heading bg-white p-3 px-4 grid">
                    <div className="title col-12 md:col-6">{title}</div>
                    <div className="col-12 md:col-6 flex justify-content-end">
                        <div className="flex justify-content-end flex-wrap">
                            {onSearch ? (
                                <div className="p-input-icon-left mx-2">
                                    <i className="pi pi-search" />
                                    <InputText
                                        value={searchKeyword}
                                        onChange={(e) => onSearch(e.target.value)}
                                        placeholder="Search"
                                    />
                                </div>
                            ) : null}
                            {showCancel ? <PrimaryButtonOutlined label="Cancel" onClick={onClickCancel} /> : ""}
                            {linkTo ? (
                                <PrimaryButton
                                    className="mt-2 md:mt-0"
                                    onClick={() => history.push(linkTo)}
                                    label={buttonTitle}
                                />
                            ) : buttonTitle ? (
                                <PrimaryButton className="mt-2 md:mt-0" onClick={onClick} label={buttonTitle} />
                            ) : null}
                        </div>
                    </div>
                </div>
            ) : null}
            <div className="content-2 border-round-lg overflow-hidden">{children}</div>
        </div>
    );
}

export function SubTableCard({ title, onClick, children }) {
    return (
        <div className="label-table my-6">
            {title ? (
                <div className="heading p-2 px-4 my-1 grid">
                    {onClick ? (
                        <img
                            role="button"
                            src={plusgreen}
                            alt="add"
                            className="cursor-pointer"
                            width="24px"
                            height="24px"
                            onClick={onClick}
                        />
                    ) : null}
                    <h4 className="mx-2 my-auto">{title}</h4>
                </div>
            ) : null}
            <div className="content-2 border-round-lg overflow-hidden">{children}</div>
        </div>
    );
}
