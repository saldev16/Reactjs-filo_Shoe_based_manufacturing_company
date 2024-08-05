import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  getCustomer,
  addCustomer,
  editCustomer,
} from "../../../redux/actions/customerActions";
import { allValidations } from "../../../utils/formValidations";
import { showFormErrors } from "../../../utils/commonFunctions";
import { getTags } from "../../../redux/actions/miscAction";

export default function CustomerContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const customerTypes = [
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
        getCustomer(id, (data) => {
          setCustomer({
            type: customerTypes.find((item) => item.value === data.type),
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
  const [customer, setCustomer] = useState({
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
      const formErrors = allValidations(name, value, customer);
      setCustomer((prev) => ({ ...prev, [name]: value, formErrors }));
    }
  };

  const onSubmit = () => {
    if (showFormErrors(customer, setCustomer)) {
      if (formType === "ADD") {
        dispatch(addCustomer(customer, setLoading, history));
      } else if (formType === "EDIT") {
        dispatch(editCustomer(id, customer, setLoading, history));
      }
    }
  };

  return {
    customer,
    allTags,
    handleChange,
    loading,
    onSubmit,
    setFormType,
    history,
    customerTypes,
    addressTypes,
  };
}
