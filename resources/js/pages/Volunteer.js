import React, { useRef, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import Slider from "react-slick";
import Parser from "html-react-parser";
import { Link } from "react-router-dom";
import { InstagramIcon, VkIcon, TikTokIcon, SiteIcon } from "../Icons";
import PartnersSlider from "../components/PartnersSlider";
import LoveImg from "../../images/love.jpeg";
import { buttonClass } from "../Classes";
import ShelterForm from "../components/ShelterForm";
import { ArrowNextIcon, ArrowPrevIcon } from "../Icons";

function Volunteer() {
  const { id } = useParams();
  let history = useHistory();
  let location = useLocation();

  React.useEffect(() => {
    if (location.hash == "#form") {
      formRef.current.scrollIntoView();
    }
  }, [location]);

  const formRef = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.slickGoTo(getIndex());
  }, [id]);

  const getIndex = () => {
    for (let i in window.App.data.partners) {
      if (window.App.data.partners[i].id == id) return i;
    }
  };

  const prevId = () => {
    let index = 0;
    for (let i in window.App.data.partners) {
      if (window.App.data.partners[i].id == id) index = i * 1 - 1;
    }
    index = index < 0 ? window.App.data.partners.length - 1 : index;
    return window.App.data.partners[index].id;
  };

  const nextId = () => {
    let index = 0;
    for (let i in window.App.data.partners) {
      if (window.App.data.partners[i].id == id) index = i * 1 + 1;
    }
    index = window.App.data.partners.length == index ? 0 : index;
    return window.App.data.partners[index].id;
  };

  const settings = {
    arrows: false,
    infinite: true,
    dots: false,
    speed: 300,
    auto: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="volunteer" className="bg-white">
      <div className="w-full h-px"></div>
      <div className="max-w-sm xl:max-w-full mx-auto">
        <div className="container mx-auto">
          <h2
            className={`text-2xl font-bold text-center mt-8 hidden xl:block`}
          >
            ПРОТЯНИ ЛАПУ ДРУЖБЫ
          </h2>
          <h2
            className={`text-2xl font-bold text-center mb-4 xl:mb-8 mt-4 xl:mt-0`}
          >
            СТАТЬ ВОЛОНТЁРОМ
          </h2>
          <p className="text-lg mb-4 xl:text-left xl:text-xl xl:w-2/3">
            Волонтёром может стать любой желающий. Для несовершеннолетних
            необходимо разрешение от родителей, а для тех, кто младше 14 лет —
            сопровождение официальных представителей.
          </p>
        </div>
        <div className="container mx-auto">
          <div className="">
            <h2 className="text-2xl text-center font-bold mt-8 mb-4 xl:uppercase xl:text-left xl:mb-12 xl:mt-16">
              Стать волонтёром в фонде
            </h2>
            <div>
              <div className="relative px-10 w-full xl:px-0">
                <Slider {...settings} ref={ref}>
                  {window.App.data.partners.map((item, index) => (
                    <div key={index}>
                      <div className="xl:flex">
                        <div className="xl:w-1/2 mb-4 xl:mb-0 xl:pr-32">
                          <div
                            className="relative bg-center bg-no-repeat bg-contain w-full pb-100%"
                            style={{ backgroundImage: `url(${item.image})` }}
                          ></div>
                        </div>
                        <div className="xl:w-1/2">
                          <div className="flex flex-col justify-between h-full">
                            <div>
                              <div className="text-center mb-4 xl:mb-8 xl:text-xl xl:text-left">
                                {item.excerpt}
                              </div>
                              <div className="hidden xl:block xl:mb-8 xl:text-xl">
                                {Parser(item.body)}
                              </div>
                            </div>
                            <div className="hidden xl:block">
                              <div className="xl:flex">
                                <div className="my-6 flex items-center justify-center ">
                                  <a
                                    href={`${item.site}`}
                                    target={`_blank`}
                                    className="text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none xl:mr-8"
                                  >
                                    Стать волонтёром
                                  </a>
                                </div>
                                <div className="my-6 flex items-center justify-center">
                                  <Link
                                    to={`/volunteer/${item.id}#form`}
                                    className="text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none"
                                  >
                                    Заявка на поездку в приют
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <ul className="my-6 xl:my-3 flex items-center justify-between xl:justify-start xl:order-5">
                                  {item.site ? (
                                    <li className="mx-4">
                                      <a
                                        href={item.site}
                                        target="_blank"
                                        className="rounded-full block w-12 h-12 flex items-center justify-center bg-orange-800 text-white"
                                      >
                                        <SiteIcon className="w-7 h-7 fill-current" />
                                      </a>
                                    </li>
                                  ) : (
                                    ``
                                  )}
                                  {item.instagram ? (
                                    <li className="mx-4">
                                      <a
                                        href={item.instagram}
                                        target="_blank"
                                        className="rounded-full block w-12 h-12 flex items-center justify-center bg-orange-800 text-white"
                                      >
                                        <InstagramIcon className="w-8 h-8 fill-current" />
                                      </a>
                                    </li>
                                  ) : (
                                    ``
                                  )}
                                  {item.vk ? (
                                    <li className="mx-4">
                                      <a
                                        href={item.vk}
                                        target="_blank"
                                        className="rounded-full block w-12 h-12 flex items-center justify-center bg-orange-800 text-white"
                                      >
                                        <VkIcon className="w-7 h-7 fill-current" />
                                      </a>
                                    </li>
                                  ) : (
                                    ``
                                  )}
                                  {item.tiktok ? (
                                    <li className="mx-4">
                                      <a
                                        href={item.tiktok}
                                        target="_blank"
                                        className="rounded-full block w-12 h-12 flex items-center justify-center bg-orange-800 text-white"
                                      >
                                        <TikTokIcon className="w-7 h-7 fill-current" />
                                      </a>
                                    </li>
                                  ) : (
                                    ``
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
                <a
                  className="flex text-yellow-900 cursor-pointer items-center justify-center absolute w-12 h-12 top-1/3 xl:top-1/2 -left-16 -mt-6"
                  onClick={() => {
                    window.skipScroll = true;
                    history.replace("/volunteer/" + prevId());
                  }}
                >
                  <ArrowPrevIcon className="w-4 h-6 xl:w-8 xl:h-12 stroke-current" />
                </a>
                <a
                  className="flex text-yellow-900 cursor-pointer items-center justify-center absolute w-12 h-12 top-1/3 xl:top-1/2 -right-16 -mt-6"
                  onClick={() => {
                    window.skipScroll = true;
                    history.replace("/volunteer/" + nextId());
                  }}
                >
                  <ArrowNextIcon className="w-4 h-6 stroke-current xl:w-8 xl:h-12" />
                </a>
              </div>
            </div>
            <div className="mb-6 flex items-center justify-center xl:hidden">
              <a
                href={window.App.data.partners[getIndex()].site}
                target="_blank"
                className="w-64 text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white text-center focus:outline-none"
              >
                Стать волонтёром
              </a>
            </div>
          </div>
          <div ref={formRef}>
            <h2 className="text-2xl text-center font-bold mb-4 mt-8 xl:uppercase xl:text-left xl:mb-6 xl:mt-32">
              Поездка в приют
            </h2>
            <div className="xl:flex">
              <div className="xl:w-1/2 xl:pr-32">
                <div className="my-6 xl:my-0 border-7 border-yellow-900 rounded-3xl overflow-hidden">
                  <div
                    className="relative bg-center bg-no-repeat bg-cover w-full pb-100%"
                    style={{ backgroundImage: `url(${LoveImg})` }}
                  ></div>
                </div>
              </div>
              <div className="xl:w-1/2">
                <p className="mb-4 text-lg text-justify xl:text-xl">
                  Для того, чтобы познакомиться с животными поближе, ты можешь
                  съездить в приют в своем городе
                </p>
                <div>
                  <div className="mb-4 w-72 m-auto xl:m-0">
                    <ShelterForm partner_id={id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px"></div>
    </section>
  );
}

export default Volunteer;
