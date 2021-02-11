import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import DogImg from "../../images/dgo.png";
import PartnerImg from "../../images/partner.png";
import StepsImg from "../../images/steps.png";
import Slider from "react-slick";
import { ArrowNextIcon, ArrowPrevIcon } from "../Icons";

function Home({ toggleOpened, opened }) {
  const settingsNews = {
    arrows: false,
    infinite: true,
    dots: false,
    speed: 300,
    auto: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const refNews = useRef(null);

  const newsArray = [
    {
      src: DogImg,
    },
    {
      src: DogImg,
    },
    {
      src: DogImg,
    },
    {
      src: DogImg,
    },
    {
      src: DogImg,
    },
  ];
  const settingsPartners = {
    arrows: false,
    infinite: true,
    dots: false,
    speed: 300,
    auto: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const refPartners = useRef(null);

  const partnersArray = [
    {
      src: PartnerImg,
      text: 'Благотворительный фонд помощи бездомным животным "НИКА"',
    },
    {
      src: PartnerImg,
      text: 'Благотворительный фонд помощи бездомным животным "НИКА"',
    },
    {
      src: PartnerImg,
      text: 'Благотворительный фонд помощи бездомным животным "НИКА"',
    },
    {
      src: PartnerImg,
      text: 'Благотворительный фонд помощи бездомным животным "НИКА"',
    },
    {
      src: PartnerImg,
      text: 'Благотворительный фонд помощи бездомным животным "НИКА"',
    },
  ];

  return (
    <section id="home">
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <p className="text-xl">
          Покупай специальные упаковки Cheetos “Лапы” и 1 рубль, с каждой
          проданной пачки будет переведён в фонды помощи бездомным животным
        </p>
        <div className="my-6 flex items-center justify-center">
          <button className="w-64 text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none">
            Удвоить помощь!
          </button>
        </div>
        <h2 className="text-2xl text-center uppercase font-bold mb-4 mt-8">
          Стать хоязином:
        </h2>
        <div className="my-4 border-7 border-yellow-900 rounded-3xl overflow-hidden">
          <div
            className="relative bg-center bg-no-repeat bg-cover w-full pb-100%"
            style={{ backgroundImage: `url(${DogImg})` }}
          ></div>
        </div>
        <ul className="text-xl mt-4 mb-6">
          <li className="flex items-center justify-start mb-3">
            <div>
              <span className="font-bold w-7 h-7 text-white flex items-center justify-center mr-3 rounded-full bg-orange-800">
                1
              </span>
            </div>
            <span className="w-full">Выбери животное и отправь заявку</span>
          </li>
          <li className="flex items-center justify-start mb-3">
            <div>
              <span className="font-bold w-7 h-7 text-white flex items-center justify-center mr-3  rounded-full bg-orange-800">
                2
              </span>
            </div>
            <span className="w-full">Дождись ответа от Фонда</span>
          </li>
          <li className="flex items-center justify-start mb-3">
            <div>
              <span className="font-bold w-7 h-7 text-white flex items-center justify-center mr-3 rounded-full bg-orange-800">
                3
              </span>
            </div>
            <span className="w-full">
              Пройди обучение в <br />
              <Link to="/" className="font-bold underline">
                школе будущих хозяев
              </Link>
            </span>
          </li>
        </ul>
        <div className="my-6 flex items-center justify-center">
          <button className="w-64 text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none">
            Стать хозяином
          </button>
        </div>
        <h2 className="text-2xl text-center uppercase font-bold mt-8 mb-4">
          ШКОЛА БУДУЩИХ ХОЗЯЕВ
        </h2>
        <p className="text-xl mb-4">
          К новой жизни нужно готовитьне только животных, но и будущих хозяев.
          Узнайте, ответы на самые актуальные вопросы, встающие перед будущими и
          настоящими хозяевами лохматых друзей
        </p>
      </div>
      <div
        className="mt-28 bg-orange-900 bg-80 z-20 relative"
        style={{ backgroundImage: `url(${StepsImg})` }}
      >
        <div className="container mx-auto px-4 sm:px-0 max-w-sm">
          <div className="h-px w-full"></div>
          <div className="-mt-28">
            <div className="my-4 border-7 border-yellow-900 rounded-3xl overflow-hidden">
              <div
                id="responsiveVideoWrapper"
                className="relative h-0 pb-fluid-video"
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/zihoyz0u_cs"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  autoPlay
                ></iframe>
              </div>
            </div>
          </div>
          <div className="my-6 flex items-center justify-center">
            <button className="w-64 text-xl bg-white text-darkOrange-900 hover:text-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 font-bold text-center focus:outline-none">
              Узнать больше
            </button>
          </div>
          <div className="h-px w-full"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <h2 className="text-2xl text-center font-bold mt-8 mb-4">Новости:</h2>
        <div className="relative overflow-hidden mb-6">
          <Slider {...settingsNews} ref={refNews}>
            {newsArray.map((item, index) => (
              <div key={index}>
                <div
                  className="border-7 border-yellow-900 rounded-3xl relative bg-center bg-no-repeat bg-cover w-full pb-100% -mb-2"
                  style={{ backgroundImage: `url(${item.src})` }}
                >
                </div>
                <p className="text-xl my-4">
                  Dream Team House — тиктокерский дом вместе с брендом Сheetos
                  съездил в приют Ромашка
                </p>
                <div className="mb-6 flex items-center justify-center">
                  <button className="w-64 text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none">
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </Slider>
          <a
            className="flex text-white cursor-pointer items-center justify-center absolute bg-yellow-900 rounded-full w-12 h-12 top-1/3 left-0 -mt-6"
            onClick={() => {
              refNews.current.slickPrev();
            }}
          >
            <ArrowPrevIcon className="w-4 h-6 stroke-current" />
          </a>
          <a
            className="flex text-white cursor-pointer items-center justify-center absolute bg-yellow-900 rounded-full w-12 h-12 top-1/3 right-0 -mt-6"
            onClick={() => {
              refNews.current.slickNext();
            }}
          >
            <ArrowNextIcon className="w-4 h-6 stroke-current" />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <h2 className="text-2xl text-center font-bold mt-8 mb-4">
          Партнеры проекта:
        </h2>
        <div className="relative overflow-hidden mb-6 px-10">
          <Slider {...settingsPartners} ref={refPartners}>
            {partnersArray.map((item, index) => (
              <div key={index}>
                <div className="w-1/2 m-auto mb-4">
                  <div
                    className="relative bg-center bg-no-repeat bg-cover w-full pb-100%"
                    style={{ backgroundImage: `url(${item.src})` }}
                  >
                  </div>
                </div>
                <p className="text-center mb-4">{item.text}</p>
                <div className="mb-6 flex items-center justify-center">
                  <button className="w-48 text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none">
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </Slider>
          <a
            className="flex text-yellow-900 cursor-pointer items-center justify-center absolute w-12 h-12 top-1/3 left-0 -mt-6"
            onClick={() => {
              refPartners.current.slickPrev();
            }}
          >
            <ArrowPrevIcon className="w-4 h-6 stroke-current" />
          </a>
          <a
            className="flex text-yellow-900 cursor-pointer items-center justify-center absolute w-12 h-12 top-1/3 right-0 -mt-6"
            onClick={() => {
              refPartners.current.slickNext();
            }}
          >
            <ArrowNextIcon className="w-4 h-6 stroke-current" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
