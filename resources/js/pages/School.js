import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import PartnersSlider from "../components/PartnersSlider";
import { ArrowDownIcon } from "../Icons";
import Parser from "html-react-parser";
import SweetImg from "../../images/sweet.jpeg";
import YouTube from "react-youtube";

function School() {
  const [lessons, setLessons] = useState(window.App.data.lessons);
  const [kind, setKind] = useState("dog");
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    event.target.playVideo();
  };

  const handleChange = (event) => {
    setKind(!event.target.checked ? "dog" : "cat");
  };
  return (
    <section id="school">
      <div className="bg-white">
        <div className="w-full h-px "></div>
        <div className="container mx-auto px-4 pt-8 sm:px-0 max-w-sm">
          <h2 className="pb-3 text-3xl font-bold text-center">
            Протяни лапу дружбы
          </h2>
          <h3 className="pb-3 text-2xl font-semibold uppercase text-center">
            школа будущих хозяев
          </h3>
          <p className="text-xl mb-4">
            К новой жизни нужно готовить не только животных, но и будущих
            хозяев. Узнайте, ответы на самые актуальные вопросы!
          </p>
        </div>
        <div className="w-full h-px "></div>
      </div>
      <div className="bg-white">
        <div className="w-full h-px "></div>
        <div className="container mx-auto max-w-sm">
          <div className="px-4 sm:px-0">
            <div className="mb-4 text-justify">
              {lessons.map((item, index) => {
                return item.number <= 2 && item.kind == kind ? (
                  <div
                    key={index}
                    className={`rounded-xl sm:rounded-2xl overflow-hidden mb-4 border-7 border-white cursor-pointer border-yellow-800`}
                    onClick={() => {
                      setLessons((prevState) => {
                        return prevState.map((i, k) => {
                          return {
                            ...i,
                            o: !i.o && k == index,
                            y:
                              k == index && !i.o ? (
                                <div className="my-4 rounded-3xl overflow-hidden bg-gray-300">
                                  <div
                                    id="responsiveVideoWrapper"
                                    className="relative h-0 pb-fluid-video"
                                  >
                                    <YouTube
                                      containerClassName="absolute w-full h-full"
                                      className="absolute w-full h-full"
                                      videoId={i.video}
                                      opts={opts}
                                      onReady={_onReady}
                                    />
                                  </div>
                                </div>
                              ) : null,
                          };
                        });
                      });
                    }}
                  >
                    <div
                      className={`flex justify-between items-center text-sm sm:text-lg text-left py-2 px-2 bg-yellow-800`}
                    >
                      <span className="block mr-2">
                        <span className="font-bold">Урок №{item.number}:</span>{" "}
                        {item.title}
                      </span>
                      <span className="text-black">
                        <ArrowDownIcon className="stroke-current w-6 h-4" />
                      </span>
                    </div>
                    <div
                      className={`text-sm sm:text-base bg-white ${
                        item.o ? `h-auto pt-4` : `h-0 hidden`
                      }`}
                    >
                      <div className="px-6">
                        <div className="text-lg font-bold mb-2">
                          {item.excerpt}
                        </div>
                        <div className="text-lg mb-2">{Parser(item.body)}</div>
                        <div>{item.y}</div>
                      </div>
                      <div className="bg-yellow-800 pt-3 pb-1 text-center text-xl font-bold">
                        {item.prologue}
                      </div>
                    </div>
                  </div>
                ) : (
                  ``
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full h-px "></div>
      </div>
      <div className="bg-white">
        <div className="w-full h-px "></div>
        <div className="container mx-auto max-w-sm">
          <div>
            <h2 className="text-3xl font-bold text-center">
              Какое у вас животное
            </h2>
            <p className="text-sm text-center mb-4">будущее или настоящее</p>
            <div className="mb-2 justify-center items-center flex">
              <div
                className="text-base cursor-pointer"
                onClick={() => setKind("dog")}
              >
                Собака
              </div>
              <div className="relative inline-block w-12 mx-2 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  name="cat-switch"
                  id="cat-switch"
                  onChange={handleChange}
                  checked={kind != "dog"}
                  className="toggle-checkbox absolute block w-7 h-7 rounded-full bg-yellow-800 appearance-none cursor-pointer focus:outline-none"
                />
                <label
                  htmlFor="cat-switch"
                  className="toggle-label block overflow-hidden h-7 rounded-full bg-darkOrange-900 cursor-pointer"
                ></label>
              </div>
              <div
                className="text-base cursor-pointer"
                onClick={() => setKind("cat")}
              >
                Кошка
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px "></div>
      </div>
      <div className="pb-56 bg-white -mb-56">
        <div className="w-full h-px "></div>
      </div>
      <div className="container mx-auto max-w-sm">
        <div className="px-4 sm:px-0 pb-4">
          <div className="mt-6 mb-4 border-7 border-yellow-900 rounded-3xl overflow-hidden">
            <div
              className="relative bg-center bg-no-repeat bg-cover w-full pb-100%"
              style={{ backgroundImage: `url(${SweetImg})` }}
            ></div>
          </div>
          <div className="mb-10 text-justify">
            {lessons.map((item, index) => {
              return item.number > 2 && item.kind == kind ? (
                <div
                  key={index}
                  className={`rounded-xl sm:rounded-2xl overflow-hidden mb-4 border-7 border-white cursor-pointer ${
                    item.o ? `border-yellow-800` : ``
                  }`}
                  onClick={() => {
                    setLessons((prevState) => {
                      return prevState.map((i, k) => {
                        return {
                          ...i,
                          o: !i.o && k == index,
                          y:
                            k == index && !i.o ? (
                              <div className="my-4 rounded-3xl overflow-hidden bg-gray-300">
                                <div
                                  id="responsiveVideoWrapper"
                                  className="relative h-0 pb-fluid-video"
                                >
                                  <YouTube
                                    containerClassName="absolute w-full h-full"
                                    className="absolute w-full h-full"
                                    videoId={i.video}
                                    opts={opts}
                                    onReady={_onReady}
                                  />
                                </div>
                              </div>
                            ) : null,
                        };
                      });
                    });
                  }}
                >
                  <div
                    className={`flex justify-between items-center text-sm sm:text-lg text-left py-2 px-2 ${
                      item.o ? `bg-yellow-800` : `bg-white`
                    }`}
                  >
                    <span className="block mr-2">
                      <span className="font-bold">Урок №{item.number}:</span>{" "}
                      {item.title}
                    </span>
                    <span className="text-black">
                      <ArrowDownIcon className="stroke-current w-6 h-4" />
                    </span>
                  </div>
                  <div
                    className={`text-sm sm:text-base bg-white ${
                      item.o ? `h-auto pt-4` : `h-0 hidden`
                    }`}
                  >
                    <div className="px-6">
                      <div className="text-lg font-bold mb-2">
                        {item.excerpt}
                      </div>
                      <div className="text-lg mb-2">{Parser(item.body)}</div>
                      <div>{item.y}</div>
                    </div>
                    <div className="bg-yellow-800 pt-3 pb-1 text-center text-xl font-bold">
                      {item.prologue}
                    </div>
                  </div>
                </div>
              ) : (
                ``
              );
            })}
          </div>
        </div>
        <div className="w-full h-px "></div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-0 max-w-sm">
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

export default School;
