import React, {useEffect} from "react";
import { buttonClass } from "../Classes";
import useGTM from "@elgorditosalsero/react-gtm-hook";

export default function Modal() {
  const { sendDataToGTM } = useGTM();

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
        Пока Вашу заявку обрабатывает фонд, узнайте, как подготовить себя
        к&nbsp;появлению питомца в доме.
      </p>
      <div className="mb-2">
        <a
          className={buttonClass() + ` m-auto w-72 cursor-pointer`}
          onClick={() => {
            setModalBody(<SchoolModal />);
            setShowModal(true);
            document.documentElement.scrollTop = 0;
            return false;
          }}
        >
          В&nbsp;школу будущих хозяев
        </a>
        {/* <Link to="/school" className={buttonClass() + " m-auto w-72 text-xl"}>
          В школу будущих хозяев
        </Link> */}
      </div>
    </>
  );
}
