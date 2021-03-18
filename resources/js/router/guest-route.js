import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useModal } from "../context/modal";
import useGTM from "@elgorditosalsero/react-gtm-hook";

function GuestRoute({ component: Component, title, ...rest }) {
  const [opened, setOpened] = React.useState(false);
  let { showModal } = useModal();
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
    sendDataToGTM({
      event: "gtm",
      eventName: "DomReady",
      eventCategory: "DomReady",
    });
  }, []);

  return (
    <div className="overflow-hidden relative flex flex-col min-h-screen">
      <Header
        opened={opened}
        setOpened={setOpened}
        sendToGmData={sendToGmData}
      />
      <div className="relative">
        <div
          className={`absolute h-full w-full bg-black bg-opacity-90 z-10 top-0 ${
            opened || showModal ? `` : `hidden`
          }`}
          onClick={() => {
            setOpened(false);
          }}
        ></div>
        <Route {...rest} sendToGmData={sendToGmData} />
        <Footer />
      </div>
    </div>
  );
}

GuestRoute.displayName = "Guest Route";

GuestRoute.propTypes = {
  rest: PropTypes.object,
  location: PropTypes.object,
  title: PropTypes.string,
};

export default GuestRoute;
