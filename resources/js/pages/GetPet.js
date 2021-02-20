import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import PartnersSlider from "../components/PartnersSlider";
import { buttonClass } from "../Classes";
import SweetImg from "../../images/sweet.jpeg";
import LoveImg from "../../images/love.jpeg";
import PetsSlider from "../components/PetsSlider";

function GetPet() {
  const [dogChecked, setDogChecked] = useState(false);
  const [catChecked, setCatChecked] = useState(false);
  const [pets, setPets] = useState(window.App.data.pets);
  const [city, setCity] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    setPets(
      window.App.data.pets.filter(function(item) {
        console.log(item, city, dogChecked, catChecked);
        return (
          (!city || item.city_id == city.id) &&
          ((dogChecked && item.kind == "dog") ||
            (catChecked && item.kind == "cat") ||
            (!dogChecked && !catChecked))
        );
      })
    );
  }, [city, dogChecked, catChecked]);

  return (
    <section id="about">
      <div className="bg-white">
        <div className="container mx-auto px-4 pt-8 xl:px-0 max-w-sm">
          <h2 className="pb-3 text-3xl font-bold text-center">
            Протяни лапу дружбы
          </h2>
          <h3 className="pb-3 text-2xl font-semibold uppercase text-center">
            Стать хозяином
          </h3>
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
          <h3 className="mb-6 text-2xl font-semibold text-center">
            Взять животное:
          </h3>
          <div className="mb-6 relative text-left w-64 m-auto z-5">
            <div>
              <button
                type="button"
                className={`${buttonClass} w-full flex justify-between m-auto px-6 items-center`}
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={() => setDropdown((p) => !p)}
              >
                <span className="font-normal text-lg">
                  {city ? city.title : `Город`}
                </span>
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {dropdown ? (
              <div
                className={`origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
              >
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {window.App.data.cities.map((item, index) => {
                    return (
                      <a
                        key={index}
                        onClick={() => {
                          setCity(item);
                          setDropdown(false);
                        }}
                        className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {item.title}
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : (
              ``
            )}
          </div>
          <div className="w-64 mb-6 m-auto">
            <div className="mb-2">
              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  onChange={(event) => setDogChecked(event.target.checked)}
                  type="checkbox"
                  name="dog-switch"
                  id="dog-switch"
                  checked={dogChecked}
                  className="z-1 toggle-checkbox absolute block w-7 h-7 rounded-full bg-yellow-800 appearance-none cursor-pointer focus:outline-none"
                />
                <label
                  htmlFor="dog-switch"
                  className="toggle-label block overflow-hidden h-7 rounded-full bg-darkOrange-900 cursor-pointer"
                ></label>
              </div>
              <label htmlFor="dog-switch" className="text-base">
                Собака
              </label>
            </div>
            <div className="mb-2">
              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  onChange={(event) => setCatChecked(event.target.checked)}
                  type="checkbox"
                  name="cat-switch"
                  id="cat-switch"
                  checked={catChecked}
                  className="z-1 toggle-checkbox absolute block w-7 h-7 rounded-full bg-yellow-800 appearance-none cursor-pointer focus:outline-none"
                />
                <label
                  htmlFor="cat-switch"
                  className="toggle-label block overflow-hidden h-7 rounded-full bg-darkOrange-900 cursor-pointer"
                ></label>
              </div>
              <label htmlFor="cat-switch" className="text-base">
                Кошка
              </label>
            </div>
          </div>
          <div className="w-full h-px "></div>
        </div>
      </div>
      <div className="bg-white mb-84">
        <div className="w-full h-px "></div>
        <div className="container mx-auto max-w-sm">
          <div className="px-4 xl:px-0 pb-4 -mb-84">
            {pets && pets.length ? <PetsSlider pets={pets} /> : ``}
          </div>
        </div>
        <div className="w-full h-px "></div>
      </div>
      <div className="bg-white mb-72">
        <div className="container mx-auto max-w-sm">
          <div className="px-4 xl:px-0">
            <div className="w-full h-px "></div>
            <h2 className="text-2xl text-center uppercase font-bold mb-4 mt-8">
              школа будущих хозяев
            </h2>
            <p className="mb-4 text-xl text-justify">
              К новой жизни нужно готовитьне только животных, но и будущих
              хозяев. Узнайте, ответы на самые актуальные вопросы, встающие
              перед будущими и настоящими хозяевами лохматых друзей
            </p>
          </div>
          <div className="px-4 xl:px-0 pb-4 -mb-72">
            <div className="my-6 border-7 border-yellow-900 rounded-3xl overflow-hidden">
              <div
                className="relative bg-center bg-no-repeat bg-cover w-full pb-100%"
                style={{ backgroundImage: `url(${SweetImg})` }}
              ></div>
            </div>
            <div className="my-6 flex items-center justify-center">
              <Link
                className="w-full text-xl bg-white text-darkOrange-900 hover:text-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-2 font-bold text-center focus:outline-none"
                to="/school"
              >
                Стать ответственным хозяином
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-px "></div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto px-4 xl:px-0 max-w-sm">
          <div className="w-full h-px "></div>
          <h2 className="text-2xl text-center uppercase font-bold mb-4 mt-8">
            В гости! В приют!
          </h2>
          <div className="my-6 border-7 border-yellow-900 rounded-3xl overflow-hidden">
            <div
              className="relative bg-center bg-no-repeat bg-cover w-full pb-100%"
              style={{ backgroundImage: `url(${LoveImg})` }}
            ></div>
          </div>
          <p className="mb-4 text-xl text-justify">
            Для того, чтобы познакомиться с животными поближе, ты можешь
            съездить в приют в своем городе
          </p>
          <Link to="/getpet" className={buttonClass() + " m-auto w-64 text-xl"}>
            Поехать в приют!
          </Link>
          <div className="w-full h-px "></div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto px-4 xl:px-0 max-w-sm">
          <div className="w-full h-px "></div>
          <h2 className="text-2xl text-center font-bold mt-8 mb-4">
            Партнеры проекта:
          </h2>
          <PartnersSlider />
          <div className="w-full h-px "></div>
        </div>
      </div>
    </section>
  );
}

export default GetPet;
