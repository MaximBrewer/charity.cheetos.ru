import React from "react";
import { Link } from "react-router-dom";

import DogImg from "../../images/dog.png";
import StepsImg from "../../images/steps.png";

import PartnersSlider from "../components/PartnersSlider";
import PartnersSliderXL from "../components/PartnersSliderXL";
import NewsSlider from "../components/NewsSlider";

import { DoubleButton, OfficialVideo, SchoolVideo } from "../Helpers";
import { buttonClass } from "../Classes";

function Home() {
  return (
    <section
      id="home"
      className="bg-white xl:bg-transparent mt-52 xl:mt-0 xl:text-white"
    >
      <div className="max-w-sm xl:max-w-full mx-auto">
        <div className="container mx-auto">
          <div className="w-full h-px"></div>
          <div className="xl:flex xl:py-16 justify-between items-center">
            <div className="-mt-52 xl:mt-0 xl:w-1/2 xl:order-2 xl:pl-16">
              <h2 className="text-white pt-6 pb-4 text-3xl xl:text-4xl font-bold text-center xl:hidden">
                Протяни лапу дружбы
              </h2>
              <OfficialVideo />
            </div>
            <div className="xl:w-1/2">
              <p className="text-xl xl:text-3xl xl:order-1 xl:font-bold xl:mb-8">
                Покупай специальные упаковки Cheetos “Лапы” и 1 рубль, с каждой
                проданной пачки будет переведён в фонды помощи бездомным
                животным
              </p>
              <DoubleButton xlYellow={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="xl:bg-white xl:text-black">
        <div className="max-w-sm xl:max-w-full mx-auto">
          <div className="container mx-auto">
            <div className="xl:flex xl:py-16 justify-between items-center">
              <div className="xl:w-1/3">
                <h2 className="text-2xl text-center uppercase font-bold mb-4 mt-8 xl:hidden">
                  Стать хозяином:
                </h2>
                <div className="my-4 border-7 border-yellow-900 rounded-3xl overflow-hidden">
                  <div
                    className="relative bg-center bg-no-repeat bg-cover w-full pb-100%"
                    style={{ backgroundImage: `url(${DogImg})` }}
                  ></div>
                </div>
              </div>
              <div className="xl:w-2/3 xl:pl-20">
                <h2 className="text-3xl uppercase font-bold mb-8 hidden xl:block">
                  Стать хозяином:
                </h2>
                <ul className="text-xl mt-4 mb-6">
                  <li className="flex items-center justify-start mb-3">
                    <div>
                      <span className="font-bold w-7 h-7 text-white flex items-center justify-center mr-3 xl:mr-6 rounded-full bg-orange-800">
                        1
                      </span>
                    </div>
                    <span className="w-full">
                      Выбери животное и отправь заявку
                    </span>
                  </li>
                  <li className="flex items-center justify-start mb-3">
                    <div>
                      <span className="font-bold w-7 h-7 text-white flex items-center justify-center mr-3 xl:mr-6 rounded-full bg-orange-800">
                        2
                      </span>
                    </div>
                    <span className="w-full">Дождись ответа от Фонда</span>
                  </li>
                  <li className="flex items-center justify-start mb-3">
                    <div>
                      <span className="font-bold w-7 h-7 text-white flex items-center justify-center mr-3 xl:mr-6 rounded-full bg-orange-800">
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
                <div className="my-6 xl:mt-16 flex items-center justify-center xl:justify-start">
                  <Link
                    to="/getpet"
                    className={buttonClass() + " w-64 text-xl xl:ml-14"}
                  >
                    Стать хозяином
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:py-16">
        <div className="max-w-sm xl:max-w-full mx-auto xl:text-black">
          <div className="container mx-auto">
            <div className="xl:flex items-center justify-between">
              <div className="xl:w-1/2">
                <h2 className="text-2xl xl:text-4xl text-center xl:text-left uppercase font-bold mt-8 mb-4">
                  ШКОЛА БУДУЩИХ ХОЗЯЕВ
                </h2>
                <p className="text-xl mb-4 xl:text-3xl">
                  К новой жизни нужно готовитьне только животных, но и будущих
                  хозяев. Узнайте, ответы на самые актуальные вопросы, встающие
                  перед будущими и настоящими хозяевами лохматых друзей
                </p>
                <div className="hidden my-6 xl:flex items-center justify-start">
                  <Link
                    to="/school"
                    className="w-64 text-2xl bg-white text-darkOrange-900 hover:text-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 font-bold text-center focus:outline-none"
                  >
                    Узнать больше
                  </Link>
                </div>
              </div>
              <div className="xl:w-1/2 xl:pl-16 hidden xl:block">
                <SchoolVideo />
              </div>
            </div>
          </div>
        </div>
        <div
          className="xl:hidden mt-28 bg-orange-900 bg-80 relative"
          style={{ backgroundImage: `url(${StepsImg})` }}
        >
          <div className="max-w-sm xl:max-w-full mx-auto">
            <div className="container mx-auto">
              <div className="h-px w-full"></div>
              <div className="-mt-28">
                <SchoolVideo />
              </div>
              <div className="xl:hidden my-6 flex items-center justify-center">
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
        </div>
      </div>
      <div className="xl:bg-white xl:py-16">
        <div className="max-w-sm xl:max-w-full mx-auto">
          <div className="container mx-auto">
            <h2 className="text-2xl text-center font-bold mt-8 mb-4 xl:mt-0">
              Новости:
            </h2>
            <NewsSlider />
          </div>
        </div>
        <div className="w-full h-px bg-white"></div>
      </div>
      <div className="xl:bg-white xl:pb-16 xl:text-black">
        <div className="max-w-sm xl:max-w-full mx-auto">
          <div className="container mx-auto">
            <h2 className="text-2xl xl:text-4xl text-center font-bold mt-8 xl:mt-0 mb-4">
              Партнеры проекта:
            </h2>
            <div className="hidden xl:block xl:mb-16s">
              <PartnersSliderXL />
            </div>
            <div className="xl:hidden">
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
          </div>
        </div>
        <div className="w-full h-px bg-white"></div>
      </div>
      <div className="w-full h-px xl:hidden"></div>
    </section>
  );
}

export default Home;
