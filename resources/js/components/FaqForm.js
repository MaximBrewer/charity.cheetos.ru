import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useInputValue from "./input-value";
import client from "../api/client";
import { useModal } from "../context/modal";
import SuccessFaqModal from "../modals/SuccessFaq";
import { buttonClass } from "../Classes";

// components

export default function FaqForm({ modal = false }) {
  let { setModalBody } = useModal();
  const [category, setCategory] = useState("charity");

  let name = useInputValue("name");
  let email = useInputValue("email");
  let question = useInputValue("question");

  let location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/faq/dog":
        setCategory("dog");
        break;
      case "/faq/cat":
        setCategory("cat");
        break;
      case "/faq/stock":
        setCategory("stock");
        break;
      default:
        setCategory("charity");
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    client("/api/faq", {
      body: {
        name: name.value ? name.value : "",
        category: category,
        email: email.value ? email.value : "",
        question: question.value ? question.value : "",
      },
    })
      .then((data) => {
        name.setValue("");
        email.setValue("");
        question.setValue("");
        document.documentElement.scrollTop = 0;
        setModalBody(<SuccessFaqModal />);
      })
      .catch((error) => {
        console.log(error);
        error.json().then(({ errors }) => {
          [name, email, question].forEach(({ parseServerError }) =>
            parseServerError(errors)
          );
        });
      });
  };

  const onTextAreaChange = (e, func) => {
    func(e);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <input
                type="text"
                className={`focus:outline-none shadow-lg bg-white  ${
                  modal ? `` : `xl:bg-yellow-800`
                } py-2 px-4 rounded-2xl border-transparent border w-full ${
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
              <p className="text-white xl:text-red-500 text-xs xl:text-sm xl:mt-1">
                {name.error}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <input
                type="email"
                className={`focus:outline-none shadow-lg bg-white ${
                  modal ? `` : `xl:bg-yellow-800`
                } py-2 px-4 rounded-2xl border-transparent border w-full ${
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
              <p className="text-white xl:text-red-500 text-xs xl:text-sm xl:mt-1">
                {email.error}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <textarea
                className={`block shadow-lg focus:outline-none h-48 bg-white  border ${
                  modal || question.error ? `` : `xl:border-4 xl:border-yellow-800`
                }
                 py-2 px-4 rounded-2xl border-transparent w-full ${
                   question.error ? "border-red-500" : ""
                 }`}
                placeholder="Не можешь найти ответ на свой вопрос? Напиши нам – мы всегда на связи!"
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
              <p className="text-white xl:text-red-500 text-xs xl:text-sm xl:mt-1">
                {question.error}
              </p>
            )}
          </div>
        </div>
        <div className="my-6 flex items-center justify-center">
          <button
            className={buttonClass() + " text-xl w-64"}
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
