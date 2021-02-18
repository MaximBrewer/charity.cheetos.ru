import React, { useEffect } from "react";
import { Link, NavLink, Switch, useLocation } from "react-router-dom";
import { BurgerIcon, CloseIcon } from "../Icons";
import StepsImg from "../../images/steps.png";
import LogoImg from "../../images/logo.png";
import FaqModal from "../modals/Faq";
import { useModal } from "../context/modal";

function Header({ opened, setOpened }) {
  let { setModalBody, setShowModal, showModal } = useModal();
  let location = useLocation();
  useEffect(() => {
    setOpened(false);
    setShowModal(false);
    if (!window.skipScroll) document.documentElement.scrollTop = 0;
    window.skipScroll = false;
  }, [location]);

  return (
    <section
      id="header"
      className={`${
        opened || showModal ? `bg-orange-900 shadow-lg bg-80` : ``
      }  z-20 relative`}
      style={opened || showModal ? { backgroundImage: `url(${StepsImg})` } : {}}
    >
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <nav className="text-white">
          <div className="flex justify-between items-center h-16 py-2 z-30 relative">
            <div className="">
              <a
                onClick={() => {
                  setOpened(false);
                  setModalBody(<FaqModal />);
                  setShowModal(true);
                }}
                className="cursor-pointer border-3 flex items-center justify-center w-10 h-10 rounded-full text-xl font-bold border-white text-white"
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
                onClick={() => {
                  setOpened(true);
                  setShowModal(false);
                }}
              >
                <span className="sr-only">Open main menu</span>
                <BurgerIcon className="w-10 h-5" />
              </button>
            </div>
          </div>
          <div
            className={`text-black text-center text-lg uppercase absolute top-16 left-0 bg-white p-6 z-20 w-full rounded-b-2xl transition-all overflow-hidden ${
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
              className="cursor-pointer"
            >
              <CloseIcon className="w-6 h-6 absolute right-6 top-6 " />
            </a>
            <ul className="px-2 pt-2 pb-3 space-y-1">
              <li className="py-1">
                <NavLink
                  activeClassName="active"
                  to="/about"
                  onClick={() => {
                    setOpened(false);
                  }}
                >
                  О проекте
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink
                  activeClassName="active"
                  to="/news"
                  onClick={() => {
                    setOpened(false);
                  }}
                >
                  Новости
                </NavLink>
              </li>
              <li className="py-1">
                <a
                  target="_blank"
                  href={window.App.data.doubleLink}
                  onClick={() => {
                    setOpened(false);
                  }}
                >
                  Удвоить помощь в Магнит
                </a>
              </li>
              <li className="py-1">
                <NavLink
                  activeClassName="active"
                  to="/getpet"
                  onClick={() => {
                    setOpened(false);
                  }}
                >
                  Стать хозяином
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink
                  activeClassName="active"
                  to="/school"
                  onClick={() => {
                    setOpened(false);
                  }}
                >
                  Школа будущих хозяев
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink
                  activeClassName="active"
                  to="/partners"
                  onClick={() => {
                    setOpened(false);
                  }}
                >
                  Фонды
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink
                  activeClassName="active"
                  to="/rules"
                  onClick={() => {
                    setOpened(false);
                  }}
                >
                  Правила акции
                </NavLink>
              </li>
              
              <li className="py-1">
                <a
                  className="cursor-pointer"
                  onClick={() => {
                    setOpened(false);
                    setModalBody(<FaqModal />);
                    setShowModal(true);
                  }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
