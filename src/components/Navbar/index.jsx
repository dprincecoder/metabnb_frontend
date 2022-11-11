import React from "react";
import "./navbar.css";
import Button from "../../form/Button";
const Navbar = ({ connectWallet }) => {
  const [showNav, setShowNav] = React.useState(false);
  const [walletOpen, setWalletOpen] = React.useState(false);

  const toggleWallet = (e) => {
    // setWalletOpen(!walletOpen);
    connectWallet("walletOpen");
  };

  return (
    <nav
      className={`nav nav-flex nav-items-center-between container ${
        showNav ? "open-menu" : ""
      }`}
    >
      <div className="nav-logo">
        <img
          src="assets/img/logo.svg"
          alt="brand logo"
          className="width-medium-1"
        />
      </div>
      <div className="nav-flex responsive-navbar">
        <ul className="nav-lists">
          <li className="nav-list-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-list-item">
            <a href="/" className="nav-link">
              PLace Stay
            </a>
          </li>
          <li className="nav-list-item">
            <a href="/nfts" className="nav-link">
              NFTs
            </a>
          </li>
          <li className="nav-list-item">
            <a href="/community" className="nav-link">
              Community
            </a>
          </li>
        </ul>
        <Button
          text="Connect Wallet"
          classes="btn nav-with-btn btn-purple btn-rounded"
        />
      </div>
      <Button
        onClick={toggleWallet}
        text="Connect Wallet"
        classes="btn nav-main-btn btn-purple btn-rounded"
      />
      <div className="toggle-nav" onClick={() => setShowNav(!showNav)}>
        <img src="assets/img/hamburger.png" alt="" className="" />
      </div>
    </nav>
  );
};

export default Navbar;
