import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";

import Userinfo from "./userinfo/Userinfo";
import axios from "../../hooks/axiosHook";
import logout from '../../hooks/logout'

import "./Home.css";

const menu = ["Home", "Edit Profile", "Tech Support"];

function Home() {
    let [data, setData] = useState({});

    useEffect(() => {
        axios
            .get("/accounts/my_details/", {
                headers: {
                    Authorization: `Token ${localStorage.getItem("userToken")}`,
                },
            })
            .then((res) => {
                setData(res.data);
            });
    }, []);

    return (
        <div className="Home">
            <div className="nav-wrap">
                <Navbar menu={menu} />
                <button id="logout-button" onClick={logout}>Logout</button>
            </div>
            <div id="user-content">
                <div id="details">
                    <Userinfo
                        img={data.profile_picture}
                        fullname={data.full_name}
                    />
                    <fieldset>
                        <legend>My Details</legend>
                        <div>
                            <span className="bold-text">Full Name:</span>{" "}
                            {data.full_name}
                        </div>
                        <div>
                            <span className="bold-text">Email:</span>{" "}
                            {data.email}
                        </div>
                        <div>
                            <span className="bold-text">Phone Number:</span>{" "}
                            {data.phone_number}
                        </div>
                        <div>
                            <span className="bold-text">Date of Birth:</span>{" "}
                            {data.date_of_birth}
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    );
}

export default Home;
