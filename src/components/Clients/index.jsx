import React from "react";
import "./clients.css";
const Clients = () => {
  return (
    <section className="clients bg-purple">
      <div className="container clients-wrap">
        <div className="clients-logo">
          <img src="assets/img/mbtoken.svg" alt="" className="client" />
        </div>
        <div className="clients-logo">
          <img src="assets/img/metamask.svg" alt="" className="client" />
        </div>
        <div className="clients-logo">
          <img src="assets/img/opensea.svg" alt="" className="client" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
