import React from "react";
import Clients from "../../components/Clients";
import Hero from "../../components/Hero";
import Inspiration from "../../components/Inpsiration";
import Navbar from "../../components/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Inspiration />
    </>
  );
};

export default index;
