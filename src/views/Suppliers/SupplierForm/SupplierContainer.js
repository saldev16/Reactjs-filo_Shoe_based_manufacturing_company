import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getSupplier, addSupplier, editSupplier } from "../../../redux/actions/supplierAction";
import { allValidations } from "../../../utils/formValidations";
import { showFormErrors } from "../../../utils/commonFunctions";
import { getTags } from "../../../redux/actions/miscAction";

export default function SupplierContainer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const supplierTypes = [
        { name: "Individual", value: "INDIVIDUAL" },
        { name: "Company", value: "COMPANY" },
    ];

    const addressTypes = [
        { name: "Contact Address", value: "CONTACT" },
        { name: "Invoice address", value: "INVOICE" },
        { name: "Delivery Address", value: "DELIVERY" },
    ];

    useEffect(() => {
        dispatch(getTags());
    }, [dispatch]);

    let allTags = useSelector((state) => state?.misc.tags);
    allTags = allTags.map((item) => item.name);

    useEffect(() => {
        if (id) {
            dispatch(
                getSupplier(id, (data) => {
                    setSupplier({
                        type: supplierTypes.find((item) => item.value === data.type),
                        image: data.image ? [data.image] : [],
                        fullName: data.name,
                        companyName: data.companyName,
                        jobPositions: data.jobPosition,
                        phone: data.phone,
                        email: data.email,
                        website: data.website,
                        title: data.title,
                        tags: data.tags,
                        contactType: data.contactType,
                        address1: data.address1,
                        address2: data.address2,
                        city: data.city,
                        state: data.state,
                        zipCode: data.zipCode,
                        country: data.country,
                        salesPerson: data.salesPerson,
                        companyId: data.companyId,
                        reference: data.reference,
                        notes: data.notes,
                    });
                })
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, dispatch]);

    const [formType, setFormType] = useState("ADD");
    const [loading, setLoading] = useState(false);
    const [supplier, setSupplier] = useState({
        type: { name: "Company", value: "COMPANY" },
        image: [],
        fullName: "",
        companyName: "",
        jobPositions: "",
        phone: "",
        email: "",
        website: "",
        title: "",
        tags: [],
        contactType: "CONTACT",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        salesPerson: "",
        companyId: "",
        reference: "",
        notes: "",
    });

    const handleChange = ({ name, value }) => {
        if (formType !== "VIEW") {
            const formErrors = allValidations(name, value, supplier);
            setSupplier((prev) => ({ ...prev, [name]: value, formErrors }));
        }
    };

    const onSubmit = () => {
        if (showFormErrors(supplier, setSupplier)) {
            if (formType === "ADD") {
                dispatch(addSupplier(supplier, setLoading, history));
            } else if (formType === "EDIT") {
                dispatch(editSupplier(id, supplier, setLoading, history));
            }
        }
    };

    return { supplier, handleChange, allTags, loading, onSubmit, setFormType, history, supplierTypes, addressTypes };
}
