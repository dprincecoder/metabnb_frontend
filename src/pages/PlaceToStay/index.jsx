import React from "react";
import PlaceToStayImg from "../../components/PlaceToStayImg";
import { Header } from "../../components/place_to_stay/Header";
import Priorities from "../../components/place_to_stay/Priorities";
import Footer from "../../components/Footer";

const PlaceToStay = () => {
  return (
    <>
      <Header />
      <Priorities />
      <PlaceToStayImg />
      <Footer />
    </>
  );
};

export default PlaceToStay;
