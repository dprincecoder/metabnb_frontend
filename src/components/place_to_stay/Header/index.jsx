import React from "react";
import "../../Navbar/navbar.css";
import "../../Hero/hero.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "../../../form/Button";

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
  const handleWalletClose = () => setWalletOpen(false);

  const callbackFn = () => {
    setShowNav(!showNav);
    setWalletOpen(!walletOpen);
  };

  return (
    <>
      <nav
        className={`nav width-full bg-light sticky ${
          showNav ? "open-menu" : ""
        }`}
      >
        <div className="nav-flex nav-items-center-between container">
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
                <a href="/place_to_stay" className="nav-link">
                  PLace To Stay
                </a>
              </li>
              <li className="nav-list-item">
                <a href="nft" className="nav-link">
                  NFTs
                </a>
              </li>
              <li className="nav-list-item">
                <a href="community" className="nav-link">
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
          <Box sx={style} className="mobile-res">
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
      </div>
    </>
  );
};
