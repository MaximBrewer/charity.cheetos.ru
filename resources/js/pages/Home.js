import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../images/logo.png";
import EurikaImage from "../../images/eurika.png";
import MoonImage from "../../images/moon.png";
import RocketImage from "../../images/rocket.gif";
import StarImage from "../../images/star.png";
import EllipseImage from "../../images/ellipse.png";
import MobileImage from "../../images/mobile.png";
import RuporImage from "../../images/rupor.png";
import NoteImage from "../../images/note.png";
import DeskImage from "../../images/desk.png";
import PairImage from "../../images/pair.png";
import CompImage from "../../images/comp.png";
import FlashImage from "../../images/flash.png";

import MailboxImage from "../../images/mailbox.gif";

import AdrBrand from "../../images/brands/adrenalline.png";
import DomikBrand from "../../images/brands/domik.png";
import HuggiesBrand from "../../images/brands/huggies.png";
import ImunelleBrand from "../../images/brands/imunelle.png";
import KinderBrand from "../../images/brands/kinder.png";
import PobedaBrand from "../../images/brands/pobeda.png";
import RaffaelloBrand from "../../images/brands/raffaelo.png";
import SeverstalBrand from "../../images/brands/severstal.png";

import OrderFrom from "../components/Order";
import Footer from "../components/Footer";

import { ArrowDown } from "../Icons";
import { Link as ScrollLink } from "react-scroll";

function Home() {
    const homeRef = useRef(null);
    const servicesRef = useRef(null);
    const clientsRef = useRef(null);
    const contactsRef = useRef(null);
    const orderRef = useRef(null);

    const [active, setActive] = useState("home");
    const [opened, setOpened] = useState(false);

    const toggleOpened = () => {
        setOpened(prevState => !prevState);
    };

    const Devider = () => (
        <div className="h-0.5 w-1/2 mt-14 mb-24 bg-opacity-60 bg-white hidden sm:block"></div>
    );

    const StarIcon = () => (
        <div
            className="inline-block bg-center bg-no-repeat bg-contain w-6 h-6 mr-4"
            style={{ backgroundImage: `url(${StarImage})` }}
        ></div>
    );

    return (
        <div className="overflow-hidden relative flex flex-col min-h-screen">
            <section id="header">
                <div className="container mx-auto px-4 sm:px-0">
                    <nav className="">
                        <div className="flex pt-6 sm:pt-12 justify-between items-start">
                            <Link
                                to="/"
                                className="transform-gpu transition-transform hover:scale-110 block logo bg-center bg-no-repeat bg-contain w-24 h-24"
                                style={{ backgroundImage: `url(${LogoImage})` }}
                            ></Link>
                            <div className="flex items-center sm:hidden">
                                <button
                                    className="inline-flex items-center justify-center text-white hover:text-white outline-none focus:outline-none"
                                    aria-expanded="false"
                                    onClick={() => toggleOpened()}
                                >
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <svg
                                        className="block w-12"
                                        viewBox="0 0 29 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="29"
                                            height="4"
                                            fill="white"
                                        />
                                        <rect
                                            y="6"
                                            width="29"
                                            height="4"
                                            fill="white"
                                        />
                                        <rect
                                            y="12"
                                            width="29"
                                            height="4"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-grow justify-center hidden sm:flex">
                                <ul className="flex items-start">
                                    <li
                                        className={`transform-gpu transition-transform hover:scale-125 w-20 text-center mx-6 text-white cursor-pointer border-b-2 border-opacity-20 ${
                                            active == "home"
                                                ? `font-bold border-black`
                                                : `border-transparent`
                                        }`}
                                    >
                                        <ScrollLink
                                            activeclassName="active"
                                            to="home"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            onClick={() => {
                                                setActive("home");
                                            }}
                                        >
                                            Главная
                                        </ScrollLink>
                                    </li>
                                    <li
                                        className={`transform-gpu transition-transform hover:scale-125 w-20 text-center mx-6 text-white cursor-pointer border-b-2 border-opacity-20 ${
                                            active == "services"
                                                ? `font-bold border-black`
                                                : `border-transparent`
                                        }`}
                                    >
                                        <ScrollLink
                                            activeclassName="active"
                                            to="services"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            onClick={() => {
                                                setActive("services");
                                            }}
                                        >
                                            Услуги
                                        </ScrollLink>
                                    </li>
                                    <li
                                        className={`transform-gpu transition-transform hover:scale-125 w-20 text-center mx-6 text-white cursor-pointer border-b-2 border-opacity-20 ${
                                            active == "clients"
                                                ? `font-bold border-black`
                                                : `border-transparent`
                                        }`}
                                    >
                                        <ScrollLink
                                            activeclassName="active"
                                            to="clients"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            onClick={() => {
                                                setActive("clients");
                                            }}
                                        >
                                            Клиенты
                                        </ScrollLink>
                                    </li>
                                    <li
                                        className={`transform-gpu transition-transform hover:scale-125 w-20 text-center mx-6 text-white cursor-pointer border-b-2 border-opacity-20 ${
                                            active == "contacts"
                                                ? `font-bold border-black`
                                                : `border-transparent`
                                        }`}
                                    >
                                        <ScrollLink
                                            activeclassName="active"
                                            to="contacts"
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            onClick={() => {
                                                setActive("contacts");
                                            }}
                                        >
                                            Контакты
                                        </ScrollLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className={`sm:hidden fixed top-0 right-0 h-screen bg-white z-10 p-6 shadow-sm w-4/5 transition-all`}
                            style={{
                                transform: opened
                                    ? "translate(0,0)"
                                    : "translate(100%,0)"
                            }}
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <div className="">
                                    <ScrollLink
                                        activeclassName="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => {
                                            setOpened(false);
                                            setActive("home");
                                        }}
                                    >
                                        Главная
                                    </ScrollLink>
                                </div>
                                <div className="">
                                    <ScrollLink
                                        activeclassName="active"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => {
                                            setOpened(false);
                                            setActive("services");
                                        }}
                                    >
                                        Услуги
                                    </ScrollLink>
                                </div>
                                <div className="">
                                    <ScrollLink
                                        activeclassName="active"
                                        to="clients"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => {
                                            setOpened(false);
                                            setActive("clients");
                                        }}
                                    >
                                        Клиенты
                                    </ScrollLink>
                                </div>
                                <div className="">
                                    <ScrollLink
                                        activeclassName="active"
                                        to="contacts"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => {
                                            setOpened(false);
                                            setActive("contacts");
                                        }}
                                    >
                                        Контакты
                                    </ScrollLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
            <section id="home" ref={homeRef}>
                <div className="container mx-auto px-4 sm:px-0">
                    <div className="flex">
                        <div className="sm:flex flex-col justify-end items-start sm:w-1/2">
                            <h1
                                className="h1-bg-moon text-5xl sm:text-6xl font-bold text-orange-500 pt-12 pb-12 sm:pb-10 sm:mt-36 font-druk"
                                style={{
                                    background: `url(${MoonImage}) no-repeat top 10% right/150px 150px`
                                }}
                            >
                                kuba. digital.
                                <br />
                                influens.
                            </h1>
                            <h3 className="mb-10 text-2xl text-white">
                                Kuba.Digital — рекламное агентство
                                <br className="hidden sm:inline" />
                                с&nbsp;большим потенциалом, и&nbsp;мы реализуем
                                <br className="hidden sm:inline" />
                                его на все 100%
                            </h3>
                            <div className="flex justify-between sm:justify-start mb-14">
                                <ScrollLink
                                    activeclassName="active"
                                    className=" transform-gpu transition-transform hover:scale-110 flex items-center justify-center cursor-pointer font-sans font-semibold text-sm w-full sm:w-44 h-10 bg-orange-500 mr-4 hover:bg-orange-600"
                                    to="order"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Оставить заявку
                                </ScrollLink>
                                <Link
                                    to="/brief"
                                    className=" transform-gpu transition-transform hover:scale-110 flex items-center font-sans font-semibold justify-center  text-sm w-full sm:w-44 h-10 bg-white hover:bg-gray-100"
                                >
                                    Заполнить бриф
                                </Link>
                            </div>
                            <div className="hidden sm:block">
                                <a onClick={() => {}} className="flex mb-10">
                                    <ArrowDown className="h-16" />
                                    <ArrowDown className="h-16 mx-4" />
                                    <ArrowDown className="h-16" />
                                </a>
                            </div>
                        </div>
                        <div
                            className="hidden sm:flex items-center justify-center relative w-1/2 rocket-banner"
                            style={{
                                background: `url(${EurikaImage}) no-repeat center center/contain, url(${RocketImage}) no-repeat left -10% center/50%, url(${MoonImage}) no-repeat top 10% right/25%`
                            }}
                        ></div>
                    </div>
                </div>
            </section>
            <Devider />
            <section
                id="services"
                ref={servicesRef}
                className="relative bg-center bg-no-repeat bg-contain mt-20 mb-20 sm:mt-0 sm:mb-20"
                style={{ backgroundImage: `url(${EllipseImage})` }}
            >
                <div className="container mx-auto px-4 sm:px-0">
                    <h4 className="uppercase text-white mb-16 text-lg">
                        — наши УСЛУГИ
                    </h4>
                    <div className="sm:grid grid-cols-3 gap-16">
                        <div className="group sm:pt-64 mb-16 sm:mb-0 transform-gpu transition-transform hover:scale-110 cursor-pointer">
                            <div
                                style={{
                                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)"
                                }}
                                className="rounded-3xl py-28 px-14 y-6 px-4 flex items-center justify-center bg-purple-700 bg-opacity-50 group-hover:bg-orange-500 group-hover:bg-opacity-100 group-hover:z-10"
                            >
                                <div
                                    className="relative bg-center bg-no-repeat bg-contain w-full"
                                    style={{
                                        backgroundImage: `url(${MobileImage})`,
                                        paddingTop: "100%"
                                    }}
                                ></div>
                            </div>
                            <h4 className="py-6 text-5xl text-center text-white font-bold">
                                SMM
                            </h4>
                            <ul className="pl-4">
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Анализ и исследования</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Поддержка и продвижение</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Креатив и дизайн</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Модерация кампаний</span>
                                </li>
                            </ul>
                        </div>
                        <div className="group mb-16 sm:mb-0 transform-gpu transition-transform hover:scale-110 cursor-pointer">
                            <div
                                style={{
                                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)"
                                }}
                                className="rounded-3xl py-28 px-14 y-6 px-4 flex items-center justify-center bg-purple-700 bg-opacity-50 group-hover:bg-orange-500 group-hover:bg-opacity-100 group-hover:z-10"
                            >
                                <div
                                    className="relative bg-center bg-no-repeat bg-contain w-full"
                                    style={{
                                        backgroundImage: `url(${RuporImage})`,
                                        paddingTop: "100%"
                                    }}
                                ></div>
                            </div>
                            <h4 className="py-6 text-5xl text-center text-white font-bold">
                                БЛОГЕРЫ
                            </h4>
                            <ul className="pl-4">
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Креатив и стратегия</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Менеджмент кампаний</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Аналитика</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Медиапланирование</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span> Отчетность</span>
                                </li>
                            </ul>
                        </div>
                        <div className="group sm:pt-64 mb-16 sm:mb-0 transform-gpu transition-transform hover:scale-110 cursor-pointer">
                            <div
                                style={{
                                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)"
                                }}
                                className="rounded-3xl py-28 px-14 y-6 px-4 flex items-center justify-center bg-purple-700 bg-opacity-50 group-hover:bg-orange-500 group-hover:bg-opacity-100 group-hover:z-10"
                            >
                                <div
                                    className="relative bg-center bg-no-repeat bg-contain w-full"
                                    style={{
                                        backgroundImage: `url(${NoteImage})`,
                                        paddingTop: "100%"
                                    }}
                                ></div>
                            </div>
                            <h4 className="py-4 text-4xl text-center text-white font-bold">
                                WEB/MOBILE
                                <br />
                                PRODUCTION
                            </h4>
                            <ul className="pl-4">
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Веб-разработки</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Мобильные приложения</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Интерактивные проекты</span>
                                </li>
                                <li className="flex text-white pb-2">
                                    <StarIcon />
                                    <span>Комплексные решения</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Devider />
            <section
                id="advantages"
                className="relative bg-no-repeat mt-0 mb-20 sm:mb-12"
                style={{
                    backgroundImage: `url(${EllipseImage})`,
                    backgroundPosition: "right -100px center"
                }}
            >
                <div className="container mx-auto px-4 sm:px-0">
                    <h4 className="uppercase text-white mb-16 text-lg">
                        — наши преимущества
                    </h4>
                    <div className="flex flex-col">
                        <div className="flex mb-12 flex-col sm:flex-row">
                            <div className="sm:w-1/2 order-2 sm:order-1">
                                <div className="pr-6 flex justify-end">
                                    {" "}
                                    <div className="w-1/2 sm:w-full">
                                        <div
                                            className="mt-12 sm:mt-0 relative bg-left bg-top bg-no-repeat bg-contain"
                                            style={{
                                                backgroundImage: `url(${DeskImage})`,
                                                paddingTop: "100%"
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 order-1 sm:order-2">
                                <div className="sm:pl-6 sm:pt-4">
                                    <h3 className="mb-8 text-3xl sm:text-5xl font-bold text-orange-500">
                                        Что насчёт SMM?
                                    </h3>
                                    <p
                                        className="mb-12 text-lg sm:text-xl text-white font-light"
                                        style={{ maxWidth: "24rem" }}
                                    >
                                        Наша фишка - яркие решения. <br />В нише
                                        SMM мы создаем контент, который
                                        вдохновляет с первого взгляда и
                                        неизменно привлекает внимание к бренду.
                                    </p>
                                    <ScrollLink
                                        activeclassName="active"
                                        className="transform-gpu transition-transform hover:scale-110 flex items-center font-sans font-semibold justify-center cursor-pointer text-sm w-44 h-10 bg-orange-500 mr-4 hover:bg-orange-600"
                                        to="order"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Оставить заявку
                                    </ScrollLink>
                                </div>
                            </div>
                        </div>
                        <div className="flex mb-12">
                            <div className="w-full sm:w-1/2">
                                <div className="pr-6">
                                    <h3 className="mb-8 text-3xl sm:text-5xl font-bold text-orange-500">
                                        Расскажите про WEB/MOBILE - продакшн
                                    </h3>
                                    <p
                                        className="mb-12 text-lg sm:text-xl text-white font-light"
                                        style={{ maxWidth: "24rem" }}
                                    >
                                        Мы превращаем рекламу в искусство, к
                                        которому хочется приобщиться – на любой
                                        площадке. Результат будет одинаково
                                        хорош в разных форматах: корпоративный
                                        сайт, электронный коммерческий проект
                                        или высоконагруженная интерактивная
                                        платформа.
                                    </p>
                                    <ScrollLink
                                        activeclassName="active"
                                        className=" transform-gpu transition-transform hover:scale-110 flex items-center font-sans font-semibold justify-center cursor-pointer text-sm w-44 h-10 bg-white hover:bg-gray-100"
                                        to="order"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Оставить заявку
                                    </ScrollLink>
                                </div>
                            </div>
                            <div className="w-1/2 hidden sm:block">
                                <div className="pl-6 pt-4">
                                    {" "}
                                    <div className="w-1/2 sm:w-full">
                                        <div
                                            className="relative bg-left bg-top bg-no-repeat bg-contain"
                                            style={{
                                                backgroundImage: `url(${PairImage})`,
                                                paddingTop: "100%"
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex sm:mb-12 flex-col sm:flex-row">
                            <div className="w-full sm:w-1/2 order-2 sm:order-1">
                                <div className=" flex justify-end">
                                    {" "}
                                    <div className="w-1/2 sm:w-full hidden sm:block">
                                        <div
                                            className="relative bg-left bg-top bg-no-repeat bg-contain"
                                            style={{
                                                backgroundImage: `url(${CompImage})`,
                                                paddingTop: "100%"
                                            }}
                                        ></div>
                                    </div>
                                    <div className="w-2/3 sm:w-full sm:hidden">
                                        <div
                                            className="relative bg-left bg-top bg-no-repeat bg-contain"
                                            style={{
                                                backgroundImage: `url(${FlashImage})`,
                                                paddingTop: "100%"
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 order-1 sm:order-2">
                                <div className="sm:pl-6 sm:pt-4">
                                    <h3 className="mb-8 text-3xl sm:text-5xl font-bold text-orange-500">
                                        Как работаете с блогерами?
                                    </h3>
                                    <p
                                        className="mb-12 text-lg sm:text-xl text-white font-light"
                                        style={{ maxWidth: "24rem" }}
                                    >
                                        Мы легки на подъём и строги к себе –
                                        идеально сочетание, чтобы добиться
                                        отличного результата в сотрудничестве с
                                        популярными блогерами.
                                    </p>
                                    <ScrollLink
                                        activeclassName="active"
                                        className=" transform-gpu transition-transform hover:scale-110 flex items-center font-sans font-semibold justify-center cursor-pointer text-sm w-44 h-10 bg-orange-500 mb-6 hover:bg-orange-600"
                                        to="order"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Оставить заявку
                                    </ScrollLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Devider />
            <section id="clients" ref={clientsRef} className="pb-36">
                <div className="container mx-auto px-4 sm:px-0">
                    <h4 className="uppercase text-white mb-12 text-lg">
                        — наши клиенты
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-12">
                        <div className="flex items-center justo=ify-center">
                            <a className="transform-gpu transition-transform hover:scale-110 block px-6">
                                <img src={RaffaelloBrand} alt="" />
                            </a>
                        </div>
                        <div className="flex items-center justo=ify-center">
                            <a className="transform-gpu transition-transform hover:scale-110 block px-6">
                                <img src={PobedaBrand} alt="" />
                            </a>
                        </div>
                        <div className="flex items-center justo=ify-center">
                            <a className="transform-gpu transition-transform hover:scale-110 block px-6">
                                <img src={HuggiesBrand} alt="" />
                            </a>
                        </div>
                        <div className="flex items-center justo=ify-center">
                            <a className="transform-gpu transition-transform hover:scale-110 block px-6">
                                <img src={KinderBrand} alt="" />
                            </a>
                        </div>
                        <div className="flex items-center justo=ify-center">
                            <a className="transform-gpu transition-transform hover:scale-110 block px-6">
                                <img src={DomikBrand} alt="" />
                            </a>
                        </div>
                        <div className="flex items-center justo=ify-center">
                            <a className="transform-gpu transition-transform hover:scale-110 block px-6">
                                <img src={ImunelleBrand} alt="" />
                            </a>
                        </div>
                        <div className="flex items-center justo=ify-center">
                            <a className="transform-gpu transition-transform hover:scale-110 block px-6">
                                <img src={AdrBrand} alt="" />
                            </a>
                        </div>
                        <div className="flex items-center justo=ify-center">
                            <a className="transform-gpu transition-transform hover:scale-110 block px-6">
                                <img src={SeverstalBrand} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="order" ref={orderRef}>
                <div className="container mx-auto px-4 sm:px-0">
                    <h2 className="text-3xl sm:text-6xl font-bold text-orange-500 mb-2 sm:mb-6">
                        ХОЧУ СОТРУДНИЧАТЬ!
                    </h2>
                    <h3 className="text-xl sm:text-3xl font-semibold text-white mb-2 sm:mb-mb-12">
                        Оставьте заявку и мы обязательно вам ответим!
                    </h3>
                    <div className="flex">
                        <div className="w-full sm:w-1/2">
                            <div className="mb-8">
                                <OrderFrom />
                            </div>

                            <h4 className="text-3xl text-white mb-8 hidden sm:block">
                                Или заполните бриф самостоятельно!
                            </h4>
                            <Link
                                to="/brief"
                                className=" hidden sm:flex transform-gpu transition-transform hover:scale-110 items-center font-sans font-semibold justify-center  mb-16 flex items-center justify-center cursor-pointer text-sm w-44 h-10 bg-white hover:bg-gray-100"
                            >
                                Заполнить бриф
                            </Link>
                        </div>
                        <div className="w-1/2 flex items-end justify-center hidden sm:block">
                            <img
                                src={MailboxImage}
                                alt=""
                                style={{ width: "80%" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <img
                src={EllipseImage}
                className="absolute"
                alt=""
                style={{ zIndex: "-1", right: "-100px", bottom: "-100px" }}
            />
            <section id="contacts" ref={contactsRef}>
                <div className="container mx-auto px-4 sm:px-0"></div>
            </section>

            <Footer />
        </div>
    );
}

export default Home;
