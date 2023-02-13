import React from "react";
import illustrationHero from "../../assets/images/illustration-hero.svg";
import "./Intro.scss";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__hero">
        <img src={illustrationHero} alt="illustration-hero" />
      </div>
      <div className="intro__info">
        <h1>a simple bookmark manager</h1>
        <p>
          a clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="intro__info__btns">
          <button className="intro__info__btns__chrome">
            Get it on Chrome
          </button>
          <button className="intro__info__btns__firefox">
            Get it on Firefox
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
