import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "white" : "gold")};
  color: ${props => (props.primary ? "gold" : "white")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid gold;
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

const DetailsPanel = props => {
  return (
    <StyleModal>
      <Header> Details </Header>
      <Content>
        <h2>Name:</h2>
        <p>{props.details[0]}</p>
        <h2>Phone:</h2>
        <p>{props.details[1]}</p>
        <h2>Hours:</h2>

        {props.hours.map(day => {
          return <p>- {day} -</p>;
        })}
      </Content>
      <Actions>
        <Popup
          trigger={<Button> Trigger </Button>}
          position="top center"
          closeOnDocumentClick
        >
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            magni omnis delectus nemo, maxime molestiae dolorem numquam
            mollitia, voluptate ea, accusamus excepturi deleniti ratione
            sapiente! Laudantium, aperiam doloribus. Odit, aut.
          </span>
        </Popup>
        <Popup
          trigger={<Button> Trigger </Button>}
          position="top center"
          closeOnDocumentClick
        >
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            magni omnis delectus nemo, maxime molestiae dolorem numquam
            mollitia, voluptate ea, accusamus excepturi deleniti ratione
            sapiente! Laudantium, aperiam doloribus. Odit, aut.
          </span>
        </Popup>
      </Actions>
    </StyleModal>
  );
};

export default DetailsPanel;

DetailsPanel.defaultProps = {
  primary: true
};
