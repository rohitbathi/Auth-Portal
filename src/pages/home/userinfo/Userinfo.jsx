import React from "react";
import "./Userinfo.css";

function Userinfo(props) {

    return (
        <div className='user-card'>
            <img src={props.img} alt="alt.jpg" />
            <h3>Welcome, {props.fullname}!</h3>
        </div>
    );
}

export default Userinfo;
