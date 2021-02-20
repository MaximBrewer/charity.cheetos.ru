import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ArrowNextIcon, ArrowPrevIcon } from "../Icons";

// components

export default function PartnersSlider(props) {
  const settings = {
    arrows: false,
    infinite: true,
    dots: false,
    speed: 300,
    auto: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const ref = useRef(null);

  return (
    <>
      <div className="relative overflow-hidden px-24">
        <Slider {...settings} ref={ref}>
          {window.App.data.partners.map((item, index) => (
            <div key={index}>
              <div className="xl:flex flex-col justify-between items-center">
                <div className="w-full">
                  <div className="w-1/2 m-auto mb-4">
                    <div
                      className="relative bg-center bg-no-repeat bg-contain w-full pb-100%"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                  </div>
                  <p className="text-center mb-4 xl:h-12 overflow-hidden">{item.excerpt}</p>
                </div>
                <div className="mb-6 flex items-center justify-center">
                  <Link
                    to="/partners"
                    className="w-48 text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <a
          className="flex text-yellow-900 cursor-pointer items-center justify-center absolute w-12 h-12 top-1/3 left-0 -mt-6"
          onClick={() => {
            ref.current.slickPrev();
          }}
        >
          <ArrowPrevIcon className="w-8 h-12 stroke-current" />
        </a>
        <a
          className="flex text-yellow-900 cursor-pointer items-center justify-center absolute w-12 h-12 top-1/3 right-0 -mt-6"
          onClick={() => {
            ref.current.slickNext();
          }}
        >
          <ArrowNextIcon className="w-8 h-12 stroke-current" />
        </a>
      </div>
    </>
  );
}
