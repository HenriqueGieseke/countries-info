import React from 'react';
import styled, {keyframes} from 'styled-components';
import spinner from '../assets/Spinner-1s-200px-white.gif';

const Spinner = () => {
  return (
    <FadeInContainer>
      <img src={spinner} alt="Loading Spinner" />
    </FadeInContainer>
  );
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const FadeInContainer = styled.div`
  animation: ${FadeIn} 0.5s ease;
`

export default Spinner;
