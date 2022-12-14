import React from "react";
import ImgGallery from "../ImgGallery";
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
    rating: "assets/img/star-lite.svg",
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
      <ImgGallery data={data} />
    </section>
  );
};

export default Inspiration;
