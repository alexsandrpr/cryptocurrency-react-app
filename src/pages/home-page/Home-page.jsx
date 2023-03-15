import React from "react";
import Header from "../../components/header/Header";
import MarketTrend from "../../components/market-trend/MarketTrend";
import AmazingFaetures from "../../components/amazing-faetures/AmazingFaetures";
import "./home-page.css";
function HomePage() {
  return (
    <div className="container">
      <Header />
      <MarketTrend />
      <AmazingFaetures />
    </div>
  );
}

export default HomePage;
