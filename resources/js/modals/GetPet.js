import React from "react";
import GetPetForm from "../components/GetPetForm";

export default function Modal(props) {
  return (
    <>
      <h2 className="text-2xl text-center font-bold mb-2">
        Взять домой <br /> лохматого друга
      </h2>
      <div className="text-justify">
        <GetPetForm {...props} />
      </div>
    </>
  );
}
