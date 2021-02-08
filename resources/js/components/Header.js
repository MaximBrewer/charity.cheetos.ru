import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BurgerIcon, CloseIcon } from "../Icons";
import StepsImg from "../../images/steps.png";
import LogoImg from "../../images/logo.png";

function Header({ isHome = false, toggleOpened, opened, setOpened }) {
  return (
    <section
      id="header"
      className="bg-orange-900 shadow-lg bg-80 mb-28 z-10 relative"
      style={{ backgroundImage: `url(${StepsImg})` }}
    >
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <nav className="text-white">
          <div className="flex justify-between items-center h-16 py-2 z-20 relative">
            <div className="">
              <a
                href=""
                className="border-3 flex items-center justify-center w-10 h-10 rounded-full text-xl font-bold border-white text-white"
              >
                ?
              </a>
            </div>
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
            <div className="flex items-center">
              <button
                className="inline-flex items-center justify-center text-white hover:text-white outline-none focus:outline-none"
                aria-expanded="false"
                onClick={() => toggleOpened()}
              >
                <span className="sr-only">Open main menu</span>
                <BurgerIcon className="w-10 h-5" />
              </button>
            </div>
          </div>
          <div
            className={`text-black text-center text-lg uppercase sm:hidden absolute top-16 left-0 bg-white p-6 z-10 w-full rounded-b-2xl transition-all overflow-hidden ${
              opened ? "" : "hidden"
            }`}
          >
            <div
              className="w-full h-16 -mt-16 absolute top-0 left-0"
              style={{ boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.15)" }}
            ></div>
            <a
              onClick={() => {
                setOpened(false);
              }}
            >
              <CloseIcon className="w-6 h-6 absolute right-6 top-6" />
            </a>
            <ul className="px-2 pt-2 pb-3 space-y-1">
              <li className="py-1">
                <NavLink activeClassName="active" to="/">
                  О проекте
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink activeClassName="active" to="/">
                  Новости
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink activeClassName="active" to="/">
                  Удвоить помощь в Магнит
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink activeClassName="active" to="/">
                  Школа будущих хозяев
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink activeClassName="active" to="/">
                  Фонды
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink activeClassName="active" to="/">
                  Правила акции
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink activeClassName="active" to="/">
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="pt-6 pb-4 text-3xl sm:text-4xl font-bold text-center">
              Протяни лапу дружбы
            </h2>
            <div className="-mb-28">
              <div className="my-4 border-7 border-yellow-900 rounded-3xl overflow-hidden">
                <div
                  id="responsiveVideoWrapper"
                  className="relative h-0 pb-fluid-video"
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/zihoyz0u_cs"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    autoPlay
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
