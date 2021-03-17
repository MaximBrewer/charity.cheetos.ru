import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ArrowNextIcon, ArrowPrevIcon } from "../Icons";
import { sendToGmData } from "../Helpers";

// components

export default function PetsSlider({ pets }) {
  const [isMobile, setIsMobile] = useState(window.outerWidth < 1280);

  useLayoutEffect(() => {
    function updateSize() {
      setIsMobile(window.innerWidth < 1280);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const settings = {
    arrows: false,
    infinite: true,
    dots: false,
    centerMode: !isMobile,
    centerPadding: "0",
    speed: 300,
    auto: true,
    slidesToShow: isMobile ? 1 : 3,
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
  }, [pets]);

  return (
    <div className="select-none">
      <div className="p-3 xl:py-0 bg-cover xl:border-0 rounded-3xl xl:rounded-none relative overflow-hidden xl:px-12 bg-frame xl:bg-none">
        <Slider {...settings} ref={ref}>
          {pets.map((item, index) => (
            <div key={index}>
              <div className="w-full xl:px-6">
                <div className="rounded-3xl bg-frame bg-cover xl:p-3">
                  <div
                    className="overflow-hidden relative bg-center bg-no-repeat bg-cover pb-100% rounded-2xl overflow-hidden"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                </div>
                <div className="hidden xl:block">
                  <p
                    className={`text-xl my-4 text-white font-bold text-center`}
                  >
                    {item.name}
                  </p>
                  <div className="mb-6 flex items-center justify-center">
                    <Link
                      to={`/pet/${item.id}`}
                      className="w-64 text-xl bg-white text-darkOrange-900 hover:text-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-2 font-bold text-center focus:outline-none"
                      onClick={() => {
                        sendToGmData("choosePet");
                      }}
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
          className="flex text-white cursor-pointer items-center justify-center absolute bg-yellow-900 rounded-full w-12 h-12 top-1/2 xl:top-1/3 left-3 -mt-6 xl:-mt-4"
          onClick={() => {
            ref.current.slickPrev();
          }}
        >
          <ArrowPrevIcon className="w-4 h-6 stroke-current" />
        </a>
        <a
          className="flex text-white cursor-pointer items-center justify-center absolute bg-yellow-900 rounded-full w-12 h-12 top-1/2 xl:top-1/3 right-3 -mt-6 xl:-mt-4"
          onClick={() => {
            ref.current.slickNext();
          }}
        >
          <ArrowNextIcon className="w-4 h-6 stroke-current" />
        </a>
      </div>
      <p
        className={`text-xl xl:hidden my-4 text-white font-bold text-center transition-opacity ${
          titleShow ? `opacity-100` : `opacity-0`
        }`}
      >
        {title}
      </p>
      <div className="mb-6 flex items-center justify-center xl:hidden">
        <Link
          to={link}
          className="w-64 text-xl bg-white text-darkOrange-900 hover:text-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-2 font-bold text-center focus:outline-none"
          onClick={() => {
            sendToGmData("choosePet");
          }}
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}
