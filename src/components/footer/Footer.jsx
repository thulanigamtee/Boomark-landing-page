import React from "react";
import "./Footer.scss";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import logoBookmarkWhite from "../../assets/images/logo-bookmark-white.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__links">
        <img src={logoBookmarkWhite} alt="logo-bookmark" />
        <a>features</a>
        <a>pricing</a>
        <a>contact</a>
      </div>
      <div className="footer__icons">
        <button>
          <img src={iconFacebook} alt="icon-facebook" />
        </button>
        <button>
          <img src={iconTwitter} alt="icon-twitter" />
        </button>
      </div>
    </section>
  );
};

export default Footer;
