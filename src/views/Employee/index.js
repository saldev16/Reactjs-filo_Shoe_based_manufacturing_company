import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { confirmPopup } from "primereact/confirmpopup";
import { useSelector, useDispatch } from "react-redux";
import { getEmployees, deleteEmployee } from "../../redux/actions/employeeAction";

export default function Index() {
    const history = useHistory();
    const dispatch = useDispatch();
    let { employees } = useSelector((state) => state?.employee);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        dispatch(getEmployees(setLoading));
    }, [dispatch]);

    const deleteRow = (event, id) => {
        if (id) {
            confirmPopup({
                target: event.currentTarget,
                message: "Are you sure you want to Delete?",
                icon: "pi pi-exclamation-triangle",
                accept: () => {
                    dispatch(deleteEmployee(id));
                },
                reject: () => {},
            });
        }
    };

    employees = employees.map((item) => ({
        ...item,
        fullName: item.firstName + " " + item.lastName,
        jobPosAndOperation: (item?.jobPosition?.name || "--") + ", " + (item?.operation?.name || "--"),
    }));
    return { employees, loading, history, deleteRow };
}
