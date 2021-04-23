import React from 'react';
import styled, { keyframes } from 'styled-components';
import line from '../assets/Line1.svg';
import Box404 from './Box404';
import Spinner from './Spinner';

const ContentBox = ({ countryInfo, travelInfo }) => {
  if (!countryInfo && !travelInfo) {
    return (
      <div>
        <Spinner />
      </div>
    );
  } else if (!countryInfo && travelInfo.name === 'Netherlands') {
    return (
      <div>
        <Box404 />
      </div>
    );
  } else if (travelInfo && countryInfo) {
    return (
      <StyledContentBox>
        <StyledWrapper>
          <TextWrapper>
            <img src={countryInfo.flag} alt="flag" />
            <h3>{countryInfo.name}</h3>
          </TextWrapper>
          <SoloWrapper>
            <span>{countryInfo.subregion}</span>
          </SoloWrapper>
          <TextWrapper>
            <StyledText>Capital:</StyledText>
            <span>{countryInfo.capital}</span>
          </TextWrapper>
          <TextWrapper>
            <StyledText>Population:</StyledText>
            <span>{countryInfo.population}</span>
          </TextWrapper>
          <TextWrapper>
            <StyledText>Currency:</StyledText>
            <span>{travelInfo.currency.name}</span>
          </TextWrapper>
          <CurrencyWrapper>
            <span>1 US Dollar</span>
            <span>=</span>
            <span>
              <strong>{Number(travelInfo.currency.rate).toFixed(2)}</strong>
            </span>
          </CurrencyWrapper>
        </StyledWrapper>
        <StyledWrapper>
          <TextWrapper>
            <h5>Travel Advise:</h5>
          </TextWrapper>
          <TextWrapper>
            <StyledAdviseText>{travelInfo.advise}</StyledAdviseText>
          </TextWrapper>
          <TextWrapper>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.smartraveller.gov.au/search?search=${countryInfo.name}`}
            >
              Source
            </a>
          </TextWrapper>
        </StyledWrapper>

        <StyledLine src={line} alt="" />
      </StyledContentBox>
    );
  } else {
    return null;
  }
};

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const StyledContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 66%;
  max-width: 900px;
  min-width: 200px;
  height: 55%;
  border-radius: 13px;
  opacity: 85%;
  top: 100px;
  color: white;
  background-color: #010018;
  animation: ${FadeIn} 1.5s ease;

  span {
    text-align: center;
    margin-left: 5px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    width: 56%;
    margin-bottom: 20px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 28%;
  height: 25%;
  margin-right: 70px;
  margin-left: 70px;

`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  span {
    font-size: 17px;

    @media (max-width: 700px) {
      font-size: 13px;
    }
  }

  h3 {
    text-align: center;

    @media (max-width: 700px) {
      width: 50px;
      font-size: 15px;
    }
  }

  h5 {
    text-align: center;

    @media (max-width: 700px) {
      width: 50px;
      font-size: 13px;
    }
  }

  img {
    width: 60px;
    height: auto;
    margin-right: 10px;

    @media (max-width: 700px) {
      width: 50px;
    }
  }

  a {
    margin-left: 20px;
    text-decoration: none;
    color: #fffee2;
    font-size: 15px;
    transition: 0.2s;
    font-weight: 700;

    &:hover {
      filter: brightness(0.8);
    }

    @media (max-width: 700px) {
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }
`;

const CurrencyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 25px;

  @media (max-width: 700px) {
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

const SoloWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.span`
  font-weight: 700;
  margin-right: 10px;
`;

const StyledLine = styled.img`
  position: absolute;
  height: 40%;
  max-height: 300px;

  @media (max-width: 700px) {
    height: 0%;
  }
`;

const StyledAdviseText = styled.span`
  text-align: center;
`;

export default ContentBox;
