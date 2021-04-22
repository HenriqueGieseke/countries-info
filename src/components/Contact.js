import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <Container>
      <StyledContentBox>
        <p>
          For any contact please reach me through my GitHub:
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/HenriqueGieseke"
        >
          My GitHub
        </a>
        <Link className="home-link" to="/" >Home</Link>
      </StyledContentBox>
    </Container>
  );
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  text-align: center;

  p {
    margin-bottom: 1rem;
  }
`;

const StyledContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 30%;
  height: 30%;
  padding: 50px;
  border-radius: 13px;
  opacity: 85%;
  top: 100px;
  color: white;
  background-color: #010018;
  animation: ${FadeIn} 1s ease;

  .home-link {
    margin-top: 2rem;
  }

  a {
    margin-left: 20px;
    text-decoration: underline;
    color: #fffee2;
    font-size: 15px;
    transition: 0.2s;
    font-weight: 700;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export default Contact;
