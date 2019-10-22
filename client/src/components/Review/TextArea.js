// IMPORTS
import React from "react";
import styled from 'styled-components'

// STYLED COMPONENTS

// COMPONENT
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
