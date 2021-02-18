import React from "react";
import { Link } from "react-router-dom";

import DogImg from "../../images/dgo.png";
import StepsImg from "../../images/steps.png";

import PartnersSlider from "../components/PartnersSlider";
import NewsSlider from "../components/NewsSlider";

import { DoubleButton, OfficialVideo, SchoolVideo } from "../Helpers";
import { buttonClass } from "../Classes";

function Home() {
  return (
    <section id="home" className="bg-white mt-52">
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <div className="w-full h-px"></div>
        <div className="-mt-52">
          <h2 className="text-white pt-6 pb-4 text-3xl sm:text-4xl font-bold text-center">
            Протяни лапу дружбы
          </h2>
          <OfficialVideo />
        </div>
        <p className="text-xl">
          Покупай специальные упаковки Cheetos “Лапы” и 1 рубль, с каждой
          проданной пачки будет переведён в фонды помощи бездомным животным
        </p>
        <DoubleButton />
        <h2 className="text-2xl text-center uppercase font-bold mb-4 mt-8">
          Стать хозяином:
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
              <Link to="/school" className="font-bold underline">
                школе будущих хозяев
              </Link>
            </span>
          </li>
        </ul>
        <div className="my-6 flex items-center justify-center">
          <Link to="/getpet" className={buttonClass() + " w-64 text-xl"}>
            Стать хозяином
          </Link>
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
        className="mt-28 bg-orange-900 bg-80 relative"
        style={{ backgroundImage: `url(${StepsImg})` }}
      >
        <div className="container mx-auto px-4 sm:px-0 max-w-sm">
          <div className="h-px w-full"></div>
          <div className="-mt-28">
            <SchoolVideo />
          </div>
          <div className="my-6 flex items-center justify-center">
            <Link
              to="/school"
              className="w-64 text-xl bg-white text-darkOrange-900 hover:text-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 font-bold text-center focus:outline-none"
            >
              Узнать больше
            </Link>
          </div>
          <div className="h-px w-full"></div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <h2 className="text-2xl text-center font-bold mt-8 mb-4">Новости:</h2>
        <NewsSlider />
      </div>
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <h2 className="text-2xl text-center font-bold mt-8 mb-4">
          Партнеры проекта:
        </h2>
        <PartnersSlider />
        <div className="mb-6 flex items-center justify-center">
          <Link
            to="/partners"
            className="w-48 text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none"
          >
            Подробнее
          </Link>
        </div>
      </div>
      <div className="w-full h-px"></div>
    </section>
  );
}

export default Home;
