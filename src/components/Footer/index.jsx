import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container item-flex flex-wrap justify-between items-center">
        <div className="logo_socials">
          <div className="logo">
            <img
              src="assets/img/logo_light.svg"
              alt="light logo"
              className="logo-light"
            />
          </div>
          <ul className="socials item-flex space-up-down">
            <li>
              <a href="https://zuri.com/fb">
                <img src="assets/img/fb_icon.svg" alt="" className="fb-icon" />
              </a>
            </li>
            <li>
              <a href="https://zuri.com/fb">
                <img
                  src="assets/img/ig_icon.svg"
                  alt=""
                  className="insta-icon"
                />
              </a>
            </li>
            <li>
              <a href="https://zuri.com/fb">
                <img
                  src="assets/img/twitter_icon.svg"
                  alt=""
                  className="twitter-icon"
                />
              </a>
            </li>
          </ul>
          <div className="copywrite red-rose-font">
            <p>&copy; 2022 Metabnb</p>
          </div>
        </div>
        <div className="community">
          <h3>Community</h3>
          <ul>
            <li>
              {" "}
              <a className="text-light red-rose-font" href="/">
                NFT
              </a>
            </li>
            <li>
              {" "}
              <a className="text-light red-rose-font" href="/">
                Tokens
              </a>
            </li>
            <li>
              {" "}
              <a className="text-light red-rose-font" href="/">
                Landlords
              </a>
            </li>
            <li>
              {" "}
              <a className="text-light red-rose-font" href="/">
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div className="places">
          <h3>Places</h3>
          <ul>
            <li>
              {" "}
              <a className="text-light red-rose-font" href="/">
                Castle
              </a>
            </li>
            <li>
              {" "}
              <a className="text-light red-rose-font" href="/">
                Farms
              </a>
            </li>
            <li>
              {" "}
              <a className="text-light red-rose-font" href="/">
                Beach
              </a>
            </li>
            <li>
              {" "}
              <a className="text-light red-rose-font" href="/">
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div className="about_us">
          <h3>About Us</h3>
          <ul>
            <li>
              {" "}
              <a className="text-light red-rose-font" href="/map">
                Road map
              </a>
            </li>
            <li>
              {" "}
              <a className="text-light red-rose-font" href="/creators">
                Creators
              </a>
            </li>
            <li>
              {" "}
              <a className="text-light red-rose-font" href="/carear">
                Carear
              </a>
            </li>
            <li>
              {" "}
              <a className="text-light red-rose-font" href="/contact">
                Contactus
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
