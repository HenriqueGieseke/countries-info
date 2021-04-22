const countryJson = (travelInfo) =>{
  const country = {
    // name: countryInfo.name,
    // capital: countryInfo.capital,
    // subregion: countryInfo.subregion,
    // population: countryInfo.population,
    // flag: countryInfo.flag,
    electricity: travelInfo.electricity,
    maps: travelInfo.maps,
    currency: {
      name: travelInfo.currency.name,
      code: travelInfo.currency.code,
      symbol: travelInfo.currency.symbol,
      rate: travelInfo.currency.rate
    },
    advise: travelInfo.advise,
    neighbors: travelInfo.neighbors
  }

  return country;
}

export { countryJson };