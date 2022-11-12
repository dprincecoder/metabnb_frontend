import React from "react";
import "./prio.css";
const Priorities = () => {
  return (
    <section className="container flex-wrap item-flex justify-between">
      <ul className="priorites item-flex flex-wrap items-center red-rose-font">
        <li className="priorites__item"> Restaurant </li>
        <li className="priorites__item"> Cottage </li>
        <li className="priorites__item"> Castle</li>
        <li className="priorites__item"> Fantastic City</li>
        <li className="priorites__item"> Beach</li>
        <li className="priorites__item"> Cabins</li>
        <li className="priorites__item"> Off-grid</li>
        <li className="priorites__item"> Farm</li>
      </ul>
      <div className="priorities__select item-flex items-center">
        <p className="red-rose-font">Location</p>
        <div className="setting__icon">
          <img src="assets/img/setting.svg" alt="" className="select-img" />
        </div>
      </div>
    </section>
  );
};

export default Priorities;
