import React from 'react';
import styled from 'styled-components';
import logo from '../assets/clarity_world-line.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="" />
        <Link className="home-link" to="/">
          <h3>Countries-Info</h3>
        </Link>
      </Wrapper>
      <Wrapper>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #010034;
  filter: opacity(0.8);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-left: 33px;
  margin-right: 33px;

  @media (max-width: 700px) {
    margin: 0px ;
  }

  display: flex;

  .home-link {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    margin-right: 14px;
    align-self: center;

    width: 36px;
    height: 36px;

    @media (max-width: 700px) {
      width: 27px;
      height: 27px;
      margin-right: 0px;
    }
  }

  h3 {
    color: #fffee2;
    text-align: center;
    align-self: center;

    @media (max-width: 700px) {
      font-size: 10px;
    }
  }

  a {
    margin-left: 20px;
    text-decoration: none;
    color: #fffee2;
    font-size: 15px;
    transition: 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    @media (max-width: 700px) {
      font-size: 9px;
      margin: 5px;
    }
  }
`;

export default NavBar;
