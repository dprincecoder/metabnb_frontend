import React from "react";
import "./gallery.css";

const ImgGallery = ({ data }) => {
 
  return (
    <div className="data-img img-grid-items-4">
      {data.map((item) => (
        <div className="data-img-grid-item" key={item.id}>
          <img
            src={item.img}
            alt={item.name}
            className="inspiration-data-img"
          />
          <div
            className="fav-heart fav-active"
          >
            {/* <img src={item.fav} alt="favorite" className="fav_heart-img" /> */}
          </div>
          <div className="data-img-grid-item-desc width-full space-up-down text-dark">
            <div className="item-flex items-center justify-between">
              <h3 className="inspiration-data-title red-rose-font">
                {item.name}
              </h3>
              <p className="inspiration-data-desc">{item.desc}</p>
            </div>
            <div className="inspiration-duration-item item-flex items-center justify-between">
              <p>{item.distance}</p>
              <p>{item.duration}</p>
            </div>
            <div className="inspiration-data-img-rating">
              <img src={item.rating} alt="rating" className="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImgGallery;
