import React from "react";
import "./nft_talk.css";
import Button from "../../form/Button/index";

const NftTalk = () => {
  return (
    <section className="bg-purple nft-talk">
      <div className="container item-flex items-center justify-center img-grid-items-2 ">
        <div className="textwrap">
          <h1 className="red-rose-font font-large text-light">Metabnb NFTs</h1>
          <p className="red-rose-font font-small space-up-down text-light">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <Button
            text="Learn more"
            classes="letter-spacing-1 btn btn-rounded"
          />
        </div>
        <div className="img-wrap width-large-4">
          <img src="assets/img/nft_talk.svg" alt="nft talk" />
        </div>
      </div>
    </section>
  );
};

export default NftTalk;
