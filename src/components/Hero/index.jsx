import React from "react";
import SearchInput from "../../form/SearchInput";
import "./hero.css";

const Hero = () => {
  return (
    <div className="container hero container-grid">
      <div className="hero-text-content">
        <h1 className="hero-main-text red-rose-font">
          Rent a <strong className="color-purple">Place</strong> away from{" "}
          <strong className="color-purple">Home</strong> in the{" "}
          <strong className="color-purple">Metaverse</strong>
        </h1>
        <p className="red-rose-font space-round">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <SearchInput />
      </div>
      <div className="hero-image-content">
        <img src="assets/img/hero-banner.svg" alt="hero banner" className="" />
      </div>
    </div>
  );
};

export default Hero;
