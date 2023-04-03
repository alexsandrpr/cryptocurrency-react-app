import React from "react";
import HowToGetStartedIcon1 from "../../img/template-get-started-icon-1.png";
import HowToGetStartedIcon2 from "../../img/template-get-started-icon-2.png";
import HowToGetStartedIcon3 from "../../img/template-get-started-icon-3.png";
import "../how-to-get-started/how-to-get-started.css";
const HowToGetStarted = () => {
  return (
    <div className="how__to__get__started__container">
      <div className="how__to__get__started">
        <h2 className="how__to__get__started__title">How To Get Started</h2>
        <p className="how__to__get__started__description">
          Simple and easy way to start your investment
          <br /> in cryptocurrency
        </p>
        <button className="how__to__get__started__btn">Get Started</button>
      </div>
      <div className="how__to__get__started__card">
        <div className="how__to__get__started__item">
          <img
            src={HowToGetStartedIcon1}
            className="how__to__get__started__image"
            alt=""
          />
          <div className="how__to__get__started__item__container">
            <h4 className="how__to__get__started__item__title">
              Create New Account
            </h4>
            <p className="how__to__get__started__item__description">
              Your account and personal identity are
              <br /> guaranteed safe.
            </p>
          </div>
        </div>
        <div className="how__to__get__started__item">
          <img
            src={HowToGetStartedIcon2}
            className="how__to__get__started__image"
            alt=""
          />
          <div className="how__to__get__started__item__container">
            <h4 className="how__to__get__started__item__title">
              Connect Bank Account
            </h4>
            <p className="how__to__get__started__item__description">
              Connect the bank account to start transactions.
            </p>
          </div>
        </div>
        <div className="how__to__get__started__item">
          <img
            src={HowToGetStartedIcon3}
            className="how__to__get__started__image"
            alt=""
          />
          <div className="how__to__get__started__item__container">
            <h4 className="how__to__get__started__item__title">
              Start Build Portfolio
            </h4>
            <p className="how__to__get__started__item__description">
              Buy and sell popular currencies and keep track
              <br /> of them.
            </p>
          </div>
        </div>
      </div>
      <div className="how__to__get__started__gradient"></div>
    </div>
  );
};
export default HowToGetStarted;
