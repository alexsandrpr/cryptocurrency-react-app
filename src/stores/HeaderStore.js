const HeaderStore = () => {
  const _coinTrending = "https://api.coingecko.com/api/v3/coins/bitcoin";

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

  return { getCoinTrending };
};

export default HeaderStore;
