import React from "react";
import Clients from "../../components/Clients";
import Footer from "../../components/Footer";
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
      <Footer />
    </>
  );
};

export default Home;
