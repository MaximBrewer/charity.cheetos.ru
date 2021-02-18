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
        Стас обработки заявки будет отправлен на ваш e-mail
      </p>
      <p className="mb-4">
        Пока Вашу заявку обрабатывает фонд, узнайте, как подготовить себя
        к&nbsp;появлению питомца в доме.
      </p>
      <div className="mb-2">
        <Link to="/school" className={buttonClass() + " m-auto w-72 text-xl"}>
          В школу будущих хозяев
        </Link>
      </div>
    </>
  );
}