import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import Input from "../../components/input/Input";

import "./Login.css";

import axios from "../../hooks/axiosHook.js";

function Login(props) {
    let [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        let event = e.target;
        setFormData({
            ...formData,
            [event.name]: event.value.trim(),
        });
    }

    function loginFunc(e) {
        e.preventDefault();

        axios
            .post("/auth/token/login/", formData)
            .then((res) => {
                let userToken = res.data.auth_token;
                window.localStorage.setItem("userToken", userToken);
                window.location.replace("/Home");
            })
            .catch((err) => {
                console.log(err.response);
            });
    }

    return (
        <div className="Login">
            <Navbar menu={["Login", "Register"]} />
            <div className="form-container">
                {/* <div className="message" hidden={props.showMsg}>
                    <p className={props.success==='true'?'success':'failure'}>{props.message}</p>
                </div> */}
                <form className="form" id="login-form">
                    <p className="login-header">Login</p>
                    <table>
                        <Input
                            onChange={handleChange}
                            name="email"
                            label="Email"
                            type="email"
                            pHold="example@ex.com"
                            value={formData.email}
                        />
                        <Input
                            onChange={handleChange}
                            name="password"
                            label="Password"
                            type="password"
                            pHold="Enter password here"
                            value={formData.password}
                        />
                        <tr>
                            <td colSpan="2">
                                <Link to="/Home">
                                    <button onClick={loginFunc}>Login</button>
                                </Link>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default Login;
