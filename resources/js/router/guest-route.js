import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useModal } from "../context/modal";

function GuestRoute({ component: Component, title, ...rest }) {
  const [opened, setOpened] = React.useState(false);
  let { showModal } = useModal();

  return (
    <div className="overflow-hidden relative flex flex-col min-h-screen">
      <Header opened={opened} setOpened={setOpened} />
      <div className="relative">
        <div
          className={`absolute h-full w-full bg-black bg-opacity-90 z-10 top-0 ${
            opened || showModal ? `` : `hidden`
          }`}
          onClick={() => {
            setOpened(false);
          }}
        ></div>
        <Route {...rest} />
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
