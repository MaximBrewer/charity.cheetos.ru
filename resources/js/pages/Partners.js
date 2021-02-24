import React from "react";
import Parser from "html-react-parser";
import { Link } from "react-router-dom";
import { InstagramIcon, VkIcon, TikTokIcon, SiteIcon } from "../Icons";

function Partners() {
  return (
    <section id="partners" className="bg-white">
      <div className="w-full h-px"></div>
      <div className="max-w-sm xl:max-w-full mx-auto">
        <div className="container mx-auto">
          <h2
            className={`text-2xl font-bold text-center mt-10 xl:text-left xl:mt-16`}
          >
            Протяни лапу дружбы
          </h2>
          <h2
            className={`text-2xl font-bold text-center my-4 xl:mb-16 xl:text-left`}
          >
            Фонды партнеры акции:
          </h2>
          {window.App.data.partners.map((item, index) => (
            <div key={index}>
              {index ? <hr className="hidden xl:block w-full" /> : ``}
              <div className={`my-12 xl:flex justify-between items-center`}>
                <div className={`xl:w-2/5 xl:order-1 xl:mr-24`}>
                  <div className="my-4 w-40 m-auto xl:w-72">
                    <div
                      className="relative bg-center bg-no-repeat bg-contain w-full pb-100%"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                  </div>
                </div>
                <div className={`xl:w-3/5 xl:order-2 xl:flex flex-col`}>
                  <div className="my-6 xl:my-3 text-xl text-center xl:text-left xl:order-1 xl:font-semibold xl:w-2/3">
                    {Parser(item.excerpt)}
                  </div>
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
                  <div className="my-6 xl:my-3 text-lg xl:order-2">
                    {Parser(item.body)}
                  </div>
                  <div className="xl:order-3 xl:flex">
                    <div className="my-6 flex items-center justify-center ">
                      <Link
                        to={`/volunteer/${item.id}`}
                        className="text-xl xl:text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none xl:mr-8"
                      >
                        Стать волонтером
                      </Link>
                    </div>
                    <div className="my-6 flex items-center justify-center">
                      <Link
                        to={`/volunteer/${item.id}#form`}
                        className="text-lg xl:text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none"
                      >
                        Заявка на поездку в приют
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-px"></div>
    </section>
  );
}

export default Partners;
