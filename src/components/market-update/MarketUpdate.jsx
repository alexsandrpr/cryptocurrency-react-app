import React, { useState, useEffect } from "react";
import HeaderStore from "../../stores/HeaderStore";
import PriceChange from "../price-change/PriceChange";

import "../market-update/market-update.css";

const MarketUpdate = () => {
  const [data, setData] = useState([]);
  const { getAllCoinTrending } = HeaderStore();
  useEffect(() => {
    getAllCoinTrending().then((data) => setData(data));
  }, []);

  return (
    <div className="market__update__container">
      <h2 className="title__market__update">Market Update</h2>
      <div className="table__container">
        <table className="table__market__update">
          <thead>
            <tr className="tr__market__update">
              <th className="table__title__list">no</th>
              <th className="table__title__list">name</th>
              <th className="table__title__list">last price</th>
              <th className="table__title__list">change</th>
              <th className="table__title__list">ath</th>
              <th className="table__title__list">trade</th>
            </tr>
          </thead>
          {data &&
            data.map((item) => (
              <tbody>
                <tr className="tr__market__update">
                  <td className="coin__list">{item.market_cap_rank}</td>
                  <td className="coin__list">
                    <ul className="name__coin">
                      <li>
                        <img
                          className="image__table__coin"
                          src={item.image}
                          alt="Bitcoin"
                        />
                      </li>
                      <li>{item.name}</li>
                      <li>
                        <hr className="vertical__line" />
                      </li>
                      <li className="coin__symbol">{item.symbol}</li>
                    </ul>
                  </td>
                  <td className="coin__list">${item.current_price}</td>
                  <td className="coin__list">
                    {
                      <PriceChange
                        priceChange={item.price_change_percentage_24h}
                      />
                    }
                  </td>
                  <td className="coin__list">${item.ath}</td>
                  <td className="coin__list">
                    <button className="btn__trade">Trade</button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
      <div className="see__all__coins">
        <a href="#" className="link__see__all__coins">
          See All Coins
        </a>
      </div>
    </div>
  );
};
export default MarketUpdate;
