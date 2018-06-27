import React from "react";
import "./Plain.css";

const Plain = props => (

    <div className="friend" key={props.id} onClick={() => props.handleClick(props.id)}>
        <img alt={props.name} title={props.name} src={props.image} />
    </div>

);

export default Plain;