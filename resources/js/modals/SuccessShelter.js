import React from "react";
import { sendToGmData } from "../Helpers";

export default function Modal() {
  useEffect(() => {
    sendToGmData("successTravel");
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
    </>
  );
}
