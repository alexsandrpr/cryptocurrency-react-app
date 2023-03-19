import React from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import "../price-change/price-change.css";

const PriceChange = ({ priceChange }) => {
  return (
    <>
      {priceChange < 0 ? (
        <span className="red">
          <FiArrowDown className="icon" />
          {priceChange.toFixed(2)}%
        </span>
      ) : (
        <span className="green">
          <FiArrowUpRight className="icon" />
          {priceChange.toFixed(2)}%
        </span>
      )}
    </>
  );
};

export default PriceChange;
