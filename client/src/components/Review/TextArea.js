import React from "react";

const TextArea = props => (
  <div>
    <label>{props.title}</label>
    <textarea
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  </div>
);

export default TextArea;
