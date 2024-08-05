import React, { useState, useEffect } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

export default function CustomAccordion({ children, isActive, extraClassName, title }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (isActive) {
            setActiveIndex(0);
        } else {
            setActiveIndex(null);
        }
    }, [isActive]);

    return (
        <Accordion
            onTabChange={(e) => setActiveIndex(e.index)}
            activeIndex={activeIndex}
            className={`custom-accordion border-none my-2 ${extraClassName}`}
        >
            <AccordionTab header={title} className={extraClassName}>
                {children}
            </AccordionTab>
        </Accordion>
    );
}
