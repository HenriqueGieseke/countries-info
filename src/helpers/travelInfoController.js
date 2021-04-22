const travelInfoController = (rawJson) => {
  const conciseJson = {
    name: rawJson.names.name,
    electricity: rawJson.electricity,
    maps: rawJson.maps,
    currency: {
      name: rawJson.currency.name,
      code: rawJson.currency.code,
      symbol: rawJson.currency.symbol,
      rate: rawJson.currency.rate,
    },
    advise: rawJson.advise.UA
      ? rawJson.advise.UA.advise
      : 'No information available.',
    neighbors: rawJson.neighbors,
  };

  return conciseJson;
};

export { travelInfoController };
