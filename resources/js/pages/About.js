import React from "react";
import Parser from "html-react-parser";

import PartnersSlider from "../components/PartnersSlider";
import { DoubleButton, OfficialVideo } from "../Helpers";

function About() {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <h2 className="pt-6 pb-4 text-3xl sm:text-4xl font-bold text-center">
          Протяни лапу дружбы
        </h2>
        <OfficialVideo />
      </div>
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <div className="my-6 text-xl">{Parser(window.App.data.textAbout)}</div>
      </div>
      <DoubleButton />
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <h2 className="text-2xl text-center font-bold mt-16 mb-6">
          Партнеры проекта:
        </h2>
        <PartnersSlider />
      </div>
      <div className="w-full h-px"></div>
    </section>
  );
}

export default About;
