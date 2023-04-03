import React from "react";
import Header from "../../components/header/Header";
import MarketTrend from "../../components/market-trend/MarketTrend";
import AmazingFaetures from "../../components/amazing-faetures/AmazingFaetures";
import MarketUpdate from "../../components/market-update/MarketUpdate";
import HowToGetStarted from "../../components/how-to-get-started/HowToGetStarted";
import "./home-page.css";

function HomePage() {
  return (
    <div className="home__container">
      <Header />
      <MarketTrend />
      <AmazingFaetures />
      <MarketUpdate />
      <HowToGetStarted />
    </div>
  );
}

export default HomePage;
