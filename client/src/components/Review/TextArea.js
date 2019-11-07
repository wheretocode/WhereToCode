// IMPORTS
import React from "react";
import styled from 'styled-components'

// STYLED COMPONENTS

const Text = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 14px;
`


// COMPONENT
const TextArea = props => (
  <Text>
    <label>{props.title}</label>
    <textarea
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  </Text>
);

export default TextArea;