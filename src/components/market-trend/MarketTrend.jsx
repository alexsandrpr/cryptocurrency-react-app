import React, { useState, useEffect } from "react";
import HeaderStore from "../../stores/HeaderStore";
import Bitcoin from "../../img/bitcoin.png";
import ArrowRight from "../../img/arrow-right.png";
import ChartState from "../../img/chart-state.png";
import "../market-trend/market-trend.css";

const MarketTrend = () => {
  const [data, setData] = useState({});
  const { getCoinTrending } = HeaderStore();
  useEffect(() => {
    getCoinTrending().then((data) => setData(data));
  }, []);

  return (
    <div className="market__trend__container">
      <h2 className="title__market__trend">Market Trend</h2>
      <div className="market__trend">
        <div className="crypto__card">
          <div className="item__market">
            <img className="logo__crypto" src={Bitcoin} alt="Bitcoin" />
            <span className="title__crypto">{data.symbol}</span>
            <span className="name__crypto">{data.name}</span>
            <div className="border__arrow">
              <img src={ArrowRight} alt="Arrow" />
            </div>
          </div>
          <hr className="hr__card" />
          <div className="crypto__value">
            <div className="coin__value">
              {data.market_data && data.market_data.current_price && (
                <h3>${data.market_data.current_price.usd}</h3>
              )}
              <p>12,07%</p>
            </div>
            <img className="chart__state" src={ChartState} alt="Chart State" />
          </div>
        </div>
        <div className="crypto__card">
          <div className="item__market">
            <img className="logo__crypto" src={Bitcoin} alt="Bitcoin" />
            <span className="title__crypto">BTC</span>
            <span className="name__crypto">Bitcoin</span>
            <div className="border__arrow">
              <img src={ArrowRight} alt="Arrow" />
            </div>
          </div>
          <hr className="hr__card" />
          <div className="crypto__value">
            <div className="coin__value">
              <h3 className="">$52000</h3>
              <p>12,07%</p>
            </div>
            <img className="chart__state" src={ChartState} alt="Chart State" />
          </div>
        </div>
        <div className="crypto__card">
          <div className="item__market">
            <img className="logo__crypto" src={Bitcoin} alt="Bitcoin" />
            <span className="title__crypto">BTC</span>
            <span className="name__crypto">Bitcoin</span>
            <div className="border__arrow">
              <img src={ArrowRight} alt="Arrow" />
            </div>
          </div>
          <hr className="hr__card" />
          <div className="crypto__value">
            <div className="coin__value">
              <h3 className="">$52000</h3>
              <p>12,07%</p>
            </div>
            <img className="chart__state" src={ChartState} alt="Chart State" />
          </div>
        </div>
        <div className="crypto__card">
          <div className="item__market">
            <img className="logo__crypto" src={Bitcoin} alt="Bitcoin" />
            <span className="title__crypto">BTC</span>
            <span className="name__crypto">Bitcoin</span>
            <div className="border__arrow">
              <img src={ArrowRight} alt="Arrow" />
            </div>
          </div>
          <hr className="hr__card" />
          <div className="crypto__value">
            <div className="coin__value">
              <h3 className="">$52000</h3>
              <p>12,07%</p>
            </div>
            <img className="chart__state" src={ChartState} alt="Chart State" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MarketTrend;
