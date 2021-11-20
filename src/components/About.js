import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Container>
      <StyledContentBox>
        <p>
          This is a learning project that I built for my portfolio.
          <br />
          The source of the information provided are these API below:
        </p>
        <Wrapper>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://restcountries.com/"
          >
            REST Countries
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://travelbriefing.org/api"
          >
            Travel Briefing
          </a>
          <Link className="home-link" to="/">
            Home
          </Link>
        </Wrapper>
      </StyledContentBox>
    </Container>
  );
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  text-align: center;
`;

const StyledContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 30%;
  min-width: 170px;
  height: 30%;
  padding: 50px;
  border-radius: 13px;
  opacity: 85%;
  top: 100px;
  color: white;
  background-color: #010018;
  animation: ${FadeIn} 1s ease;

  p {
    margin-bottom: 1rem;
  }

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
    padding: 0px;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export default About;
