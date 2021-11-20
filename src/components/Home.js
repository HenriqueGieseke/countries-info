import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ContentBox from './ContentBox';
import SearchInput from './SearchInput';
import { travelInfoController } from '../helpers/travelInfoController';
import { countryInfoController } from '../helpers/countryInfoController';

const Home = () => {
  const [query, setQuery] = useState('');
  const [countryInfo, setCountryInfo] = useState('');
  const [travelInfo, setTravelInfo] = useState('');
  const [searchActive, setSearchActive] = useState(false);

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    setCountryInfo('');
    setTravelInfo('');

    const fetchTravelInfo = async () => {
      const { data } = await axios(
        `https://travelbriefing.org/${query}?format=json`
      );

      const travelJson = travelInfoController(data);

      setTravelInfo(travelJson);
    };
    const fetchCountries = async () => {
      const { data } = await axios(
        `https://restcountries.com/v2/name/${query}`
      );
      const countryJson = countryInfoController(data);

      setCountryInfo(countryJson);
    };

    try {
      fetchCountries();
      fetchTravelInfo();
      setSearchActive(true);
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  return (
    <Container>
      <SearchInput
        getQuery={(query) => {
          setQuery(query);
        }}
      />
      {searchActive ? (
        <ContentBox countryInfo={countryInfo} travelInfo={travelInfo} />
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  flex-direction: column;
`;

export default Home;
