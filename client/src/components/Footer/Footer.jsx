import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <h3>
        <i class="fas fa-wifi" style={{ color: "gold", margin: "0 5px" }}></i>{" "}
        HiveStack
      </h3>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  border: 1px solid #f6f6f6;
  background: #f6f6f6;
  text-align: right;
  h3 {
    margin: 20px 40px 0px 0;
    font-size: 20px;
  }
`;
