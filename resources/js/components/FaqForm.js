import React, { useEffect, useState } from "react";
import useInputValue from "./input-value";
import client from "../api/client";
import { useAlert } from "react-alert";

// components

export default function FaqForm() {
  const alert = useAlert();
  let name = useInputValue("name");
  let email = useInputValue("email");
  let phone = useInputValue("phone");
  let text = useInputValue("text");

  const handleSubmit = (e) => {
    e.preventDefault();

    client("/api/order", {
      body: {
        name: name.value ? name.value : "",
        email: email.value ? email.value : "",
        text: text.value ? text.value : "",
      },
    })
      .then((data) => {
        alert.show(data.message, {
          timeout: 3000,
          type: "success",
        });
        name.setValue("");
        email.setValue("");
        text.setValue("");
      })
      .catch((error) => {
        error.json().then(({ errors }) => {
          [name, email].forEach(({ parseServerError }) =>
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
      <form onSubmit={handleSubmit} className="w-4/5 m-auto">
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <input
                type="text"
                className={`bg-white py-2 px-4 rounded-xl border-transparent bordered w-full ${
                  name.error ? "border-red-200" : ""
                }`}
                placeholder="Имя"
                id="name"
                name="name"
                required
                {...name.bind}
              />
            </div>
            {name.error && (
              <p className="text-red-200 text-xs pt-2">{name.error}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <input
                type="email"
                className={`bg-white py-2 px-4 rounded-xl border-transparent bordered w-full ${
                  email.error ? "border-red-200" : ""
                }`}
                placeholder="E-mail"
                id="email"
                name="email"
                required
                {...email.bind}
              />
            </div>
            {email.error && (
              <p className="text-red-200 text-xs pt-2">{email.error}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <textarea
                type="text"
                className={`h-48 bg-white py-2 px-4 rounded-xl border-transparent bordered w-full ${
                  text.error ? "border-red-200" : ""
                }`}
                placeholder=" "
                id="text"
                name="text"
                required
                value={text.bind.value}
                onChange={(e) => {
                  onTextAreaChange(e, text.bind.onChange);
                }}
              />
            </div>
            {text.error && (
              <p className="text-red-200 text-xs pt-2">{text.error}</p>
            )}
          </div>
        </div>
        <div className="my-6 flex items-center justify-center">
          <button
            className="w-64 text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none"
            type="button"
            onClick={handleSubmit}
          >
            Отправить
          </button>
        </div>
      </form>
    </>
  );
}
