import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addOperation, getOperation, editOperation } from "../../../redux/actions/operationActions";
import { allValidations } from "../../../utils/formValidations";
import { showFormErrors } from "../../../utils/commonFunctions";

export default function ProductionContainer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(
                getOperation(id, (data) => {
                    setOperation({
                        name: data.name,
                        description: data.description,
                        expertise: data.expertise.map((item) => item.name),
                    });
                })
            );
        }
    }, [id, dispatch]);

    const [formType, setFormType] = useState("ADD");
    const [loading, setLoading] = useState(false);
    const [operation, setOperation] = useState({
        name: "",
        expertise: [],
        description: "",
    });

    const handleChange = ({ name, value }) => {
        const formErrors = allValidations(name, value, operation);
        setOperation((prev) => ({ ...prev, [name]: value, formErrors }));
    };

    const onSubmit = () => {
        if (showFormErrors(operation, setOperation)) {
            if (formType === "ADD") {
                dispatch(addOperation(operation, setLoading, history));
            } else {
                dispatch(editOperation(id, operation, setLoading, history));
            }
        }
    };

    return { operation, handleChange, loading, onSubmit, setFormType, history };
}
