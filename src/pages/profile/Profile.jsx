import React, { useState } from "react";

import axios from "../../hooks/axiosHook";

import Navbar from "../../components/navbar/Navbar";
import Input from "../../components/input/Input";
import logout from "../../hooks/logout";

import "./Profile.css";

const menu = ["Home", "Edit Profile", "Tech Support"];

export default function Profile() {
    let [data, setData] = useState({});

    function handleChange(e) {
        let event = e.target;
        setData({
            ...data,
            [event.name]: event.value.trim(),
        });
    }

    function saveData(e) {
        e.preventDefault();
        console.log(data);
        axios
            .patch("/accounts/my_details/", data, {
                headers: {
                    Authorization: `Token ${localStorage.getItem("userToken")}`,
                },
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }

    return (
        <div className="Profile">
            <Navbar menu={menu} />
            <button id="logout-button" onClick={logout}>
                Logout
            </button>
            <div id="main-wrap">
                <div className="content-wrapper">
                    <h2 className="profile-header">Edit your profile</h2>
                    <table>
                        <Input
                            label="Full Name:"
                            type="text"
                            labelClass="content-label"
                            inputClass="content-input"
                            name="full_name"
                            value={data.full_name}
                            onChange={handleChange}
                        />
                        <Input
                            label="DOB:"
                            type="date"
                            labelClass="content-label"
                            inputClass="content-input"
                            name="date_of_birth"
                            value={data.date_of_birth}
                            onChange={handleChange}
                        />
                        <Input
                            label="Phone Number:"
                            type="number"
                            labelClass="content-label"
                            inputClass="content-input"
                            name="phone_number"
                            value={data.phone_number}
                            onChange={handleChange}
                        />
                    </table>
                    <button id="save-btn" onClick={saveData}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
