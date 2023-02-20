import React, { useState, useEffect } from "react";
import illustration1 from "../../assets/images/illustration-features-tab-1.svg";
import illustration2 from "../../assets/images/illustration-features-tab-2.svg";
import illustration3 from "../../assets/images/illustration-features-tab-3.svg";
import "./Features.scss";
// import { motion } from "framer-motion";
import "animate.css";

const Features = () => {
  const [infoIndex, setInfoIndex] = useState(0);

  const image = [illustration1, illustration2, illustration3];

  const heading = [
    "Bookmark in one click",
    "Intelligent search",
    "Share your bookmarks",
  ];

  const description = [
    "  Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    "  Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    "  Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  ];

  useEffect(() => {
    let feature = document.querySelectorAll(
      ".features__main__navigation > button"
    );
    feature[0].classList.add("active");
  }, []);

  const switchTabs = (index) => {
    setInfoIndex(index);
    let feature = document.querySelectorAll(
      ".features__main__navigation > button"
    );
    for (let i = 0; i < feature.length; i++) {
      feature[i].classList.remove("active");
    }
    feature[index].classList.add("active");
    let info = document.querySelectorAll(
      ".features__main__info__image, .features__main__info__details"
    );
    for (let i = 0; i < info.length; i++) {
      info[i].classList.add("active");
    }
    setTimeout(() => {
      for (let i = 0; i < info.length; i++) {
        info[i].classList.remove("active");
      }
    }, 1000);
  };

  return (
    <section className="features">
      <div className="features__header">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy to access your favourite
          websites. Your bookmarks sync betweeb your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="features__main">
        <div className="features__main__navigation">
          <button onClick={() => switchTabs(0)}>simple bookmarking</button>
          <button onClick={() => switchTabs(1)}>speedy searching</button>
          <button onClick={() => switchTabs(2)}>easy sharing</button>
        </div>
        <div className="features__main__info">
          <img
            className="features__main__info__image"
            src={image[infoIndex]}
            alt="info-image"
          />
          <div className="features__main__info__details">
            <h2>{heading[infoIndex]}</h2>
            <p>{description[infoIndex]}</p>
            <button>more info</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
