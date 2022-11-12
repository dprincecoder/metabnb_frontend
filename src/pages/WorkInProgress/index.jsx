import React from "react";
import "./progress.css";

const WorkInProgress = () => {
  return (
    <div className="">
      <h1 className=" animate-from-left red-rose-font color-purple">
        Work In Progress...
      </h1>
      <div className="item-flex container flex-wrap justify-between imgs-wrap">
        <div className="img-wrap scale">
          <img src="assets/img/man-lap.png" alt="" className="man-lap" />
        </div>
        <div className="img-wrap-2 item-flex items-center">
          <div className="gear-2 gear-rotate">
            <img src="assets/img/gear_icon.png" alt="gear" />
          </div>
          <img
            src="assets/img/inprogress1.svg"
            alt=""
            className="inprogress1"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkInProgress;
