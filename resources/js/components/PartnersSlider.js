import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { ArrowNextIcon, ArrowPrevIcon } from "../Icons";

// components

export default function PartnersSlider(props) {
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
      <div className="relative overflow-hidden px-10">
        <Slider {...settings} ref={ref}>
          {window.App.data.partners.map((item, index) => (
            <div key={index}>
              <div className="w-1/2 m-auto mb-4">
                <div
                  className="relative bg-center bg-no-repeat bg-contain w-full pb-100%"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
              </div>
              <p className="text-center mb-4">{item.excerpt}</p>
            </div>
          ))}
        </Slider>
        <a
          className="flex text-yellow-900 cursor-pointer items-center justify-center absolute w-12 h-12 top-1/3 left-0 -mt-6"
          onClick={() => {
            ref.current.slickPrev();
          }}
        >
          <ArrowPrevIcon className="w-4 h-6 stroke-current" />
        </a>
        <a
          className="flex text-yellow-900 cursor-pointer items-center justify-center absolute w-12 h-12 top-1/3 right-0 -mt-6"
          onClick={() => {
            ref.current.slickNext();
          }}
        >
          <ArrowNextIcon className="w-4 h-6 stroke-current" />
        </a>
      </div>
    </>
  );
}
