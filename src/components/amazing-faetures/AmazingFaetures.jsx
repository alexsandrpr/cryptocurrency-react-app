import React from "react";
import { FiArrowRight } from "react-icons/fi";
import FeatureImage1 from "../../img/feature-image-1.png";
import FeatureImage2 from "../../img/feature-image-2.png";
import FeatureImage3 from "../../img/feature-image-3.png";
import FeatureImage4 from "../../img/feature-image-4.png";
import "../amazing-faetures/amazing-faetures.css";

const AmazingFaetures = () => {
  return (
    <div className="amazing__faetures-container">
      <h2 className="title__cryptocap">CryptoCap Amazing Faetures</h2>
      <p className="description__cryptocap">
        Explore sensational features to prepare your best investment in
        cryptocurrency
      </p>
      <div className="card__cryptocap">
        <div className="card__item__cryptocap">
          <img src={FeatureImage1} alt="" className="img__cryptocap" />
          <h3 className="title__item__cryptocap">Manage Portfolio</h3>
          <p className="description__item__cryptocap">
            Buy and sell popular digital currencies, keep track of them in the
            one place.
          </p>
          <a href="#" className="link__item__cryptocap">
            See Explained <FiArrowRight />
          </a>
        </div>
        <div className="card__item__cryptocap">
          <img src={FeatureImage2} alt="" className="img__cryptocap" />
          <h3 className="title__item__cryptocap">Protected Securely</h3>
          <p className="description__item__cryptocap">
            All cash balances are covered by FDIC insurance, up to a maximum of
            $250,000.
          </p>
          <a href="#" className="link__item__cryptocap">
            See Explained <FiArrowRight />
          </a>
        </div>
        <div className="card__item__cryptocap">
          <img src={FeatureImage3} alt="" className="img__cryptocap" />
          <h3 className="title__item__cryptocap">Cryptocurrency Variety</h3>
          <p className="description__item__cryptocap">
            Supports a variety of the most popular digital currencies and always
            uptodate.
          </p>
          <a href="#" className="link__item__cryptocap">
            See Explained <FiArrowRight />
          </a>
        </div>
        <div className="card__item__cryptocap">
          <img src={FeatureImage4} alt="" className="img__cryptocap" />
          <h3 className="title__item__cryptocap">Learn Best Practice</h3>
          <p className="description__item__cryptocap">
            Easy to know how to cryptocurrency works and friendly to newbie.
          </p>
          <a href="#" className="link__item__cryptocap">
            See Explained <FiArrowRight />
          </a>
        </div>
      </div>
      <div className="coin__information">
        <div>
          <h3 className="title__information">New In Cryptocurrency?</h3>
          <p className="description__information">
            We'll tell you what cryptocurrencies are, how they work and why
            <br /> you should own one right now. So let's do it.
          </p>
        </div>
        <button className="button__information">Learn & Explore Now</button>
      </div>
      <div className="amazing__faetures__gradient-1"></div>
      <div className="amazing__faetures__gradient-2"></div>
    </div>
  );
};
export default AmazingFaetures;
