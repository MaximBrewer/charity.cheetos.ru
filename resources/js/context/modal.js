import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import StepsImg from "../../images/steps-dark.png";
import { CloseIcon } from "../Icons";

const ModalContext = React.createContext();

ModalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [modalBody, setModalBody] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        setModalBody,
      }}
    >
      {" "}
      {children}
      {showModal ? (
        <div className="z-30 absolute top-24 w-full">
          <div className="container mx-auto max-w-lg">
            <div
              className="pt-4 bg-yellow-800 rounded-3xl shadow-lg relative flex flex-col bg-80 outline-none focus:outline-none"
              style={{ backgroundImage: `url(${StepsImg})` }}
            >
              <div
                className="cursor-pointer absolute right-4 top-4 z-10"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <CloseIcon className="w-6 h-6" />
              </div>
              <div className="relative p-8 flex-auto">{modalBody}</div>
            </div>
          </div>
        </div>
      ) : null}
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = React.useContext(ModalContext);

  if (context === undefined) {
    throw new Error(`useModal must be used within a ModalProvider`);
  }

  return context;
}

export { ModalProvider, useModal };
