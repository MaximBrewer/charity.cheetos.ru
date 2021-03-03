import React from "react";
import { Link } from "react-router-dom";

import DogImg from "../../images/god.jpg";
import StepsImg from "../../images/steps.png";

import PartnersSlider from "../components/PartnersSlider";
import PartnersSliderXL from "../components/PartnersSliderXL";
import NewsSlider from "../components/NewsSlider";

import { DoubleButton, OfficialVideo, SchoolVideo } from "../Helpers";
import { buttonClass } from "../Classes";
import SchoolModal from "../modals/School";
import { useModal } from "../context/modal";

function Home() {
  let { setModalBody, setShowModal } = useModal();
  return (
    <section
      id="home"
      className="bg-white xl:bg-transparent mt-28 xl:mt-0 xl:text-white"
    >
      <div className="max-w-sm xl:max-w-full mx-auto">
        <div className="container mx-auto">
          <div className="w-full h-px"></div>
          <h2 className="text-white pt-6 pb-4 text-2xl font-bold text-center hidden xl:block text-shadow-xl">
            ПРОТЯНИ ЛАПУ ДРУЖБЫ
          </h2>
          <div className="xl:flex xl:pb-32 xl:pt-12 justify-between items-start">
            <div className="-mt-28 xl:mt-0 xl:w-1/2 xl:order-2 xl:pl-16">
              <OfficialVideo />
            </div>
            <div className="xl:w-1/2">
              <p className="text-xl xl:text-2xl xl:order-1 xl:font-bold xl:mb-8 xl:text-shadow-xl text-justify">
                Покупай пачки Cheetos “Лапы” и 1&nbsp;рубль с каждой пачки будет переведен
                в фонды помощи бездомным животным.
              </p>
              <div className="my-6 xl:mt-6 xl:mb-0 flex items-center justify-center xl:justify-start">
                <a
                  href={window.App.data.doubleLink}
                  target="_blank"
                  className={
                    buttonClass() +
                    ` w-64 xl:mb-0 xl:w-auto xl:px-12 text-xl xl:bg-yellow-800 xl:hover:bg-yellow-600 xl:text-darkOrange-900`
                  }
                >
                  Удвоить помощь
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:bg-white xl:text-black">
        <div className="max-w-sm xl:max-w-full mx-auto">
          <div className="container mx-auto">
            <div className="xl:flex xl:py-16 justify-between items-start">
              <div className="xl:w-1/2 xl:pl-20 xl:pr-36">
                <h2 className="text-2xl text-center uppercase font-bold mb-4 mt-8 xl:hidden">
                  СТАТЬ ХОЗЯИНОМ
                </h2>
                <div className="my-4 xl:my-0 p-3 bg-frame bg-cover rounded-3xl overflow-hidden">
                  <div
                    className="relative rounded-2xl overflow-hidden bg-center bg-no-repeat bg-cover w-full pb-100%"
                    style={{ backgroundImage: `url(${DogImg})` }}
                  ></div>
                </div>
              </div>
              <div className="xl:w-1/2 xl:pl-20">
                <h2 className="text-2xl uppercase font-bold mb-8 hidden xl:block">
                  СТАТЬ ХОЗЯИНОМ
                </h2>
                <ul className="text-lg xl:text-1xl mt-4 mb-6">
                  <li className="flex items-center justify-start mb-3">
                    <div>
                      <span className="font-bold w-8 h-8 text-white flex items-center justify-center mr-3 xl:mr-6 rounded-full bg-orange-800">
                        1
                      </span>
                    </div>
                    <span className="w-full">
                      Выбери животное и отправь заявку
                    </span>
                  </li>
                  <li className="flex items-center justify-start mb-3">
                    <div>
                      <span className="font-bold w-8 h-8 text-white flex items-center justify-center mr-3 xl:mr-6 rounded-full bg-orange-800">
                        2
                      </span>
                    </div>
                    <span className="w-full">Дождись ответа от фонда</span>
                  </li>
                  <li className="flex items-center justify-start mb-3">
                    <div>
                      <span className="font-bold w-8 h-8 text-white flex items-center justify-center mr-3 xl:mr-6 rounded-full bg-orange-800">
                        3
                      </span>
                    </div>
                    <span className="w-full">
                      Пройди обучение <br className="xl:hidden" />
                      <a
                        className="font-bold underline cursor-pointer"
                        onClick={() => {
                          setModalBody(<SchoolModal />);
                          setShowModal(true);
                          document.documentElement.scrollTop = 0;
                          return false;
                        }}
                      >
                        в&nbsp;школе будущих хозяев
                      </a>
                      {/* <Link
                        to="/school"
                        className="font-bold underline"
                      >
                        в&nbsp;школе будущих хозяев
                      </Link> */}
                    </span>
                  </li>
                </ul>
                <div className="my-6 xl:mt-b xl:mb-0 xl:mt-10 flex items-center justify-center xl:justify-start">
                  <Link
                    to="/getpet"
                    className={buttonClass() + " w-64 text-xl xl:ml-14 xl:mb-0"}
                  >
                    Стать хозяином
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:py-0 sm:py-16 ">
        {/* <div className="max-w-sm xl:max-w-full mx-auto xl:text-black">
          <div className="container mx-auto">
            <div className="xl:flex items-start justify-between">
              <div className="xl:w-1/2">
                <h2 className="text-2xl text-center xl:text-left uppercase font-bold mt-8 mb-4 xl:mt-0">
                  ШКОЛА БУДУЩИХ ХОЗЯЕВ
                </h2>
                <p className="text-xl mb-4">
                  К новой жизни надо подготовиться всем: и четвероногим друзьям,
                  и их потенциальным владельцам. Узнайте ответы на актуальные
                  вопросы, которые часто задают хозяева собак и кошек.
                </p>
                <div className="hidden my-6 xl:flex items-start justify-start">
                  <Link
                    to="/school"
                    className="w-64 text-xl bg-white text-darkOrange-900 hover:text-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 font-bold text-center focus:outline-none"
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
        </div> */}
        {/* <div
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
        </div> */}
      </div>
      {/* <div className="xl:bg-white xl:pt-16">
        <div className="max-w-sm xl:max-w-full mx-auto">
          <div className="container mx-auto">
            <h2 className="text-2xl text-center font-bold mt-8 mb-4 xl:mt-0">
              Новости:
            </h2>
            <NewsSlider />
          </div>
        </div>
        <div className="w-full h-px bg-white"></div>
      </div> */}
      <div className="xl:bg-white xl:py-16 xl:text-black">
        <div className="max-w-sm xl:max-w-full mx-auto">
          <div className="container mx-auto">
            <h2 className="text-2xl text-center font-bold mt-8 xl:mt-0 mb-4">
              ПАРТНЕРЫ ПРОЕКТА
            </h2>
            <div className="hidden xl:block xl:mb-16s">
              <PartnersSliderXL />
            </div>
            <div className="xl:hidden">
              <PartnersSlider />
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
