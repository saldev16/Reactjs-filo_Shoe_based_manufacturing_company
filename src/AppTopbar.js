import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { useHistory } from "react-router-dom";
import { logout } from "./services/auth";
import profile from "./assets/icons/Ellipse88.png";

export const AppTopbar = (props) => {
    const history = useHistory();
    const confirm = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: "Are you sure you want to Logout?",
            icon: "pi pi-exclamation-triangle",
            accept,
            reject,
        });
    };
    const accept = () => {
        logout(() => {
            setTimeout(() => {
                history.push("/");
            }, 400);
        });
    };
    const reject = () => {};
    return (
        <div className="layout-topbar">
            <ConfirmPopup />
            <button
                type="button"
                className="p-link layout-topbar-menu-button layout-topbar-button"
                onClick={props.onMobileTopbarMenuClick}
            >
                <i className="pi pi-ellipsis-v" />
            </button>
            <Link to="/" className="layout-topbar-logo ml-3">
                <img
                    src={
                        props.layoutColorMode === "light"
                            ? "assets/layout/images/squareLogo.png"
                            : "assets/layout/images/squareLogo.png"
                    }
                    alt="logo"
                />
                <span className="text-white"> Bashir Saleh Company</span>
            </Link>

            <ul
                className={classNames("layout-topbar-menu lg:flex align-items-center origin-top", {
                    "layout-topbar-menu-mobile-active": props.mobileTopbarMenuActive,
                })}
            >
                <li>
                    <i className="pi pi-spiin pi-bell mx-2" style={{ fontSize: "2rem" }}></i>
                </li>
                <li>
                    <Link  to="/groups" style={{color:"#ffffff"}}>
                    <i className="pi pi-spiin pi-cog mx-2" style={{ fontSize: "2rem" }}></i>
                    </Link>
                </li>
                <li>
                    <div className="profile mx-2">
                        <img className="w-full fit-cover" src={profile} alt="" onClick={(e) => confirm(e)} />
                    </div>
                </li>
            </ul>
        </div>
    );
};
