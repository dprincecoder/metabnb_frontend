import React from "react";
import Button from "../../form/Button";
import SearchInput from "../../form/SearchInput";
import Hero from "../Hero";
import "../Navbar/navbar.css";
import "../Hero/hero.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 0,
};

export const Header = () => {
  const [showNav, setShowNav] = React.useState(false);
  const [walletOpen, setWalletOpen] = React.useState(false);
  const handleWalletOpen = () => setWalletOpen(true);
  const handleWalletClose = () => setWalletOpen(false);

  const callbackFn = () => {
    setShowNav(!showNav);
    setWalletOpen(!walletOpen);
  };

  return (
    <>
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
            onClick={callbackFn}
            classes="btn nav-with-btn btn-purple btn-rounded"
          />
        </div>
        <Button
          onClick={() => setWalletOpen(!walletOpen)}
          text="Connect Wallet"
          classes="btn nav-main-btn btn-purple btn-rounded"
        />
        <div className="toggle-nav" onClick={() => setShowNav(!showNav)}>
          <img src="assets/img/hamburger.png" alt="" className="" />
        </div>
      </nav>
      {/* herro section  */}
      <div className="">
        <Modal
          open={walletOpen}
          onClose={handleWalletClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className='mobile-res'>
            <div className="modal-head item-flex justify-between border-bottom width-full">
              <h3 className="red-rose-font space-left">Connect Wallet</h3>
              <p
                onClick={handleWalletClose}
                className="space-left-right cursor-point"
              >
                X
              </p>
            </div>
            <div className="modal-body space-around">
              <p className="red-rose-font text-light-dark">
                choose your preffered wallet:
              </p>
              <div className="wallets ">
                <div className="wallet space-bottom item-flex justify-between items-center">
                  <div className="item-flex items-center">
                    <img
                      src="assets/img/image-66.svg"
                      alt=""
                      className="wallet-logo space-right"
                    />
                    <p className="red-rose-font">Metamask</p>
                  </div>
                  <div className="right-arrow">
                    <img src="assets/img/right_arrow.svg" alt="" />
                  </div>
                </div>
                <div className="wallet item-flex justify-between items-center">
                  <div className="item-flex items-center">
                    <img
                      src="assets/img/wallet_con.svg"
                      alt=""
                      className="wallet-logo space-right"
                    />
                    <p className="red-rose-font">WalletConnect</p>
                  </div>
                  <div className="right-arrow">
                    <img src="assets/img/right_arrow.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <div className="container hero container-grid">
          <div className="hero-text-content">
            <h1 className="hero-main-text red-rose-font">
              Rent a <strong className="color-purple">Place</strong> away from{" "}
              <strong className="color-purple">Home</strong> in the{" "}
              <strong className="color-purple">Metaverse</strong>
            </h1>
            <p className="red-rose-font space-round">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <SearchInput />
          </div>
          <div className="hero-image-content">
            <img
              src="assets/img/hero-banner.svg"
              alt="hero banner"
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
