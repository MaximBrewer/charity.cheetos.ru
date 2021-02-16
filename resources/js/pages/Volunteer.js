import React from "react";
import Parser from "html-react-parser";
import { Link } from "react-router-dom";
import { InstagramIcon, VkIcon, TikTokIcon, SiteIcon } from "../Icons";
import PartnersSlider from "../components/PartnersSlider";
import LoveImg from "../../images/love.jpeg";
import { buttonClass } from "../Classes";
import ShelterForm from "../components/ShelterForm";

function Volunteer() {
  return (
    <section id="volunteer" className="bg-white">
      <div className="w-full h-px"></div>
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <h2 className={`text-2xl font-bold text-center mt-10`}>
          Протяни лапу дружбы
        </h2>
        <h2 className={`text-2xl font-bold text-center uppercase my-4`}>
          Стать Волонтером
        </h2>
        <p className="text-lg mb-4 text-justify">
          Волонтером может стать любой желающий. Для несовершеннолетних
          необходимо разрешение от родителей, а для тех, кто младше 14 лет —
          сопровождение официальных представителей.
        </p>
      </div>
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <h2 className="text-2xl text-center font-bold mt-8 mb-4">
          Стать волонтером в фонде:
        </h2>
        <PartnersSlider />
        <div className="mb-6 flex items-center justify-center">
          <Link
            to="/partners"
            className="w-64 text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white text-center focus:outline-none"
          >
            Стать волонтером
          </Link>
        </div>
        <h2 className="text-2xl text-center uppercase font-bold mb-4 mt-8">
          Поездка в приют
        </h2>
        <div className="my-6 border-7 border-yellow-900 rounded-3xl overflow-hidden">
          <div
            className="relative bg-center bg-no-repeat bg-cover w-full pb-100%"
            style={{ backgroundImage: `url(${LoveImg})` }}
          ></div>
        </div>
        <p className="mb-4 text-xl text-justify">
          Для того, чтобы познакомиться с животными поближе, ты можешь съездить
          в приют в своем городе
        </p>
        <p className="mb-4 font-bold text-xl text-center">Поехать в приют!</p>
        <div className="mb-4 w-84 m-auto">
          <ShelterForm />
        </div>
      </div>
      <div className="w-full h-px"></div>
    </section>
  );
}

export default Volunteer;
