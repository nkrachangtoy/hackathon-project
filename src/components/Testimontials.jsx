import React from "react";

import ChartImage from "../assets/Images/bar-chart.png";

function Testimontials() {
  return (
    <section className="content">
      <span className="content__title">
        Let Us Guide You Towards Moving Your Business To The Virtual World
      </span>
      <p className="content__text--para">
        The augmented and virtual reality (AR/VR) market amounted to a forecast
        of 18.8 billion U.S. dollars in 2020 and is expected to expand
        drastically in the coming years. Consumer spending made up the single
        largest portion of the AR/VR market worldwide, followed by the discrete
        manufacturing segment, both of which accounted for billions of U.S.
        dollars in sales.
      </p>
      <img
        className="content__chart-img"
        src={ChartImage}
        alt="VR Devices Sale"
      />
      <span className="content__text--subheader">
        SHIPMENTS IN MILLION UNITS
      </span>
      <div className="content__sign-up-wrapper">
        <p className="content__text--sign-up">
          <span className="content__text--bold">Start</span> your free trial
          today or <span className="content__text--bold">Sign up</span> for more
          info!
        </p>
        <button className="content__btn--start" type="submit">
          START
        </button>
        <button className="content__btn--sign-up" type="submit">
          SIGN UP
        </button>
      </div>
    </section>
  );
}

export default Testimontials;
