import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";

// STYLED COMPONENTS
const DetailButton = styled.button`
  align-self: center;
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid gold;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 30px;
  background: white;
  &:hover {
    box-shadow: 0px 5px 5px 0px rgba(176, 170, 176, 1);
    transform: translateY(-2px);
    transition: 0.2s;
  }
`;

export default props => (
    <DetailButton onClick={props.handleNetwork}>{props.runTest ? "Hide Network Info" : "Run Network Test"}</DetailButton>
  );