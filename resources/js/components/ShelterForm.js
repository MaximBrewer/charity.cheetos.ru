import React, { useEffect, useState, useRef } from "react";
import client from "../api/client";
import useInputValue from "./input-value";
import { useModal } from "../context/modal";
import SuccessShelterModal from "../modals/SuccessShelter";
import { buttonClass } from "../Classes";
import { OkIcon, SelectArrowIcon } from "../Icons";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ru from "react-phone-number-input/locale/ru";

// components

export default function ShelterForm({ partner_id }) {
  let { setModalBody, setShowModal } = useModal();

  let email = useInputValue("email");
  let quantity = useInputValue("quantity");
  let phone = useInputValue("phone");
  let city = useInputValue("city");

  const [citySelectOpen, setCitySelectOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    client("/api/trip", {
      body: {
        city: city.value ? city.value : "",
        partner_id: partner_id,
        email: email.value ? email.value : "",
        phone: phone.value ? phone.value : "",
        quantity: quantity.value ? quantity.value : "",
      },
    })
      .then((data) => {
        email.setValue("");
        quantity.setValue("");
        phone.setValue("");
        city.setValue("");
        setModalBody(<SuccessShelterModal />);
        setShowModal(true);
        document.documentElement.scrollTop = 0;
      })
      .catch((error) => {
        console.log(error);
        error.json().then(({ errors }) => {
          [email, quantity, phone, city].forEach(({ parseServerError }) =>
            parseServerError(errors)
          );
        });
      });
  };

  const getCityTitle = (id) => {
    for (let city of window.App.data.cities) {
      if (city.id == id) return city.title;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <div className="mt-1 relative z-5">
                <div
                  onClick={() => setCitySelectOpen(true)}
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-labelledby="listbox-label"
                  className={`focus:outline-none text-xl text-center placeholder-current bg-yellow-900 py-3 px-4 rounded-2xl border-transparent border w-full`}
                >
                  <span className="flex items-center justify-center">
                    <span className="block truncate">
                      {city.value ? getCityTitle(city.value) : "Город"}
                    </span>
                  </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectArrowIcon className="w-6 h-6" />
                  </span>
                </div>
                <div
                  className={`absolute mt-1 w-full rounded-md bg-white shadow-lg ${
                    citySelectOpen ? `` : `hidden`
                  }`}
                >
                  <ul
                    tabIndex="-1"
                    role="listbox"
                    aria-labelledby="listbox-label"
                    aria-activedescendant="listbox-item-3"
                    className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none xl:text-sm"
                  >
                    {window.App.data.cities.map((item, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => {
                            setCitySelectOpen(false);
                            city.bind.onChange({
                              currentTarget: { value: item.id },
                            });
                          }}
                          id="listbox-item-0"
                          role="option"
                          className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                        >
                          <div className="flex items-center">
                            <span className="ml-3 block font-normal truncate">
                              {item.title}
                            </span>
                          </div>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <OkIcon />
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            {city.error && <p className="text-red-500 text-xs">{city.error}</p>}
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
            {quantity.error && (
              <p className="text-red-500 text-xs">{quantity.error}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap flex-col">
          <div className="w-full my-2">
            <div className={`md-input-box`}>
              <PhoneInput
                className={`focus:outline-none text-xl text-center placeholder-current bg-yellow-900 py-3 px-4 rounded-2xl border-transparent border w-full ${
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
            {phone.error && (
              <p className="text-red-500 text-xs">{phone.error}</p>
            )}
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
            {email.error && (
              <p className="text-red-500 text-xs">{email.error}</p>
            )}
          </div>
        </div>
        <div className="my-6 flex items-center justify-center">
          <button
            className={buttonClass() + " text-xl w-full"}
            type="button"
            onClick={handleSubmit}
          >
            Поехать в приют
          </button>
        </div>
      </form>
    </>
  );
}
