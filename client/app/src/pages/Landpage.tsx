// LandingPage.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../components/global/Header'; // Import the Header component

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  /* height: 40vh; */
  overflow-x: hidden;
  flex-grow: 1;
  background-color: #f5f5f5;
`;

const MainContent = styled.main`
  flex-grow: 1;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const AnimatedCity = styled.img`
  width: 100vw;
  height: 91.7vh;
  /* border-radius: 50%;   */
  aspect-ratio: 1 / 1;
  object-fit: cover; 
  /* animation: ${rotate} 20s linear infinite; */
`;

const LandingPage = () => {
  return (
    <LandingContainer>
      <MainContent>
        <AnimatedCity src='https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg'/>
      </MainContent>
    </LandingContainer>
  );
};

export default LandingPage;
