// require('dotenv').config()
import axios from "axios";
import Constants from "./constant";
import { isAuthenticated } from "./auth";

const api = (method, urlEndPoint, data = null) =>
    new Promise((myResolve) => {
        let headers = {
            "Content-Type": "application/json",
        };
        if (isAuthenticated()) {
            headers = {
                ...headers,
                Authorization: `Bearer ${isAuthenticated()}`,
            };
        }
        axios({
            method,
            url: Constants.BASE_URL + urlEndPoint,
            data,
            headers,
        })
            .then((response) => {
                myResolve({
                    message: response.data.message,
                    data: response.data.data,
                    success: response.data.success,
                });
            })
            .catch((err) => {
                if (err.response) {
                    myResolve({
                        message: err.response.data.message,
                        data: err.response.data.data,
                        success: err.response.data.success,
                    });
                } else {
                    myResolve({
                        message: err.toString(),
                        data: { ...err },
                        success: false,
                    });
                }
            });
    });

export default api;
