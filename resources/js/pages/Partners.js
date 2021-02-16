import React from "react";
import Parser from "html-react-parser";
import { Link } from "react-router-dom";
import { InstagramIcon, VkIcon, TikTokIcon, SiteIcon } from "../Icons";

function Partners() {
  return (
    <section id="partners" className="bg-white">
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <div className="w-full h-px"></div>
        <h2 className={`text-2xl font-bold text-center mt-10`}>
          Протяни лапу дружбы
        </h2>
        <h2 className={`text-2xl font-bold text-center uppercase my-4`}>
          Фонды партнеры акции:
        </h2>
        {window.App.data.partners.map((item, index) => (
          <div key={index} className={`my-12`}>
            <div className="my-4 w-40 m-auto">
              <div
                className="relative bg-center bg-no-repeat bg-contain w-full pb-100%"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
            <div className="my-6 text-xl text-center">{item.excerpt}</div>
            <ul className="my-6 flex items-center justify-between">
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
            <div className="my-6 text-xl">{Parser(item.body)}</div>
            <div className="my-6 flex items-center justify-center">
              <Link
                to="/volunteer"
                className="text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none"
              >
                Стать волонтером
              </Link>
            </div>
            <div className="my-6 flex items-center justify-center">
              <button
                to="/school"
                className="text-lg bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none"
              >
                Заявка на поездку в приют
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-px"></div>
    </section>
  );
}

export default Partners;
