import React from "react";
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

function App() {
  let { initializing } = useAuth();
  return initializing ? (
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
              <Home />
            </GuestRoute>
            <GuestRoute exact path="/getpet">
              <GetPet />
            </GuestRoute>
            <GuestRoute exact path="/pet/:id">
              <Pet />
            </GuestRoute>
            <GuestRoute exact path="/rules">
              <Rules />
            </GuestRoute>
            <GuestRoute exact path="/faq">
              <Redirect to="/faq/charity" />
            </GuestRoute>
            <GuestRoute exact path="/faq/charity">
              <Faq category="charity" />
            </GuestRoute>
            <GuestRoute exact path="/faq/dog">
              <Faq category="dog" />
            </GuestRoute>
            <GuestRoute exact path="/faq/cat">
              <Faq category="cat" />
            </GuestRoute>
            <GuestRoute exact path="/faq/stock">
              <Faq category="stock" />
            </GuestRoute>
            <GuestRoute exact path="/about">
              <About />
            </GuestRoute>
            {/* <GuestRoute exact path="/school">
              <School />
            </GuestRoute> */}
            <GuestRoute exact path="/volunteer/:id">
              <Volunteer />
            </GuestRoute>
            <GuestRoute exact path="/news">
              <News />
            </GuestRoute>
            <GuestRoute exact path="/partners">
              <Partners />
            </GuestRoute>
            <GuestRoute>
              <NotFound />
            </GuestRoute>
          </Switch>
        </ModalProvider>
      </div>
    </Router>
  );
}

export default App;
