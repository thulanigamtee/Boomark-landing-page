import React from "react";
import "./Download.scss";
import logoChrome from "../../assets/images/logo-chrome.svg";
import logoFirefox from "../../assets/images/logo-firefox.svg";
import logoOpera from "../../assets/images/logo-opera.svg";

const Download = () => {
  return (
    <section className="download">
      <div className="download__header">
        <h2>Download the extension</h2>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="download__main">
        <div className="download__main__chrome">
          <img src={logoChrome} alt="logo-chrome" />
          <h3>Add to Chrome</h3>
          <p>Minimum version 62</p>
          <button>Add & Install extension</button>
        </div>
        <div className="download__main__firefox">
          <img src={logoFirefox} alt="logo-firefox" />
          <h3>Add to Firefox</h3>
          <p>Minimum version 55</p>
          <button>Add & Install extension</button>
        </div>
        <div className="download__main__opera">
          <img src={logoOpera} alt="logo-opera" />
          <h3>Add to Opera</h3>
          <p>Minimum version 46</p>
          <button>Add & Install extension</button>
        </div>
      </div>
    </section>
  );
};

export default Download;
