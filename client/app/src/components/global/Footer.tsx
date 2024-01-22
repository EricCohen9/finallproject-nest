import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 3rem 0;
  text-align: center;
  position: relative;
  background-color: #3874af; 
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Caption = styled.div`
  font-size: 0.75rem; 
  color: #4c7fac; 
`;

const StyledLink = styled.a`
  color: #007bff; 
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
      </Container>
    </StyledFooter>
  );
}

export default Footer;

