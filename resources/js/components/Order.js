import React, { useEffect, useState } from "react";
import useInputValue from "../components/input-value";
import client from "../api/client";
import { useAlert } from "react-alert";

// components

export default function Order() {
    const alert = useAlert();
    let name = useInputValue("name");
    let email = useInputValue("email");
    let phone = useInputValue("phone");
    let text = useInputValue("text");

    const handleSubmit = e => {
        e.preventDefault();

        client("/api/order", {
            body: {
                name: name.value ? name.value : "",
                email: email.value ? email.value : "",
                phone: phone.value ? phone.value : "",
                text: text.value ? text.value : ""
            }
        })
            .then(data => {
                alert.show(data.message, {
                    timeout: 3000,
                    type: "success"
                });
                name.setValue("");
                email.setValue("");
                phone.setValue("");
                text.setValue("");
            })
            .catch(error => {
                error.json().then(({ errors }) => {
                    [name, email, phone].forEach(({ parseServerError }) =>
                        parseServerError(errors)
                    );
                });
            });
    };

    const onTextAreaChange = (e, func) => {
        e.target.style.height = "auto";
        e.target.style.overflow = "hidden";
        e.target.style.height = e.target.scrollHeight + "px";
        func(e);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap flex-col">
                    <div className="md-input-main w-full lg:w-12/12 my-5">
                        <div className={`md-input-box`}>
                            <input
                                type="text"
                                className={`md-input bg-transparent py-2 border-b border-gray-50 text-gray-50 ${
                                    name.error ? "border-red-200" : ""
                                }`}
                                placeholder=" "
                                id="name"
                                name="name"
                                required
                                {...name.bind}
                            />
                            <label
                                htmlFor="name"
                                className="md-label text-gray-50"
                            >
                                Имя
                            </label>
                        </div>
                        {name.error && (
                            <p className="text-red-200 text-xs pt-2">
                                {name.error}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap flex-col">
                    <div className="md-input-main w-full lg:w-12/12 my-5">
                        <div className={`md-input-box`}>
                            <input
                                type="email"
                                className={`md-input bg-transparent py-2 border-b border-gray-50 text-gray-50 ${
                                    email.error ? "border-red-200" : ""
                                }`}
                                placeholder=" "
                                id="email"
                                name="email"
                                required
                                {...email.bind}
                            />
                            <label
                                htmlFor="email"
                                className="md-label text-gray-50"
                            >
                                E-mail
                            </label>
                        </div>
                        {email.error && (
                            <p className="text-red-200 text-xs pt-2">
                                {email.error}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap flex-col">
                    <div className="md-input-main w-full lg:w-12/12 my-5">
                        <div className={`md-input-box`}>
                            <input
                                type="text"
                                className={`md-input bg-transparent py-2 border-b border-gray-50 text-gray-50 ${
                                    phone.error ? "border-red-200" : ""
                                }`}
                                placeholder=" "
                                id="phone"
                                name="phone"
                                required
                                {...phone.bind}
                            />
                            <label
                                htmlFor="phone"
                                className="md-label text-gray-50"
                            >
                                Телефон
                            </label>
                        </div>
                        {phone.error && (
                            <p className="text-red-200 text-xs pt-2">
                                {phone.error}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap flex-col">
                    <div className="md-input-main w-full lg:w-12/12 my-5 mt-6">
                        <div className={`md-input-box`}>
                            <textarea
                                type="text"
                                className={`md-input bg-transparent py-2 border-b border-gray-50 text-gray-50 ${
                                    text.error ? "border-red-200" : ""
                                }`}
                                placeholder=" "
                                id="text"
                                name="text"
                                required
                                value={text.bind.value}
                                onChange={e => {
                                    onTextAreaChange(e, text.bind.onChange);
                                }}
                            />
                            <label
                                htmlFor="text"
                                className="md-label text-gray-50"
                            >
                                Краткое описание
                            </label>
                        </div>
                        {text.error && (
                            <p className="text-red-200 text-xs pt-2">
                                {text.error}
                            </p>
                        )}
                    </div>
                </div>
                <div className="py-6 w-full">
                    <div className="text-center flex justify-start">
                        <button
                            className=" transform-gpu transition-transform hover:scale-110 flex items-center justify-center cursor-pointer text-sm w-44 h-10 bg-orange-500 mr-4 hover:bg-orange-600"
                            type="button"
                            onClick={handleSubmit}
                        >
                            Сохранить
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
