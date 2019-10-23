// IMPORTS
import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";


// IMPORT COMPONENTS
import Tabs from "./Tabs";

// STYLED COMPONENTS
const StyleModal = styled.div`
  font-size: 12px;
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
    <Tabs details={props.details} hours={props.hours} />
  </StyleModal>
);
