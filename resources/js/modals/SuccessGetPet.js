import React, { useEffect } from "react";
import { buttonClass } from "../Classes";
import useGTM from "@elgorditosalsero/react-gtm-hook";
import { useModal } from "../context/modal";
import SchoolModal from "../modals/School";
import { Link, useHistory } from "react-router-dom";

export default function Modal() {
  const { sendDataToGTM } = useGTM();
  let { setModalBody, setShowModal } = useModal();

  const sendToGmData = (name, category = false) => {
    let data = {
      event: "GAEvent",
      eventName: name,
      eventCategory: category ? category : name,
      eventAction: "Click",
      eventLabel: null,
      eventContext: null,
      eventValue: null,
    };
    sendDataToGTM(data);
    // dataLayer.push(data);
  };

  useEffect(() => {
    sendToGmData("successGetPet");
  }, []);
  return (
    <>
      <h2 className="text-2xl text-center font-bold mb-4">
        Ваша заявка
        <br /> успешно отправлена!
      </h2>
      <p className="mb-4">
        Статус обработки заявки будет отправлен на ваш e-mail
      </p>
      <p className="mb-4">
        Пока Вашу заявку обрабатывает фонд, узнайте как подготовить себя
        к&nbsp;появлению питомца в доме.
      </p>
      <div className="mb-2">
        <Link
          to="/school"
          onClick={() => {
            sendToGmData("toSchool");
          }}
          className={buttonClass() + " m-auto w-72 text-xl"}
        >
          В школу будущих хозяев
        </Link>
      </div>
    </>
  );
}
