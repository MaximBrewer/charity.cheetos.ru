import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import PartnersSlider from "../components/PartnersSlider";
import PartnersSliderXL from "../components/PartnersSliderXL";
import { ArrowDownIcon } from "../Icons";
import Parser from "html-react-parser";
import SweetImg from "../../images/sweet.jpeg";
import SweetCat from "../../images/cat.jpg";

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
    <section id="school" className="xl:bg-white">
      <div className="w-full h-px "></div>
      <div className="bg-white xl:bg-transparent">
        <div className="w-full h-px "></div>
        <div className="max-w-sm xl:max-w-full xl:mb-8 mx-auto">
          <div className="container mx-auto">
            <h2
              className={`text-2xl font-bold text-center mt-10 xl:text-left xl:mt-16`}
            >
              Протяни лапу дружбы
            </h2>
            <h2
              className={`text-2xl font-bold text-center my-4 xl:mb-6 xl:text-left`}
            >
              Школа будущих хозяев
            </h2>
            <p className="text-xl mb-10">
              К новой жизни нужно готовить не только животных, но и будущих
              хозяев. <br />
              Узнайте, ответы на самые актуальные вопросы!
            </p>
          </div>
          <div className="w-full h-px "></div>
        </div>
        <div className="max-w-sm xl:max-w-full xl:mb-8 mx-auto">
          <div className="container mx-auto">
            <div className="px-4 xl:px-0">
              <div className="mb-4 text-justify">
                {lessons.map((item, index) => {
                  return item.kind == "common" ? (
                    <div
                      key={index}
                      className={`rounded-xl xl:rounded-2xl overflow-hidden mb-4 border-7 cursor-pointer border-yellow-800`}
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
                        className={`flex justify-between items-center text-sm xl:text-lg text-left py-2 px-2 bg-yellow-800`}
                      >
                        <span className="block mr-2">
                          <span className="font-bold">
                            Урок №{item.number}:
                          </span>{" "}
                          {item.title}
                        </span>
                        <span className="text-black">
                          <ArrowDownIcon className="stroke-current w-6 h-4" />
                        </span>
                      </div>
                      <div
                        className={`text-sm xl:text-base bg-white ${
                          item.o ? `h-auto pt-4` : `h-0 hidden`
                        }`}
                      >
                        <div className="px-6">
                          <div className="text-lg font-bold mb-2">
                            {item.excerpt}
                          </div>
                          <div className="text-lg mb-2">
                            {Parser(item.body)}
                          </div>
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
        </div>
        <div className="w-full h-px "></div>
      </div>
      <div className="bg-white xl:bg-transparent">
        <div className="w-full h-px "></div>
        <div className="max-w-sm xl:max-w-full xl:mb-8 mx-auto">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center xl:text-left">
              Какое у вас животное
            </h2>
            <p className="text-sm xl:text-lg text-center mb-4 xl:text-left">
              будущее или настоящее
            </p>
            <div className="xl:flex items-center">
              <div className="xl:w-1/2">
                <div className="mb-2 justify-center items-center flex xl:uppercase">
                  <div
                    className="text-base xl:text-xl cursor-pointer"
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
                      className="z-1 toggle-checkbox absolute block w-7 h-7 rounded-full bg-yellow-800 appearance-none cursor-pointer focus:outline-none"
                    />
                    <label
                      htmlFor="cat-switch"
                      className="toggle-label block overflow-hidden h-7 rounded-full bg-darkOrange-900 cursor-pointer"
                    ></label>
                  </div>
                  <div
                    className="text-base xl:text-xl cursor-pointer"
                    onClick={() => setKind("cat")}
                  >
                    Кошка
                  </div>
                </div>
              </div>
              <div className="hidden xl:flex xl:w-1/2">
                <div className="w-1/2 pl-12">
                  <div className="mt-6 mb-4 border-7 border-yellow-800 bg-darkOrange-900 rounded-3xl overflow-hidden">
                    <div
                      className={`relative bg-center bg-no-repeat bg-cover w-full pb-100% ${kind == "dog" ? `opacity-70` : ``}`}
                      style={{
                        backgroundImage: `url(${SweetCat})`,
                        filter: `blur(${kind == "dog" ? `2px` : `0`})`
                      }}
                    ></div>
                  </div>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="mt-6 mb-4 border-7 border-yellow-800 bg-darkOrange-900 rounded-3xl overflow-hidden">
                    <div
                      className={`relative bg-center bg-no-repeat bg-cover w-full pb-100% ${kind != "dog" ? `opacity-70` : ``}`}
                      style={{
                        backgroundImage: `url(${SweetImg})`,
                        filter: `blur(${kind != "dog" ? `2px` : `0`})`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-px "></div>
        </div>
        <div className="pb-56 bg-white -mb-56 xl:hidden">
          <div className="w-full h-px "></div>
        </div>
        <div className="max-w-sm xl:max-w-full xl:mb-8 mx-auto xl:hidden">
          <div className="container mx-auto">
            <div className="px-4 xl:px-0 pb-4">
              <div className="mt-6 mb-4 border-7 border-yellow-900 rounded-3xl overflow-hidden">
                <div
                  className="relative bg-center bg-no-repeat bg-cover w-full pb-100%"
                  style={{
                    backgroundImage: `url(${
                      kind != "dog" ? SweetCat : SweetImg
                    })`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-sm xl:max-w-full xl:mb-8 mx-auto">
        <div className="container mx-auto">
          <div className="mb-10 text-justify">
            {lessons.map((item, index) => {
              return item.kind == kind ? (
                <div
                  key={index}
                  className={`rounded-xl xl:rounded-2xl overflow-hidden mb-4 border-7 border-white cursor-pointer ${
                    item.o ? `border-yellow-800` : `xl:border-yellow-800`
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
                    className={`flex justify-between items-center text-sm xl:text-lg text-left py-2 px-2 ${
                      item.o ? `bg-yellow-800` : `bg-white xl:bg-yellow-800`
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
                    className={`text-sm xl:text-base bg-white ${
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

      <div className="xl:text-black bg-white">
        <div className="w-full h-px "></div>
        <div className="max-w-sm xl:max-w-full mx-auto">
          <div className="container mx-auto">
            <h2 className="text-2xl text-center font-bold mt-16 xl:mt-0 mb-6">
              Партнеры проекта:
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
      <div className="w-full h-px "></div>
    </section>
  );
}

export default School;
