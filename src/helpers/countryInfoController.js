const countryInfoController = (rawJson) => {
  const [json] = rawJson;

  const conciseJson = {
    name: json.name,
    capital: json.capital,
    subregion: json.subregion,
    population: json.population,
    flag: json.flag,
  };

  return conciseJson;
};

export { countryInfoController };
