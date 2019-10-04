import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const StyleModal = styled.div`
    font-size: 12px;
  `

  const Header = styled.div`
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 18px;
    text-align: center;
    padding: 5px;
 `
  const Content = styled.div`
  
    width: 100%;
    padding: 10px 5px;
  `
  const Actions = styled.div`
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
  `
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
  `

export default ({ close }) => (
    <StyleModal>
    <Header> Reviews </Header>
    <Content>      {" "}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
      Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
      delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
      <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
      commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
      explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
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
