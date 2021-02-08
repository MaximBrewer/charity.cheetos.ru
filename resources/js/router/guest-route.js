import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../context/auth";

import Header from "../components/Header";
import Footer from "../components/Footer";

function GuestRoute({ component: Component, title, ...rest }) {
  const [opened, setOpened] = React.useState(false);
  const toggleOpened = () => setOpened((prevState) => !prevState);
  let { authenticated } = useAuth();

  //   if (authenticated)
  //     switch (Component.name) {
  //       case "Login":
  //       case "Register":
  //       case "ForgotPassword":
  //       case "ResetPassword":
  //         return (
  //           <Redirect
  //             to={{
  //               pathname: "/personal",
  //             }}
  //           />
  //         );
  //       default:
  //         return (
  //           <div className="overflow-hidden relative flex flex-col min-h-screen">
  //             <Header toggleOpened={toggleOpened} opened={opened} isHome={true} />
  //             <div className="relative">
  //               <div className="fixed h-full w-full bg-black bg-opacity-90 top-0"></div>
  //               <Route {...rest} />
  //               <Footer />
  //             </div>
  //           </div>
  //         );
  //     }
  //   else
  return (
    <div className="overflow-hidden relative flex flex-col min-h-screen">
      <Header toggleOpened={toggleOpened} opened={opened} isHome={true} setOpened={setOpened}/>
      <div className="relative">
        <div className={`fixed h-full w-full bg-black bg-opacity-90 top-0 ${opened ? `` : `hidden`}`}></div>
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
