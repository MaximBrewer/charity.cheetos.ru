import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../images/logo.png";
import ChestorImg from "../../images/chestor.png";
import ChestorImgXl from "../../images/chestor-xl.png";
import { InstagramIcon, VkIcon, TikTokIcon } from "../Icons";

function Links({ className = "" }) {
  return (
    <p className={`mt-4 mb-8 text-center ${className}`}>
      <Link to="/rules" className="hover:underline">
        Правила акции
      </Link>
      <br />
      <Link to="/agreement" className="hover:underline">
        Пользовательское соглашение
      </Link>
      <br /> © ВСЕ ПРАВА ЗАЩИЩЕНЫ
    </p>
  );
}
function Logo({ className = "" }) {
  return (
    <a
      href="https://cheetos.ru"
      target="_blank"
      className={`block bg-center bg-no-repeat bg-contain ${className}`}
      style={{
        backgroundImage: `url(${LogoImg})`,
        paddingTop: "59.83%",
      }}
    ></a>
  );
}
function Social({ className = "" }) {
  const sendToGmData = (data) => {
    dataLayer.push(data);
    sendDataToGTM(data);
  };
  return (
    <>
      <h4 className={`my-4 text-center ${className}`}>
        Мы в социальных сетях:
      </h4>
      <ul className={`flex items-center justify-center ${className}`}>
        <li className="mx-4">
          <a
            href={window.App.data.instagram}
            target="_blank"
            onClick={() => {
              let data = {
                event: "GAEvent",
                eventName: "social_visit",
                eventCategory: "Social",
                eventAction: "Visit",
                eventLabel: "Instagram",
                eventContext: null,
                eventValue: null,
              };
              sendToGmData(data);
            }}
            className="rounded-full block w-12 h-12 xl:w-20 xl:h-20 flex items-center justify-center bg-orange-800 xl:bg-transparent text-white"
          >
            <InstagramIcon className="w-8 h-8 xl:w-20 xl:h-20 fill-current" />
          </a>
        </li>
        <li className="mx-4">
          <a
            href={window.App.data.vk}
            target="_blank"
            onClick={() => {
              let data = {
                event: "GAEvent",
                eventName: "social_visit",
                eventCategory: "Social",
                eventAction: "Visit",
                eventLabel: "VK",
                eventContext: null,
                eventValue: null,
              };
              sendToGmData(data);
            }}
            className="rounded-full block w-12 h-12 xl:w-20 xl:h-20 flex items-center justify-center bg-orange-800 xl:bg-transparent text-white"
          >
            <VkIcon className="w-7 h-7 xl:w-16 xl:h-16 fill-current" />
          </a>
        </li>
        <li className="mx-4">
          <a
            href={window.App.data.tiktok}
            target="_blank"
            onClick={() => {
              let data = {
                event: "GAEvent",
                eventName: "social_visit",
                eventCategory: "Social",
                eventAction: "Visit",
                eventLabel: "TikTok",
                eventContext: null,
                eventValue: null,
              };
              sendToGmData(data);
            }}
            className="rounded-full block w-12 h-12 xl:w-20 xl:h-20 flex items-center justify-center bg-orange-800 xl:bg-transparent text-white"
          >
            <TikTokIcon className="w-7 h-7 xl:w-16 xl:h-16 fill-current" />
          </a>
        </li>
      </ul>
    </>
  );
}

function Footer() {
  return (
    <section id="footer">
      <div className="w-full bg-white hidden xl:block h-36"></div>
      <div
        className={`hidden xl:flex container mx-auto justify-between items-center pb-12`}
      >
        <div className="w-96">
          <Logo className="w-72" />
        </div>
        <div className="w-auto text-white">
          <div className="mt-16">
            <Social className="text-xl" />
          </div>
          <div className="mt-8">
            <Links className="text-base" />
          </div>
        </div>
        <div className="w-96">
          <img src={ChestorImgXl} alt="" title="" className="-mt-16 w-full" />
        </div>
      </div>
      <div
        className={`xl:hidden ${
          location && location.pathname != "/faq" ? `bg-white` : ``
        }`}
      >
        <div className={`container mx-auto py-4`}>
          <div className="w-full h-full">
            <div className="w-32 m-auto">
              <Logo className="w-full" />
            </div>
          </div>
          <div className="my-4">
            <Social />
            <Links />
          </div>
        </div>
      </div>
      <div className="max-w-sm xl:max-w-full mx-auto">
        <div className="xl:hidden container mx-auto mb-12 py-4">
          <div className="px-10">
            <div className="container mx-auto">
              <div className="pb-8">
                <div className="w-full h-1"></div>
                <img src={ChestorImg} alt="" title="" className="-mt-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
