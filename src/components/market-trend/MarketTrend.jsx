import React, { useState, useEffect } from "react";
import HeaderStore from "../../stores/HeaderStore";
import ArrowRight from "../../img/arrow-right.png";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import ChartState from "../../img/chart-state.png";
import "../market-trend/market-trend.css";

const MarketTrend = () => {
  const [data, setData] = useState([]);
  const { getCoinTrending } = HeaderStore();
  useEffect(() => {
    getCoinTrending().then((data) => setData(data));
  }, []);

  return (
    <div className="market__trend__container">
      <h2 className="title__market__trend">Market Trend</h2>
      <div className="market__trend">
        {data &&
          data.map((item) => (
            <div className="crypto__card" key={item.id}>
              <div className="item__market">
                <img className="logo__crypto" src={item.image} alt="Bitcoin" />
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
                  {item.price_change_percentage_24h < 0 ? (
                    <span className="red">
                      <FiArrowDown className="icon" />
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="green">
                      <FiArrowUpRight className="icon" />
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </span>
                  )}
                </div>
                <img
                  className="chart__state"
                  src={ChartState}
                  alt="Chart State"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default MarketTrend;
