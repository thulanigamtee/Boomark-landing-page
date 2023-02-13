import React from "react";
import logoBookmark from "../../assets/images/logo-bookmark.svg";
import logoBookmarkWhite from "../../assets/images/logo-bookmark-white.svg";
import iconHamburger from "../../assets/images/icon-hamburger.svg";
import iconClose from "../../assets/images/icon-close.svg";
import "./Navbar.scss";

const Navbar = () => {
  const showMobileMenu = () => {
    document.querySelector(".nav__mobile").classList.add("active");
    document.querySelector(".nav__links").classList.add("active");
  };

  const hideMobileMenu = () => {
    document.querySelector(".nav__mobile").classList.remove("active");
    document.querySelector(".nav__links").classList.remove("active");
  };

  return (
    <nav className="nav">
      <img className="nav__logo" src={logoBookmark} alt="logo-bookmark" />
      <div className="nav__mobile">
        <img src={logoBookmarkWhite} alt="logo-bookmark" />
        <button onClick={hideMobileMenu}>
          <img src={iconClose} alt="icon-close" />
        </button>
      </div>
      <div className="nav__links">
        <a>features</a>
        <a>pricing</a>
        <a>contact</a>
        <button>login</button>
      </div>
      <button className="nav__hamburger" onClick={showMobileMenu}>
        <img src={iconHamburger} alt="icon-hamburger" />
      </button>
    </nav>
  );
};

export default Navbar;
