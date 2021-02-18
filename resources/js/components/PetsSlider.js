import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ArrowNextIcon, ArrowPrevIcon } from "../Icons";

// components

export default function PetsSlider({ pets }) {
  const settings = {
    arrows: false,
    infinite: true,
    dots: false,
    speed: 300,
    auto: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (index) => {
      setTitleShow(false);
    },
    afterChange: (index) => {
      setTitle(pets[index].name);
      setTitleShow(true);
      setLink("/pet/" + pets[index].id);
    },
  };

  const [title, setTitle] = useState(pets[0].name);
  const [titleShow, setTitleShow] = useState(true);
  const [link, setLink] = useState("/pet/" + pets[0].id);

  const ref = useRef(null);

  useEffect(() => {
    setTitle(pets[0].name);
    setLink("/pet/" + pets[0].id);
  }, pets);

  return (
    <div className="select-none">
      <div className="border-7 border-yellow-900 rounded-3xl relative overflow-hidden">
        <Slider {...settings} ref={ref}>
          {pets.map((item, index) => (
            <div key={index}>
              <div
                className="relative bg-center bg-no-repeat bg-cover w-full pb-100%"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
          ))}
        </Slider>
        <a
          className="flex text-white cursor-pointer items-center justify-center absolute bg-yellow-900 rounded-full w-12 h-12 top-1/2 left-0 -mt-6"
          onClick={() => {
            ref.current.slickPrev();
          }}
        >
          <ArrowPrevIcon className="w-4 h-6 stroke-current" />
        </a>
        <a
          className="flex text-white cursor-pointer items-center justify-center absolute bg-yellow-900 rounded-full w-12 h-12 top-1/2 right-0 -mt-6"
          onClick={() => {
            ref.current.slickNext();
          }}
        >
          <ArrowNextIcon className="w-4 h-6 stroke-current" />
        </a>
      </div>
      <p
        className={`text-xl my-4 text-white font-bold text-center transition-opacity ${
          titleShow ? `opacity-100` : `opacity-0`
        }`}
      >
        {title}
      </p>
      <div className="mb-6 flex items-center justify-center">
        <Link
          to={link}
          className="w-64 text-xl bg-white text-darkOrange-900 hover:text-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-2 font-bold text-center focus:outline-none"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}
