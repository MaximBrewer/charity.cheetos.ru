import React, { useEffect, useState } from "react";
import useInputValue from "./input-value";
import client from "../api/client";
import { useAlert } from "react-alert";

// components

export default function FaqForm() {
  const alert = useAlert();
  let name = useInputValue("name");
  let email = useInputValue("email");
  let question = useInputValue("question");

  const handleSubmit = (e) => {
    e.preventDefault();

    client("/api/faq", {
      body: {
        name: name.value ? name.value : "",
        email: email.value ? email.value : "",
        question: question.value ? question.value : "",
      },
    })
      .then((data) => {
        alert.show(data.message, {
          timeout: 3000,
          type: "success",
        });
        name.setValue("");
        email.setValue("");
        question.setValue("");
      })
      .catch((error) => {
        error.json().then(({ errors }) => {
          [name, email, question].forEach(({ parseServerError }) =>
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
                className={`focus:outline-none bg-white py-2 px-4 rounded-xl border-transparent border w-full ${
                  name.error ? "border-red-500" : ""
                }`}
                placeholder="Имя"
                id="name"
                name="name"
                required
                {...name.bind}
              />
            </div>
            {name.error && (
              <p className="text-white text-xs">{name.error}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <input
                type="email"
                className={`focus:outline-none bg-white py-2 px-4 rounded-xl border-transparent border w-full ${
                  email.error ? "border-red-500" : ""
                }`}
                placeholder="E-mail"
                id="email"
                name="email"
                required
                {...email.bind}
              />
            </div>
            {email.error && (
              <p className="text-white text-xs">{email.error}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <textarea
                className={`block focus:outline-none h-48 bg-white py-2 px-4 rounded-xl border-transparent border w-full ${
                  question.error ? "border-red-500" : ""
                }`}
                placeholder=" "
                id="question"
                name="question"
                required
                value={question.bind.value}
                onChange={(e) => {
                  onTextAreaChange(e, question.bind.onChange);
                }}
              />
            </div>
            {question.error && (
              <p className="text-white text-xs">{question.error}</p>
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
