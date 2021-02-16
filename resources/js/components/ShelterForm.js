import React, { useEffect, useState } from "react";
import client from "../api/client";
import useInputValue from "./input-value";
import { useModal } from "../context/modal";
import SuccessFaqModal from "../modals/SuccessFaq";
import { buttonClass } from "../Classes";

// components

export default function ShelterForm() {
  let { setModalBody } = useModal();

  let city = useInputValue("city");
  let email = useInputValue("email");
  let quantity = useInputValue("quantity");

  const handleSubmit = (e) => {
    e.preventDefault();

    client("/api/chelter", {
      body: {
        city: city.value ? city.value : "",
        email: email.value ? email.value : "",
        quantity: quantity.value ? quantity.value : "",
      },
    })
      .then((data) => {
        city.setValue("");
        email.setValue("");
        quantity.setValue("");
        document.documentElement.scrollTop = 0;
        setModalBody(<SuccessFaqModal />);
      })
      .catch((error) => {
        console.log(error);
        error.json().then(({ errors }) => {
          [city, email, quantity].forEach(({ parseServerError }) =>
            parseServerError(errors)
          );
        });
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <input
                type="text"
                className={`focus:outline-none text-xl text-center placeholder-current bg-yellow-900 py-3 px-4 rounded-2xl border-transparent border w-full ${
                  city.error ? "border-red-500" : ""
                }`}
                placeholder="Город"
                id="city"
                name="city"
                required
                {...city.bind}
              />
            </div>
            {city.error && <p className="text-white text-xs">{city.error}</p>}
          </div>
        </div>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <input
                type="text"
                className={`focus:outline-none text-xl text-center placeholder-current bg-yellow-900 py-3 px-4 rounded-2xl border-transparent border w-full ${
                  quantity.error ? "border-red-500" : ""
                }`}
                placeholder="Количество человек"
                id="quantity"
                name="quantity"
                required
                {...quantity.bind}
              />
            </div>
            {quantity.error && <p className="text-white text-xs">{quantity.error}</p>}
          </div>
        </div>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <input
                type="email"
                className={`focus:outline-none text-xl text-center placeholder-current bg-yellow-900 py-3 px-4 rounded-2xl border-transparent border w-full ${
                  email.error ? "border-red-500" : ""
                }`}
                placeholder="E-mail"
                id="email"
                name="email"
                required
                {...email.bind}
              />
            </div>
            {email.error && <p className="text-white text-xs">{email.error}</p>}
          </div>
        </div>
        <div className="my-6 flex items-center justify-center">
          <button
            className={buttonClass() + " text-xl w-full"}
            type="button"
            onClick={handleSubmit}
          >
            Поехать в приют!
          </button>
        </div>
      </form>
    </>
  );
}
