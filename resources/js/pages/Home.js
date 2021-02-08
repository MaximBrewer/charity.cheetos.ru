import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import DogImg from "../../images/dgo.png";

function Home({ toggleOpened, opened }) {
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
    </section>
  );
}

export default Home;
