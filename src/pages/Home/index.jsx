import React from "react";
import Clients from "../../components/Clients";
import Hero from "../../components/Hero";
import Inspiration from "../../components/Inpsiration";
import Navbar from "../../components/Navbar";
import NftTalk from "../../components/NftTalk";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Inspiration />
      <NftTalk />
    </>
  );
};

export default Home;
