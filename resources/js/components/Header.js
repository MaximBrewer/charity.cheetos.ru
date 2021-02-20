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

  const menuItems = [
    { props: { to: "/about" }, text: "О проекте" },
    { props: { to: "/news" }, text: "Новости" },
    { props: { to: "/partners" }, text: "Фонды" },
    { props: { to: "/rules" }, text: "Правила акции" },
    { props: { to: "/school" }, text: "Школа будущих хозяев" },
    {
      props: {
        href: window.App.data.doubleLink,
        target: "_blank",
        onClick: () => {
          setOpened(false);
        },
      },
      text: "Удвоить помощь в Магнит",
    },
    { props: { to: "/getpet" }, text: "Стать хозяином" },
    {
      props: {
        onClick: () => {
          setOpened(false);
          setModalBody(<FaqModal />);
          setShowModal(true);
        },
      },
      text: "FAQ",
    },
  ];

  return (
    <section
      id="header"
      className={`${
        opened || showModal ? `bg-orange-900 shadow-lg bg-80 xl:bg-160` : ``
      }  z-20 relative`}
      style={opened || showModal ? { backgroundImage: `url(${StepsImg})` } : {}}
    >
      <div className="max-w-sm xl:max-w-full mx-auto">
        <div className="container mx-auto px-4">
          <nav className="text-white">
            <div className="flex justify-between items-center h-16 py-2 z-30 relative">
              <div className="xl:hidden">
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
              <div className="w-full h-full xl:w-auto">
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
              <div className="items-center hidden xl:block text-base font-bold w-full">
                <ul className="pl-8 pt-2 pb-3 xl:pt-6 flex items-center justify-between w-full">
                  {menuItems.map((item, index) => (
                    <li className="block py-1 px-1 xl:py-3 xl:px-2 whitespace-nowrap uppercase" key={index}>
                      {item.props.to ? (
                        <NavLink
                          {...item.props}
                          activeClassName="active"
                        >
                          {item.text}
                        </NavLink>
                      ) : (
                        <a {...item.props}>{item.text}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center xl:hidden">
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
              className={`absolute top-16 left-0 z-20 w-full transition-all overflow-hidden ${
                opened ? "" : "hidden"
              }`}
            >
              <div
                className={`relative text-black text-center text-lg uppercase bg-white p-6 rounded-b-2xl`}
              >
                <div
                  className="w-full h-1 absolute -top-1 left-0"
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
                  {menuItems.map((item, index) => (
                    <li className="py-1" key={index}>
                      {item.props.to ? (
                        <NavLink
                          {...item.props}
                          activeClassName="active"
                          onClick={() => {
                            setOpened(false);
                          }}
                        >
                          {item.text}
                        </NavLink>
                      ) : (
                        <a {...item.props}>{item.text}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Header;
