import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const SearchInput = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onSubmit = (event) => {
    getQuery(text);
    event.preventDefault();
  };

  const handleChange = (e) => {
    setText(e);
  };

  return (
    <form onSubmit={onSubmit}>
      <Container>
        <StyledInput
          type="text"
          placeholder="Search a Country"
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          autoFocus
        />
        <StyledButton type="submit" value="Search" />
      </Container>
    </form>
  );
};

export default SearchInput;

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  margin-top: 40px;
  margin-bottom: 40px;

  animation: ${FadeIn} 1s ease;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

const StyledInput = styled.input`
  width: 350px;
  height: 50px;
  border: none;
  border-radius: 29px;
  background-color: #fffee2;
  padding-left: 48px;
  font-size: 15px;
  filter: opacity(0.7);
  transition: 0.2s;

  &:hover {
    filter: opacity(0.85);
  }

  &:focus {
    filter: opacity(0.85);
  }

  @media (max-width: 700px) {
    font-size: 13px;
    margin-top: 1rem;
    width: 95%;
    height: 40px;
  }
`;

const StyledButton = styled.input`
  border: none;
  height: 50px;
  width: 100px;
  background-color: #002d4f;
  border-radius: 29px;
  margin-left: 21px;
  font-size: 15px;
  color: #ffffff;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    filter: brightness(0.5);
  }

  @media (max-width: 700px) {
    width: 80px;
    height: 40px;
    font-size: 12px;
  }
`;
