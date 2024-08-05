import React, { useState, useRef, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { isAuthenticated } from "../services/auth";
import { useHistory, Link } from "react-router-dom";
import { Messages } from "primereact/messages";
import logoo from "../assets/image/logo.png";
import SideImg from "../assets/icons/sideimg.png";
// import InputField from "../../shared/InputField";
import { Checkbox } from "primereact/checkbox";
import { loginAction } from "../redux/actions/loginAction";
import { useDispatch } from "react-redux";

const Login = () => {
    const history = useHistory();
    const message = useRef();
    useEffect(() => {
        document.documentElement.style.fontSize = 14 + "px";
        if (isAuthenticated()) {
            history.push("/dashboard");
        }
    }, [history]);

    const [form, setForm] = useState({
        email: "employee@yopmail.com",
        password: "Employee@1234",
    });
    const [errors, setErrors] = useState({});

    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
        if (!!errors[field]) {
            setErrors({
                ...errors,
                [field]: null,
            });
        }
    };
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            return;
        }
        dispatch(loginAction(form, setLoading, history));
    };

    return (
        <React.Fragment>
            <div className="login-background bg-main relative">
                <div className="grid m-0 h-full align-items-center">
                    <div className="col-11 md:col-4 mx-auto">
                        <div className="mt-5 card p-fluid">
                            <div className="text-center">
                                <img src={logoo} alt="logo" width="15%" />
                                <h2 className="text-main text-xl">Bashir Saleh Company</h2>
                            </div>
                            <h3 className="text-3xl text-dark text-center font-bold">Welcome Back</h3>
                            <Messages ref={message} />
                            <form onSubmit={handleSubmit}>
                                <div className="field">
                                    <label htmlFor="email" className="text-xs text-dark">
                                        Email
                                    </label>
                                    <InputText
                                        value={form?.email}
                                        id="email"
                                        type="email"
                                        onChange={(e) => {
                                            setField("email", e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="field mb-3">
                                    <label htmlFor="password" className="text-xs text-dark">
                                        Password
                                    </label>
                                    <Password
                                        value={form?.password}
                                        onChange={(e) => {
                                            setField("password", e.target.value);
                                        }}
                                        toggleMask
                                        feedback={false}
                                    />
                                </div>
                                <div className="flex justify-content-between mb-4 align-items-center">
                                    <div className="check flex align-items-center" style={{ fontSize: "12px" }}>
                                        <Checkbox
                                            className="m-0"
                                            onChange={(e) => setChecked(e.checked)}
                                            checked={checked}
                                        ></Checkbox>
                                        <span className="fw-semibold mx-1 inter text-dark-color">Remember me</span>
                                    </div>
                                    <Link to="/forgetpassword" className="text-decoration-none">
                                        &nbsp;
                                        <span className="h6 text-light-gray text-right">Forgot Password?</span>
                                    </Link>
                                </div>
                                <Button type="submit" label="Login" loading={loading} className="p-button-info" />
                            </form>
                        </div>
                    </div>
                </div>

                <img className=" side-img top-0 absolute w-3 right-0" src={SideImg} alt="" />
            </div>
        </React.Fragment>
    );
};
export default Login;
