import React from "react";
import dots from "../assets/icons/Group.png";
import { useHistory } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { getMenuItems } from "../utils/menuItems";
import { localeOption } from "primereact/api";

export default function MenuBar({ heading }) {
    const history = useHistory();
    const active = { borderTop: "4px solid #0171d2", borderRadius: "5px", padding: "none" };
    const menuItems = getMenuItems(heading, active, history.location.pathname, history);

    return (
        <div className="menu-bar bg-white flex flex-row">
            <Menubar
                className="w-full p-0 m-0 flex justify-content-between md:justify-content-start"
                model={menuItems?.items}
                start={
                    <div className="flex flex-row px-4 py-2 cursor-pointer">
                        <img src={dots} alt="icomenu" onClick={() => history.replace("/dashboard")} width="25px" />
                        <div className="my-auto text-2xl mx-2 font-bold" onClick={() => history.replace(menuItems.path)}>
                            {localeOption(heading) || heading}
                        </div>
                    </div>
                }
            ></Menubar>
        </div>
    );
}
