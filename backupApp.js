import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import SearchInput from './components/SearchInput';
import { countryInfoController } from './helpers/countryInfoController';
import { travelInfoController } from './helpers/travelInfoController';
import NavBar from './components/NavBar';
import ContentBox from './components/ContentBox';
import Home from './components/Home';

function App() {
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

    try {
      const fetchTravelInfo = async () => {
        const { data } = await axios(
          `https://travelbriefing.org/${query}?format=json`
        );

        const travelJson = travelInfoController(data);

        setTravelInfo(travelJson);
        console.log(travelJson);
      };
      const fetchCountries = async () => {
        const { data } = await axios(
          `https://restcountries.eu/rest/v2/name/${query}`
        );
        const countryJson = countryInfoController(data);

        setCountryInfo(countryJson);
        console.log(countryJson);
      };
      fetchCountries();
      fetchTravelInfo();
      setSearchActive(true);
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  return (
    <div className="App">
      <NavBar />
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
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  flex-direction: column;
`;

export default App;
