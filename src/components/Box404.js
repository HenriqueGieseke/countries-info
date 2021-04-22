import React from 'react';
import styled, { keyframes } from 'styled-components';
import img from '../assets/040-error-404-monochrome.svg';

const Box404 = () => {
  return (
    <Container>
      <StyledContentBox>
        <h3>Country Not Found</h3>
        <img src={img} alt="Country Not Found" />
      </StyledContentBox>
    </Container>
  );
};

export default Box404;

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 50px;
  border-radius: 13px;
  opacity: 85%;
  top: 100px;
  color: white;
  background-color: #010018;
  animation: ${FadeIn} 1s ease;

  img {
    width: 200px;
    height: auto;
  }

  h3 {
    margin-bottom: 20px;
  }
`;
