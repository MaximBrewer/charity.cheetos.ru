import React, { useState } from "react";
import useInputValue from "./input-value";
import client from "../api/client";
import { useModal } from "../context/modal";
import SuccessGetPetModal from "../modals/SuccessGetPet";
import { buttonClass } from "../Classes";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ru from "react-phone-number-input/locale/ru";

// components

export default function GetPetForm({ pet_id }) {
  let { setModalBody } = useModal();

  const [cities, setCities] = useState([]);

  let name = useInputValue("name");
  let surname = useInputValue("surname");
  let age = useInputValue("age");
  let phone = useInputValue("phone");
  let email = useInputValue("email");
  let city = useInputValue("city");
  let body = useInputValue("body");

  const getCities = (event) => {
    city.bind.onChange(event);
    const eventTarget = event.target;
    if (eventTarget.value.length > 1)
      client("/api/cities/search", {
        body: { q: eventTarget.value },
      }).then(({ cities }) => {
        console.log(cities);
        setCities(cities);
      });
    else setCities([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    client("/api/order", {
      body: {
        name: name.value ? name.value : "",
        surname: surname.value ? surname.value : "",
        age: age.value ? age.value : "",
        phone: phone.value ? phone.value : "",
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
        phone.setValue("");
        email.setValue("");
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
            phone,
            email,
            city,
            body,
          ].forEach(({ parseServerError }) => parseServerError(errors));
        });
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={`text-left`}>
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
            {name.error && <p className="text-red-900 text-sm px-2">{name.error}</p>}
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
              <p className="text-red-900 text-sm px-2">{surname.error}</p>
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
            {age.error && <p className="text-red-900 text-sm px-2">{age.error}</p>}
            <p className="text-gray-800 text-sm px-2 pt-1">
              Младше 18 лет? Тогда зови на помощь родителей. Только
              совершеннолетние могут забрать животное домой.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <PhoneInput
                className={`focus:outline-none shadow-lg bg-white py-2 px-4 rounded-2xl border-transparent border w-full ${
                  phone.error ? "border-red-500" : ""
                }`}
                country="RU"
                defaultCountry="RU"
                labels={ru}
                id="phone"
                name="phone"
                required
                placeholder="Телефон"
                value={phone.bind.value}
                onChange={(value) => {
                  phone.bind.onChange({
                    target: { value: value },
                    currentTarget: { value: value },
                  });
                }}
              />
            </div>
            {phone.error && <p className="text-red-900 text-sm px-2">{phone.error}</p>}
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
            {email.error && <p className="text-red-900 text-sm px-2">{email.error}</p>}
          </div>
        </div>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2 relative">
            <div className={`md-input-box`}>
              <input
                type="text"
                className={`focus:outline-none shadow-lg bg-white py-2 px-4 ${
                  cities.length ? `rounded-t-2xl` : `rounded-2xl`
                } border-transparent border w-full ${
                  city.error ? "border-red-500" : ""
                }`}
                placeholder="Город проживания"
                id="city"
                name="city"
                required
                value={city.bind.value}
                // {...city.bind}
                onChange={(e) => getCities(e)}
              />
            </div>
            {city.error && <p className="text-red-900 text-sm px-2">{city.error}</p>}
            {cities.length ? (
              <ul className="w-full absolute z-5 bg-white shadow-md py-1 px-0 bg-gray-100 border-t rounded-b-2xl border-gray-300">
                {cities.map((item, index) => (
                  <li
                    className={`py-1 px-2 border-b last:border-0 cursor-pointer`}
                    key={index}
                    title={item.value}
                    onClick={() => {
                      city.bind.onChange({
                        currentTarget: { value: item.value },
                      });
                      setCities([]);
                    }}
                  >
                    <span
                      className={`block overflow-ellipsis whitespace-nowrap overflow-hidden`}
                    >
                      {item.value}{" "}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              ``
            )}
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
            {body.error && <p className="text-red-900 text-sm px-2">{body.error}</p>}
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
