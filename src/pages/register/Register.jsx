import React, { useState } from "react";

import axios from "../../hooks/axiosHook";
import Navbar from "../../components/navbar/Navbar";
import Input from "../../components/input/Input";

import "./Register.css";

function Register() {
    let [fullname, setFullName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [phoneNumber, setPhoneNumber] = useState("");
    let [DOB, setDOB] = useState("");
    let [profilePicture, setProfilePicture] = useState(null);

    function handleChange(e) {
        const event = e.target;
        const name = event.name;

        if (name === "fullname") {
            setFullName(event.value);
        } else if (name === "email") {
            setEmail(event.value);
        } else if (name === "password") {
            setPassword(event.value);
        } else if (name === "phoneNumber") {
            setPhoneNumber(event.value);
        } else if (name === "DOB") {
            setDOB(event.value);
        } else if (name === "profilePicture") {
            setProfilePicture(event.files[0]);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("full_name", fullname);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("phone_number", phoneNumber);
        formData.append("date_of_birth", DOB);
        formData.append("profile_picture", profilePicture);

        console.log(profilePicture);
        axios
            .post("/auth/users/", formData)
            .then(() => {
                window.location.replace("/");
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.message);
                }
            });
    }

    return (
        <div className="Register">
            <Navbar menu={["Login", "Register"]} />
            <div className="form-container">
                <form className="form" id="register-form">
                    <h2 className="register-header">Register</h2>
                    <table>
                        <Input
                            onChange={handleChange}
                            label="Fullname"
                            type="text"
                            name="fullname"
                            pHold="Enter fullname here"
                            value={fullname}
                            required="true"
                        />
                        <Input
                            onChange={handleChange}
                            label="Email"
                            type="email"
                            name="email"
                            pHold="example@ex.com"
                            value={email}
                            required="true"
                        />
                        <Input
                            onChange={handleChange}
                            label="Password"
                            type="password"
                            name="password"
                            pHold="Enter password here"
                            value={password}
                            required="true"
                        />
                        <Input
                            onChange={handleChange}
                            label="Phone Number"
                            type="number"
                            name="phoneNumber"
                            pHold="Enter phone number here"
                            value={phoneNumber}
                            required="true"
                        />
                        <Input
                            onChange={handleChange}
                            label="Date of Birth"
                            type="date"
                            name="DOB"
                            pHold="DOB"
                            value={DOB}
                            required="true"
                        />
                        <tr>
                            <td>
                                <span className="label">Profile Picture</span>
                            </td>
                            <td>
                                <input
                                    name="profilePicture"
                                    type="file"
                                    id="upload-btn"
                                    onChange={handleChange}
                                    hidden
                                    required
                                />
                                <label htmlFor="upload-btn" id="btn-text">
                                    Choose File
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button onClick={handleSubmit}>Register</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default Register;