import React from "react";

import "./Input.css";

function Input(props) {
    return (
        <tr>
            <td>
                <span className={props.labelClass || "label"}>
                    {props.label || null}
                </span>
            </td>
            <td>
                <input
                    className={props.inputClass || "form-input"}
                    onChange={props.onChange}
                    type={props.type}
                    placeholder={props.pHold}
                    name={props.name}
                    required={props.required === "true" ? true : false}
                />
            </td>
        </tr>
    );
}

export default Input;
