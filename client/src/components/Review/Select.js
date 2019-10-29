// IMPORT
import React from "react";
import styled from "styled-components";

// STYLED COMPONENTS
const SelectContainer = styled.div`
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
    <SelectContainer>
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
    </SelectContainer>
  );
};

// EXPORT
export default Select;
