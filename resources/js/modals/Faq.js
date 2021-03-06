import React from "react";
import { Link } from "react-router-dom";
import FaqForm from "../components/FaqForm";
import { buttonClass } from "../Classes";

export default function Modal() {
  return (
    <>
      <div className="mb-6">
        <Link to="/faq/charity" className={buttonClass() + " text-base"}>
          Благотворительная программа
        </Link>
        <Link to="/faq/dog" className={buttonClass() + " text-base"}>
          Памятка для владельцев собак
        </Link>
        <Link to="/faq/cat" className={buttonClass() + " text-base"}>
          Памятка для владельцев кошек
        </Link>
        <a href="https://promo.cheetos.ru/faq/" target="_blank" className={buttonClass() + " text-base"}>
          Акция в Магнит
        </a>
      </div>
      <h2 className="text-2xl text-center font-bold mb-2 mt-6">
        У меня есть вопрос:
      </h2>
      <div className="mb-10 text-justify">
        <FaqForm modal={true} />
      </div>
    </>
  );
}
