import React from "react";
import { Link } from "react-router-dom";

import { buttonClass } from "../Classes";

export default function Modal() {
  return (
    <>
      <h2 className="text-2xl text-center font-bold mb-4">
        Ваша заявка
        <br /> успешно отправлена!
      </h2>
      <p className="mb-4">
        Статус обработки заявки будет отправлен на ваш e-mail
      </p>
    </>
  );
}
