import React from "react";
import { Link } from "react-router-dom";
import PartnersSlider from "../components/PartnersSlider";
import PartnersSliderXL from "../components/PartnersSliderXL";
import { buttonClass } from "../Classes";
import SweetImg from "../../images/sweet.jpeg";
import LoveImg from "../../images/love.jpeg";
import GetPetBlock from "../blocks/GetPetBlock";

import SchoolModal from "../modals/School";
import { useModal } from "../context/modal";

function GetPet({ sendToGmData }) {
  let { setModalBody, setShowModal } = useModal();

  return (
    <section id="about">
      <GetPetBlock useTitle={true} sendToGmData={sendToGmData}/>
      <div className="bg-white mb-72 xl:mb-0 xl:pt-20 xl:pb-10">
        <div className="w-full h-px "></div>
        <div className="-mb-72 max-w-sm xl:max-w-full xl:mb-0 mx-auto">
          <div className="container mx-auto">
            <div className="xl:flex justify-between items-start">
              <div className={`xl:mt-0 xl:w-3/5 xl:order-1`}>
                <h2 className="text-2xl text-center uppercase font-bold mb-4 mt-8 xl:text-left xl:mt-0">
                  ШКОЛА БУДУЩИХ ХОЗЯЕВ
                </h2>
                <p className="mb-4 text-xl text-justify xl:text-2xl">
                  К новой жизни нужно готовить не только животных, но и будущих
                  хозяев. Узнайте ответы на самые актуальные вопросы, встающие
                  перед будущими и настоящими хозяевами лохматых друзей.
                </p>
                <div className="my-6 hidden xl:block">
                  <Link
                    className={`${buttonClass()} w-96 text-xl`}
                    to="/school"
                    onClick={() => {
                      sendToGmData("toSchool");
                    }}
                  >
                    Стать ответственным хозяином
                  </Link>
                </div>
              </div>
              <div className={`xl:w-2/5 xl:pl-24 xl:order-2`}>
                <div className="my-6 xl:my-0 p-3 bg-frame bg-cover rounded-3xl overflow-hidden">
                  <div
                    className="relative bg-center bg-no-repeat bg-cover rounded-2xl overflow-hidden pb-100%"
                    style={{ backgroundImage: `url(${SweetImg})` }}
                  ></div>
                </div>
                <div className="my-6 flex items-center justify-center xl:hidden">
                  <Link
                    className="w-full text-xl bg-white text-darkOrange-900 hover:text-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-2 font-bold text-center focus:outline-none"
                    to="/school"
                    onClick={() => {
                      sendToGmData("toSchool");
                    }}
                  >
                    Стать ответственным хозяином
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px "></div>
      </div>

      <div className="bg-white xl:mb-0 xl:pt-0 xl:pb-20">
        <div className="w-full h-px "></div>
        <div className="max-w-sm xl:max-w-full mx-auto">
          <div className="container mx-auto">
            <div className="xl:flex justify-between items-start">
              <div className={`xl:mt-0 xl:w-3/5 xl:order-2`}>
                <h2 className="text-2xl text-center uppercase font-bold mb-4 mt-8 xl:text-left xl:mt-0">
                  В ГОСТИ – В ПРИЮТ!
                </h2>
                <div className="my-6 xl:my-0 p-3 bg-frame bg-cover rounded-3xl overflow-hidden xl:hidden">
                  <div
                    className="relative bg-center bg-no-repeat bg-cover rounded-2xl overflow-hidden pb-100%"
                    style={{ backgroundImage: `url(${LoveImg})` }}
                  ></div>
                </div>
                <p className="mb-4 text-xl text-justify xl:text-2xl">
                  Чтобы познакомиться с животным и узнать его ближе, ты можешь
                  посетить приют в своем городе.
                </p>
                <div className="my-6 hidden xl:block">
                  <Link
                    to={`/volunteer/${window.App.data.partners[0].id}#form`}
                    className={buttonClass() + " w-72 text-xl"}
                  >
                    Поехать в приют
                  </Link>
                </div>
              </div>
              <div className={`xl:w-2/5 xl:pr-24 xl:order-1`}>
                <div className="my-6 p-3 bg-frame bg-cover rounded-3xl overflow-hidden hidden xl:block">
                  <div
                    className="relative bg-center bg-no-repeat bg-cover rounded-2xl overflow-hidden pb-100%"
                    style={{ backgroundImage: `url(${LoveImg})` }}
                  ></div>
                </div>
                <div className="my-6 flex items-center justify-center xl:hidden">
                  <Link
                    to={`/volunteer/${window.App.data.partners[0].id}#form`}
                    className={buttonClass() + " w-72 text-xl"}
                  >
                    Поехать в приют
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px "></div>
      </div>

      <div className="xl:text-black bg-white">
        <div className="w-full h-px "></div>
        <div className="max-w-sm xl:max-w-full mx-auto">
          <div className="container mx-auto">
            <h2 className="text-2xl text-center font-bold mt-16 xl:mt-0 mb-6">
              ПАРТНЕРЫ ПРОЕКТА
            </h2>
            <div className="hidden xl:block">
              <PartnersSliderXL />
            </div>
            <div className="xl:hidden">
              <PartnersSlider />
            </div>
          </div>
        </div>
        <div className="w-full h-px "></div>
      </div>
    </section>
  );
}

export default GetPet;
