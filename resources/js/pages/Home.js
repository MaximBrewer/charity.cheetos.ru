import React from "react";
import { Link } from "react-router-dom";

import SweetImg from "../../images/sweet.jpeg";
import DogImg from "../../images/god.jpg";
import StepsImg from "../../images/steps.png";

import PartnersSlider from "../components/PartnersSlider";
import PartnersSliderXL from "../components/PartnersSliderXL";
import NewsSlider from "../components/NewsSlider";

import { DoubleButton, OfficialVideo, SchoolVideo } from "../Helpers";
import { buttonClass } from "../Classes";
import SchoolModal from "../modals/School";
import { useModal } from "../context/modal";
import GetPetBlock from "../blocks/GetPetBlock";

function Home({ sendToGmData }) {
  let { setModalBody, setShowModal } = useModal();
  return (
    <section id="home" className="mt-28 xl:mt-0 xl:text-white">
      <div className="bg-white xl:bg-transparent">
        <div className="max-w-sm xl:max-w-full mx-auto -mb-px">
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
                <p className="text-xl xl:text-xl xl:order-1 xl:font-bold xl:mb-8 xl:text-shadow-xl text-justify">
                  Не обязательно быть супергероем, чтобы помогать кому-то.
                  <br />
                  Присоединяйся к миссии Честера — протяни лапу дружбы и помоги
                  четвероногим!
                  <br />
                  Все просто: купи Cheetos «Лапы» со вкусом «Пицца» — и
                  1&nbsp;рубль с каждой проданной пачки пойдет в
                  благотворительные фонды помощи животным.
                  <br />А ещё ты можешь оставить заявку на нашем сайте и взять
                  лохматого друга домой.
                </p>
                <div className="my-6 xl:mt-6 xl:mb-0 flex items-center justify-center xl:justify-start">
                  <a
                    href={window.App.data.doubleLink}
                    target="_blank"
                    className={
                      buttonClass() +
                      ` w-64 xl:mb-0 xl:w-auto xl:px-12 text-xl xl:bg-yellow-800 xl:hover:bg-yellow-600 xl:text-darkOrange-900`
                    }
                    onClick={() => {
                      sendToGmData("doubleHelpHome");
                    }}
                  >
                    Удвоить помощь
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-px"></div>
        </div>
      </div>
      <GetPetBlock useTitle={false} sendToGmData={sendToGmData} />
      <div className="bg-white xl:bg-transparent">
        <div className="max-w-sm xl:max-w-full mx-auto -mb-px">
          <div className="container mx-auto">
            <div className="w-full h-px"></div>
            <h2 className="pt-12 text-2xl font-bold text-center block xl:hidden">
              ШКОЛА БУДУЩИХ ХОЗЯЕВ
            </h2>
            <div className="xl:flex xl:pb-32 xl:pt-12 justify-between items-start">
              <div className="xl:w-2/5 xl:order-1 xl:pr-16">
                <div className="my-4 xl:my-0 p-3 bg-frame bg-cover rounded-3xl overflow-hidden">
                  <div
                    className="relative rounded-2xl overflow-hidden bg-center bg-no-repeat bg-cover w-full pb-100%"
                    style={{ backgroundImage: `url(${SweetImg})` }}
                  ></div>
                </div>
              </div>
              <div className="xl:w-3/5 xl:order-2">
                <h2 className="text-white pt-6 pb-4 text-2xl font-bold hidden xl:block text-shadow-xl">
                  ШКОЛА БУДУЩИХ ХОЗЯЕВ
                </h2>
                <p className="text-xl xl:text-2xl xl:font-bold xl:mb-8 xl:text-shadow-xl text-justify">
                  К новой жизни надо подготовиться всем: и четвероногим друзьям,
                  и их потенциальным владельцам. Узнайте ответы на актуальные
                  вопросы, которые часто задают хозяева собак и кошек.
                </p>
                <div className="my-6 flex items-start justify-center xl:justify-start">
                  <Link
                    to="/school"
                    onClick={() => {
                      sendToGmData("knowMore");
                    }}
                    className={
                      buttonClass() +
                      ` w-64 xl:mb-0 xl:w-auto xl:px-12 text-xl xl:bg-yellow-800 xl:hover:bg-yellow-600 xl:text-darkOrange-900 py-2 px-7`
                    }
                  >
                    Узнать больше
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-px"></div>
        </div>
      </div>
      <div className="bg-white xl:pt-16 text-black">
        <div className="max-w-sm xl:max-w-full mx-auto">
          <div className="container mx-auto">
            <h2 className="text-2xl text-center font-bold mt-8 xl:mt-0 mb-4">
              НОВОСТИ
            </h2>
            <NewsSlider />
          </div>
        </div>
        <div className="w-full h-px bg-white"></div>
      </div>
      <div className="bg-white pt-4 xl:py-16 xl:text-black -mb-px">
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
    </section>
  );
}

export default Home;
