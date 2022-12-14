import React from "react";
import Clients from "../../components/Clients";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import Inspiration from "../../components/Inpsiration";
import NftTalk from "../../components/NftTalk";

const Home = () => {
  return (
    <>
      <Header />
      <Clients />
      <Inspiration />
      <NftTalk />
      <Footer />
    </>
  );
};

export default Home;
