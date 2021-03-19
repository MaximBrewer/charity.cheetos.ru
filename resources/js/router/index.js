import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Rules from "../pages/Rules";
import Faq from "../pages/Faq";
import About from "../pages/About";
import GetPet from "../pages/GetPet";
import Pet from "../pages/Pet";
import School from "../pages/School";
import Partners from "../pages/Partners";
import Volunteer from "../pages/Volunteer";
import News from "../pages/News";
import NotFound from "../pages/404";
import GuestRoute from "./guest-route";
import { useAuth } from "../context/auth";
import FullPageSpinner from "../components/full-page-spinner";
import StepsImg from "../../images/steps.png";
import { ModalProvider } from "../context/modal";
import useGTM from "@elgorditosalsero/react-gtm-hook";

function App() {
  let { initializing } = useAuth();
  
  const { init, UseGTMHookProvider, sendDataToGTM } = useGTM();
  const gtmParams = {
    id: "GTM-KQWGWDZ",
  };

  useEffect(() => {
    init(gtmParams);
  }, []);

  const rest = {
    sendToGmData: (name, category = false) => {
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
    },
  };

  return (
    <UseGTMHookProvider>
      {initializing ? (
        <FullPageSpinner />
      ) : (
        <Router>
          <div
            className="flex flex-col min-h-screen font-rotonda bg-orange-900 shadow-lg bg-80 xl:bg-160"
            style={{ backgroundImage: `url(${StepsImg})` }}
          >
            <ModalProvider>
              <Switch>
                <GuestRoute exact path="/">
                  <Home {...rest} />
                </GuestRoute>
                <GuestRoute exact path="/getpet">
                  <GetPet {...rest} />
                </GuestRoute>
                <GuestRoute exact path="/pet/:id">
                  <Pet {...rest} />
                </GuestRoute>
                <GuestRoute exact path="/rules">
                  <Rules {...rest} />
                </GuestRoute>
                <GuestRoute exact path="/faq">
                  <Redirect to="/faq/charity" />
                </GuestRoute>
                <GuestRoute exact path="/faq/charity">
                  <Faq {...rest} category="charity" />
                </GuestRoute>
                <GuestRoute exact path="/faq/dog">
                  <Faq {...rest} category="dog" />
                </GuestRoute>
                <GuestRoute exact path="/faq/cat">
                  <Faq {...rest} category="cat" />
                </GuestRoute>
                <GuestRoute exact path="/faq/stock">
                  <Faq {...rest} category="stock" />
                </GuestRoute>
                <GuestRoute exact path="/about">
                  <About {...rest} />
                </GuestRoute>
                <GuestRoute exact path="/school">
                  <School {...rest} />
                </GuestRoute>
                <GuestRoute exact path="/volunteer/:id">
                  <Volunteer {...rest} />
                </GuestRoute>
                <GuestRoute exact path="/news">
                  <News {...rest} />
                </GuestRoute>
                <GuestRoute exact path="/partners">
                  <Partners {...rest} />
                </GuestRoute>
                <GuestRoute>
                  <NotFound {...rest} />
                </GuestRoute>
              </Switch>
            </ModalProvider>
          </div>
        </Router>
      )}
    </UseGTMHookProvider>
  );
}

export default App;
