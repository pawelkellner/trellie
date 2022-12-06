import React from "react";
import "./Activity.css";

const Activity = (props) => {

    return (
        <li className="activity">
            <h3 className="activity__label">
                {props.activity.label || "----"}
            </h3>
            <p className="activity__description">
                {props.activity.description || "Placeholder description"}
            </p>
        </li>
    );
}


export default Activity;