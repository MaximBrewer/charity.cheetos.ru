import React from "react";
import { Link } from "react-router-dom";
import { buttonClass } from "../Classes";

export default function Modal() {
  return (
    <>
      <h2 className="text-2xl text-center font-bold mb-2">
      Школа будущих хозяев будет доступна с 15.03.2021
      </h2>
      <div className="mb-2">
        <Link to="/" className={buttonClass() + " text-lg"}>
          На главную
        </Link>
      </div>
    </>
  );
}
