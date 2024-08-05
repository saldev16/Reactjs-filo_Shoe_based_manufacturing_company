import React from "react";
import { TabView, TabPanel } from "primereact/tabview";

export const FormTabView = ({ tabs }) => {
    return (
        <div className="py-4">
            <TabView>
                {tabs.map((tab, i) => {
                    return (
                        <TabPanel key={i} header={tab.title} disabled={tab?.disabled}>
                            <p className="m-0">{tab.content}</p>
                        </TabPanel>
                    );
                })}
            </TabView>
        </div>
    );
};
