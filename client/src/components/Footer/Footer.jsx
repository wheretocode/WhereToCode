import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <h3>Copyright 2019 HiveStack</h3>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  border: 1px solid gold;
  background: gold;
  text-align: center;
  width: 100%;
`;
