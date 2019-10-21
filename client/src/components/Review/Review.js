import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";
import Tabs1 from "./Tabs1";

const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
width: 100%
height: 100%;
border-radius: 25px;
background:white;
border: 3px solid gold;

// `;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const StyleModal = styled.div`
  font-size: 12px;
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  font-size: 18px;
  text-align: center;
  padding: 5px;
`;
const Content = styled.div`
  width: 100%;
  padding: 10px 5px;
`;
const Actions = styled.div`
  width: 100%;
  padding: 10px 5px;
  margin: auto;
  text-align: center;
`;
const Close = styled.div`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: -10px;
  top: -10px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #cfcece;
`;

export default props => (
  <StyleModal>
    <Close>
      <a Close onClick={props.close}>
        &times;
      </a>
    </Close>
    <Tabs1 details={props.details} hours={props.hours} />
  </StyleModal>
);
