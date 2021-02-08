import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../images/logo.png";
import ChestorImg from "../../images/chestor.png";
import { InstagramIcon, VkIcon, TikTokIcon } from "../Icons";
import StepsImg from "../../images/steps.png";

function Footer() {
  return (
    <section id="footer">
      <div className="container mx-auto px-4 sm:px-0 max-w-sm mb-16">
        <div className="w-full h-full">
          <div className="w-32 m-auto">
            <Link
              to="/"
              className="block bg-center bg-no-repeat bg-contain w-full"
              style={{
                backgroundImage: `url(${LogoImg})`,
                paddingTop: "59.83%",
              }}
            ></Link>
          </div>
        </div>
        <div className="my-4">
          <h4 className="my-4 text-center">Следите за нами в соц.сетях:</h4>
          <ul className="flex items-center justify-center">
            <li className="mx-4">
              <a
                href=""
                className="rounded-full block w-12 h-12 flex items-center justify-center bg-orange-800 text-white"
              >
                <InstagramIcon className="w-8 h-8 fill-current" />
              </a>
            </li>
            <li className="mx-4">
              <a
                href=""
                className="rounded-full block w-12 h-12 flex items-center justify-center bg-orange-800 text-white"
              >
                <VkIcon className="w-7 h-7 fill-current" />
              </a>
            </li>
            <li className="mx-4">
              <a
                href=""
                className="rounded-full block w-12 h-12 flex items-center justify-center bg-orange-800 text-white"
              >
                <TikTokIcon className="w-7 h-7 fill-current" />
              </a>
            </li>
          </ul>
          <p className="mt-4 mb-8 text-center">
            <a href="">Правила акции</a>
            <br />
            <a href="">Пользовательское соглашение</a>
            <br /> © ВСЕ ПРАВА ЗАЩИЩЕНЫ
          </p>
        </div>
      </div>
      <div
        className="px-10 bg-orange-900 shadow-lg bg-80 mt-16"
        style={{ backgroundImage: `url(${StepsImg})` }}
      >
        <div className="container mx-auto px-4 sm:px-0 max-w-sm">
          <div className="pb-8">
            <div className="w-full h-1"></div>
            <img src={ChestorImg} alt="" title="" className="-mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
