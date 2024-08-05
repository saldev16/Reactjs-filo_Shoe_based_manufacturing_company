import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getEmployeeLogs } from "../../../redux/actions/employeeAction";

export default function EmployeeLogs() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        dispatch(getEmployeeLogs(id, setLoading, (d) => setData(d.map((item) => ({ ...item, time: new Date(item.time) })))));
    }, [dispatch, id]);

    let machines = data.map((item) => item.machine);
    machines = machines.filter((value, index, self) => self.findIndex((m) => m._id === value._id) === index);

    let jobPositions = data.map((item) => item.jobPosition);
    jobPositions = jobPositions.filter((value, index, self) => self.findIndex((m) => m?._id === value?._id) === index);

    return { data, loading, machines, jobPositions };
}
