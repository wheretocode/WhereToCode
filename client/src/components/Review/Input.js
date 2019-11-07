// IMPROTS
import React from "react";

// COMPONENT
const Input = props => {
  return (
    <div>
      <label htmlfor={props.name}>{props.title}</label>
      <input
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

// EXPORTS
export default Input;
