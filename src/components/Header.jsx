import React from "react";
import { NavLink, Link } from "react-router-dom";

// ICONS //
import logo from "../assets/Logo/delta-logo.svg";
import facebook from "../assets/Icons/facebook-icon.svg";
import twitter from "../assets/Icons/twitter-icon.svg";
import instagram from "../assets/Icons/instagram-icon.svg";

function Header() {
  return (
    <header>
      <div className="hero-banner">
        <div className="site-header">
          <NavLink to="/" className="site-header__navlink">
            <div className="site-header__logo-wrapper">
              <img src={logo} alt="CHANGE ROOM" />
              <p className="site-header__logo">DELTA ROOM</p>
            </div>
          </NavLink>
          <nav className="nav">
            <div className="nav__social-media-wrapper">
              <a href="www.instagram.com">
                <img src={instagram} className="nav__icons" alt="Instagram" />
              </a>
              <a href="www.twitter.com">
                <img src={twitter} className="nav__icons" alt="Instagram" />
              </a>
              <a href="www.facebook.com">
                <img src={facebook} className="nav__icons" alt="Instagram" />
              </a>
            </div>
            <div className="nav__list-wrapper">
              <Link className="nav__list">HOME</Link>
              <Link className="nav__list">VR SHOPPING</Link>
              <Link className="nav__list">EXPERIENCE</Link>
              <Link className="nav__list">TESTIMONTIALS</Link>
              <Link className="nav__list">CONTACT</Link>
            </div>
          </nav>
        </div>

        <div className="hero-banner__wrapper">
          <span className="hero-banner__title">
            Sell More With Virtual Reality Product Display
          </span>
          <p className="hero-banner__text">
            Delta Room is a cloud-basedVR presentation platform that enables
            business owners to quickly produce photorealistic, interactive,
            multimedia experiences for their audiences. Requiring no coding or
            programming, Delta Room lets users get to market faster than any
            other platform with features such as instant sharing.
          </p>
          <button className="hero-banner__btn--start" type="submit">
            START
          </button>
          <button className="hero-banner__btn--sign-up" type="submit">
            SIGN UP
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
