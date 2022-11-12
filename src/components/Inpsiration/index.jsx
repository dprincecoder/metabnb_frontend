import React from "react";
import "./inspiration.css";

//datas
const data = [
  {
    id: 1,
    name: "Desert King",
    img: "assets/img/desert-king1.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 2,
    name: "Desert King",
    img: "assets/img/desert-king2.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.png",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 3,
    name: "Desert King",
    img: "assets/img/desert-king3.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 4,
    name: "Desert King",
    img: "assets/img/desert-king4.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 5,
    name: "Desert King",
    img: "assets/img/desert-king5.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 6,
    name: "Desert King",
    img: "assets/img/desert-king6.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 7,
    name: "Desert King",
    img: "assets/img/desert-king7.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
  {
    id: 8,
    name: "Desert King",
    img: "assets/img/desert-king8.png",
    desc: "1MBT per night",
    distance: "2345km away",
    rating: "assets/img/star-lite.svg",
    duration: "available for 2weeks stay",
    fav: "assets/img/fav_heart.svg",
  },
];

const Inspiration = () => {
  return (
    <section className="container inspiration">
      <h1 className="red-rose-font text-center">
        Inspiration for your next adventure
      </h1>
      <div className="data-img img-grid-items-4">
        {data.map((item) => (
          <div className="data-img-grid-item" key={item.id}>
            <img
              src={item.img}
              alt={item.name}
              className="inspiration-data-img"
            />
            <div className="fav-heart">
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
    </section>
  );
};

export default Inspiration;
