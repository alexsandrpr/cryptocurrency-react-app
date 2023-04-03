import React, { useState, useEffect } from "react";
import HeaderStore from "../../stores/HeaderStore";
import ArrowRight from "../../img/arrow-right.png";
import PriceChange from "../price-change/PriceChange";
import ChartState from "../chart-state/ChartState";
import "../market-trend/market-trend.css";

const MarketTrend = () => {
  const [getData, setData] = useState([]);
  const { getCoinTrending } = HeaderStore();

  useEffect(() => {
    getCoinTrending().then((getData) => setData(getData));
  }, []);

  return (
    <div className="market__trend__container">
      <h2 className="title__market__trend">Market Trend</h2>
      <div className="market__trend">
        {getData
          ? getData.map((item) => (
              <div className="crypto__card" key={item.id}>
                <div className="item__market">
                  <img
                    className="logo__crypto"
                    src={item.image}
                    alt={item.name}
                  />
                  <span className="title__crypto">{item.symbol}</span>
                  <span className="name__crypto" title={item.name}>
                    {item.name}
                  </span>
                  <div className="border__arrow">
                    <img src={ArrowRight} alt="Arrow" />
                  </div>
                </div>
                <hr className="hr__card" />
                <div className="crypto__value">
                  <div className="coin__value">
                    <h3>${item.current_price}</h3>
                    <span>
                      {
                        <PriceChange
                          priceChange={item.price_change_percentage_24h}
                        />
                      }
                    </span>
                  </div>
                  <div className="chart__state">
                    <ChartState cryptoIds={["bitcoin"]} />
                  </div>
                </div>
              </div>
            ))
          : console.log("Loading...")}
      </div>
    </div>
  );
};
export default MarketTrend;
