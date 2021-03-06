import React, { useRef, useEffect } from "react";
import { useHistory, useParams, useLocation, Link } from "react-router-dom";
import Parser from "html-react-parser";
import { InstagramIcon, VkIcon, TikTokIcon, SiteIcon } from "../Icons";

function Partners({ sendToGmData }) {
  let history = useHistory();
  let location = useLocation();

  let refs = useRef({});

  window.App.data.partners.map(
    (item) => (refs.current["#" + item.slug] = React.createRef())
  );

  React.useEffect(() => {
    if (location.hash) refs.current[location.hash].current.scrollIntoView();
  }, [location]);

  return (
    <section id="partners" className="bg-white">
      <div className="w-full h-px"></div>
      <div className="max-w-sm xl:max-w-full mx-auto">
        <div className="container mx-auto">
          <h2 className={`text-2xl font-bold text-center mt-8 hidden xl:block`}>
            ПРОТЯНИ ЛАПУ ДРУЖБЫ
          </h2>
          <h2
            className={`text-2xl font-bold text-center xl:mb-16 mt-4 xl:mt-0`}
          >
            ФОНДЫ – ПАРТНЕРЫ&nbsp;АКЦИИ
          </h2>
          {window.App.data.partners.map((item, index) => (
            <div key={index} ref={refs.current["#" + item.slug]}>
              {index ? <hr className="hidden xl:block w-full" /> : ``}
              <div className={`my-12 xl:flex justify-between items-start`}>
                <div className={`xl:w-1/5 xl:order-1 xl:mr-24`}>
                  <div className="my-4 w-40 m-auto xl:my-0 xl:w-72">
                    <div
                      className="relative bg-center bg-no-repeat bg-contain w-full pb-100%"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                  </div>
                </div>
                <div className={`xl:w-4/5 xl:order-2 xl:flex flex-col`}>
                  <div className="my-6 xl:mb-3 xl:mt-0 text-xl text-center xl:text-left xl:order-1 xl:font-semibold xl:w-2/3 markdown">
                    {Parser(item.excerpt ?? "")}
                  </div>
                  <ul className="my-6 xl:my-3 flex items-center justify-between xl:justify-start xl:order-5">
                    {item.site ? (
                      <li className="mx-4 xl:ml-0">
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
                  <div className="my-6 xl:my-3 text-lg xl:order-2 markdown">
                    {Parser(item.body ?? "")}
                  </div>
                  <div className="xl:order-3 xl:flex">
                    <div className="my-6 flex items-center justify-center">
                      <a
                        href={`${item.site}`}
                        target={`_blank`}
                        className="text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-4 text-white font-bold text-center focus:outline-none xl:mr-8"
                        onClick={() => {
                          sendToGmData("becomeVolunteer");
                        }}
                      >
                        Стать волонтёром
                      </a>
                    </div>
                    <div className="my-6 flex items-center justify-center">
                      <Link
                        to={`/volunteer/${item.id}#form`}
                        className="text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-4 text-white font-bold text-center focus:outline-none xl:mr-8"
                        onClick={() => {
                          sendToGmData("travelOrder");
                        }}
                      >
                        Заявка на поездку в приют
                      </Link>
                    </div>
                    <div className="my-6 flex items-center justify-center ">
                      <a
                        href={`${item.how}`}
                        target={`_blank`}
                        className="text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-4 text-white font-bold text-center focus:outline-none xl:mr-8"
                        onClick={() => {
                          sendToGmData("donateFund");
                        }}
                      >
                        Как еще помочь фонду
                      </a>
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
