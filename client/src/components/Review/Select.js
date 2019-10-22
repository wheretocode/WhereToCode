// IMPORT
import React from "react";
import styled from 'styled-components'

// STYLED COMPONENTS
const Select_CONTAINER = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  label {
    margin-right: 10px; 
  }
`;

// COMPONENT
const Select = props => {
  return (
    <Select_CONTAINER>
      <label for={props.name}> {props.title} </label>
      <select
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map(option => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </Select_CONTAINER>
  );
};

// EXPORT
export default Select;