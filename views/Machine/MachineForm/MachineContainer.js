import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addMachines } from "../../../redux/actions/machineActions";

import { allValidations } from "../../../utils/formValidations";
import { showFormErrors } from "../../../utils/commonFunctions";
import { getOperations } from "../../../redux/actions/operationActions";

export default function MachineContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getOperations(() => {}));
    }, [dispatch]);

    const { allOperations } = useSelector((state) => state?.operations);
    const [formType, setFormType] = useState("ADD");
    const [loading, setLoading] = useState(false);
    const [machine, setMachine] = useState({
        operation: {},
        name: "",
        stationsQuantity: 0,
        startTime: "",
        endTime: "",
        description: "",
        images: [],
        files: [],
    });

    const getCode = () => {
        return machine?.operation?.code ? machine.operation.code + "-#" : "";
    };

    const handleChange = ({ name, value }) => {
        const formErrors = allValidations(name, value, machine);
        setMachine((prev) => ({ ...prev, [name]: value, formErrors }));
    };

    const onSubmit = () => {
        if (showFormErrors(machine, setMachine)) {
            if (formType === "ADD") {
                dispatch(addMachines(machine, setLoading, history));
            }
        }
    };

    const operation = allOperations.map((item) => ({ _id: item._id, name: item.name, code: item.code }));

    return { machine, operation, getCode, handleChange, loading, onSubmit, setFormType, history };
}
