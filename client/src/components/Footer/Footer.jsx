import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <h3><i
            class="fas fa-wifi"
            style={{ color: "gold", margin: "0 5px" }}
          ></i> HiveStack</h3>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  border: 1px solid #F6F6F6;
  background: #F6F6F6;
  text-align: right;
  h3 {
    margin: 30px 40px 30px 0;
    font-size: 20px;
  }
`;
