const HeaderStore = () => {
  const _coinTrending =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false";

  const getResource = async (url) => {
    let res = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  const getCoinTrending = () => {
    return getResource(_coinTrending);
  };
  const getMarketChart = () => {
    const coin = {
      bintoin: "bitcoin",
      ethereum: "ethereum",
      tether: "tether",
      bnb: "bnb",
    };
    return getResource(
      `https://api.coingecko.com/api/v3/coins/${coin.ethereum}/market_chart?vs_currency=usd&days=7`
    );
  };

  return { getCoinTrending, getMarketChart };
};

export default HeaderStore;
