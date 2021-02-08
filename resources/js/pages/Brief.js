import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../images/logo.png";
import { useAlert } from "react-alert";
import client from "../api/client";
import Footer from "../components/Footer";

const Brief = () => {
    const alert = useAlert();

    const brandRef = useRef(null);
    const taskRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();

        client("/api/brief", {
            body: {
                brand: brandRef.current.textContent.trim(),
                task: taskRef.current.textContent.trim(),
                email: emailRef.current.textContent.trim(),
                phone: phoneRef.current.textContent.trim()
            }
        })
            .then(data => {
                alert.show(data.message, {
                    timeout: 3000,
                    type: "success",
                });
                brandRef.current.textContent = " ";
                taskRef.current.textContent = " ";
                emailRef.current.textContent = " ";
                phoneRef.current.textContent = " ";
            })
            .catch(error => {
                error.json().then(({ errors }) => {
                    let errorText = "";
                    for (error in errors) {
                        if (errors[error]) {
                            errorText += errors[error][0] + "\n";
                        }
                    }
                    alert.show(errorText, {
                        timeout: 7000,
                        type: "error",
                    });
                });
            });
    };

    return (
        <div className="overflow-hidden relative flex flex-col min-h-screen">
            <section id="header">
                <div className="container mx-auto px-4 sm:px-0">
                    <div className="flex pt-12">
                        <Link
                            to="/"
                            className="block logo bg-center bg-no-repeat bg-contain w-24 h-24"
                            style={{ backgroundImage: `url(${LogoImage})` }}
                        ></Link>
                        <div className="flex-grow flex justify-center"></div>
                    </div>
                </div>
            </section>
            <section className="flex-grow">
                <div className="container mx-auto px-4 sm:px-0">
                    <p className="text-white text-2xl pt-8 sm:pt-24 pb-16">
                        Привет, команда Kuba.Digital! Хочу создать крутую
                        рекламную кампанию для своего бренда{" "}
                        <span
                            ref={brandRef}
                            className="border-b outline-none"
                            contentEditable
                        >
                            &emsp;
                        </span>
                        . <br />
                        Коротко опишу задачу:{" "}
                        <span
                            ref={taskRef}
                            className="border-b outline-none"
                            contentEditable
                        >
                            &emsp;
                        </span>
                        . Будет здорово, если мы вместе найдем креативное
                        решение! Расскажите о своей ценовой политике и подробнее
                        о форматах в личном письме. Мой электронный адрес:{" "}
                        <span
                            ref={emailRef}
                            className="border-b outline-none"
                            contentEditable
                        >
                            &emsp;
                        </span>
                        . Номер телефона, если письмо вдруг затеряется в пути:{" "}
                        <span
                            ref={phoneRef}
                            className="border-b outline-none"
                            contentEditable
                        >
                            &emsp;
                        </span>
                        .
                    </p>
                    <div className="pb-16 w-full">
                        <div className="text-center flex justify-center items-center">
                            <button
                                className=" transform-gpu transition-transform hover:scale-110 flex items-center justify-center cursor-pointer text-sm w-44 h-10 bg-orange-500 mr-4 hover:bg-orange-600"
                                type="button"
                                onClick={handleSubmit}
                            >
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Brief;
