import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ArrowNextIcon, ArrowPrevIcon } from "../Icons";

// components

export default function NewsSlider() {
  const settings = {
    arrows: false,
    infinite: true,
    dots: false,
    speed: 300,
    auto: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const ref = useRef(null);

  return (
    <>
      <div className="relative overflow-hidden">
        <Slider {...settings} ref={ref}>
          {window.App.data.news.map((item, index) => (
            <div key={index}>
              <div className="xl:flex xl:px-32 xl:text-black items-center justify-between">
                <div className="xl:w-1/2 xl:mr-16 xl:mb-8">
                  <div
                    className="border-7 border-yellow-900 rounded-3xl relative bg-darkOrange-900 bg-center bg-no-repeat bg-cover w-full pb-100% -mb-2"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                </div>
                <div className="xl:w-1/2">
                  <h4 className="hidden xl:block text-2xl font-bold mb-8">
                    {item.title}
                  </h4>
                  <p className="text-xl my-4 xl:mb-16 xl:mt-8">{item.excerpt}</p>
                  <div className="mb-6 flex items-center justify-center hidden xl:block ">
                    <Link
                      to="/news"
                      className="text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-3 px-12 text-white font-bold text-center focus:outline-none"
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <a
          className="flex text-white cursor-pointer items-center justify-center absolute bg-yellow-900 rounded-full w-12 h-12 top-1/2 left-0 -mt-16"
          onClick={() => {
            ref.current.slickPrev();
          }}
        >
          <ArrowPrevIcon className="w-4 h-6 stroke-current" />
        </a>
        <a
          className="flex text-white cursor-pointer items-center justify-center absolute bg-yellow-900 rounded-full w-12 h-12 top-1/2 right-0 -mt-16"
          onClick={() => {
            ref.current.slickNext();
          }}
        >
          <ArrowNextIcon className="w-4 h-6 stroke-current" />
        </a>
      </div>
      <div className="mb-6 flex items-center justify-center xl:hidden">
        <Link
          to="/news"
          className="w-48 text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none"
        >
          Подробнее
        </Link>
      </div>
    </>
  );
}
