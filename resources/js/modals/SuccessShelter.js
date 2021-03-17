import React from "react";
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
