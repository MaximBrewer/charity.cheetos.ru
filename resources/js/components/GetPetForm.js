import React from "react";
import useInputValue from "./input-value";
import client from "../api/client";
import { useModal } from "../context/modal";
import SuccessGetPetModal from "../modals/SuccessGetPet";
import { buttonClass } from "../Classes";

// components

export default function GetPetForm({ pet_id }) {
  let { setModalBody } = useModal();

  let name = useInputValue("name");
  let surname = useInputValue("surname");
  let age = useInputValue("age");
  let email = useInputValue("email");
  let city = useInputValue("city");
  let body = useInputValue("body");

  const handleSubmit = (e) => {
    e.preventDefault();

    client("/api/order", {
      body: {
        name: name.value ? name.value : "",
        surname: surname.value ? surname.value : "",
        age: age.value ? age.value : "",
        email: email.value ? email.value : "",
        city: city.value ? city.value : "",
        body: body.value ? body.value : "",
        pet_id: pet_id,
      },
    })
      .then((data) => {
        name.setValue("");
        surname.setValue("");
        age.setValue("");
        email.setValue("");
        age.setValue("");
        city.setValue("");
        document.documentElement.scrollTop = 0;
        setModalBody(<SuccessGetPetModal />);
      })
      .catch((error) => {
        console.log(error);
        error.json().then(({ errors }) => {
          [
            name,
            surname,
            age,
            email,
            city,
            body,
          ].forEach(({ parseServerError }) => parseServerError(errors));
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
                className={`focus:outline-none shadow-lg bg-white py-2 px-4 rounded-2xl border-transparent border w-full ${
                  name.error ? "border-red-500" : ""
                }`}
                placeholder="Имя"
                id="name"
                name="name"
                required
                {...name.bind}
              />
            </div>
            {name.error && <p className="text-white text-xs">{name.error}</p>}
          </div>
        </div>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <input
                type="text"
                className={`focus:outline-none shadow-lg bg-white py-2 px-4 rounded-2xl border-transparent border w-full ${
                  surname.error ? "border-red-500" : ""
                }`}
                placeholder="Фамилия"
                id="surname"
                name="surname"
                required
                {...surname.bind}
              />
            </div>
            {surname.error && (
              <p className="text-white text-xs">{surname.error}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <input
                type="number"
                className={`focus:outline-none shadow-lg bg-white py-2 px-4 rounded-2xl border-transparent border w-full ${
                  age.error ? "border-red-500" : ""
                }`}
                placeholder="Возраст"
                id="age"
                name="age"
                required
                {...age.bind}
              />
            </div>
            {age.error && <p className="text-white text-xs">{age.error}</p>}
          </div>
        </div>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <input
                type="email"
                className={`focus:outline-none shadow-lg bg-white py-2 px-4 rounded-2xl border-transparent border w-full ${
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
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <input
                type="text"
                className={`focus:outline-none shadow-lg bg-white py-2 px-4 rounded-2xl border-transparent border w-full ${
                  city.error ? "border-red-500" : ""
                }`}
                placeholder="Город проживания"
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
              <textarea
                className={`block shadow-lg focus:outline-none h-48 bg-white py-2 px-4 rounded-2xl border-transparent border w-full ${
                  body.error ? "border-red-500" : ""
                }`}
                placeholder="Я буду лучшим хозяином, потому что..."
                id="body"
                name="body"
                required
                {...body.bind}
              />
            </div>
            {body.error && <p className="text-white text-xs">{body.error}</p>}
          </div>
        </div>
        <div className="my-4 flex items-center justify-center">
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
