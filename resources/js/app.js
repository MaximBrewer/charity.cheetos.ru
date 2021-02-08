import React from "react";
import ReactDOM from "react-dom";
import App from "./router";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "./components/react-alert-template-basic";

import { AuthProvider } from "./context/auth";

// optional configuration
const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 3000,
    offset: "1rem",
    // you can also just use 'scale'
    transition: transitions.SCALE
};

ReactDOM.render(
    <AuthProvider>
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>
    </AuthProvider>,
    document.getElementById("app")
);
