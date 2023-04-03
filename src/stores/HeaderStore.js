const HeaderStore = () => {
  const _coinTrending =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20binancecoin%2C%20tether&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1";

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

  const getAllCoinTrending = () => {
    return getResource(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false"
    );
  };

  return { getCoinTrending, getAllCoinTrending };
};

export default HeaderStore;
