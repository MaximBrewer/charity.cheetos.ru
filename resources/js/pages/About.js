import React from "react";
import Parser from "html-react-parser";
import { Link } from "react-router-dom";

import PartnersSlider from "../components/PartnersSlider";
import PartnersSliderXL from "../components/PartnersSliderXL";
import { DoubleButton, OfficialVideo } from "../Helpers";

function About() {
  return (
    <section id="about" className="bg-white">
      <div className="xl:pb-16 xl:text-black">
        <div className="max-w-sm xl:max-w-full mx-auto">
          <div className="container mx-auto px-4">
            <h2 className="pt-6 xl:pt-12 pb-4 text-3xl xl:text-4xl font-bold text-center">
              Протяни лапу дружбы
            </h2>
            <div className="xl:flex justify-between items-center">
              <div className="xl:mt-0 xl:w-1/2 xl:order-2 xl:pl-16">
                <OfficialVideo />
              </div>
              <div className="xl:w-1/2">
                <div className="my-6 text-xl text-justify">
                  {Parser(window.App.data.textAbout)}
                </div>
                <DoubleButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:pb-16 xl:text-black">
        <div className="max-w-sm xl:max-w-full mx-auto">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl text-center font-bold mt-16 xl:mt-0 mb-6">
              Партнеры проекта:
            </h2>
            <div className="hidden xl:block">
              <PartnersSliderXL />
            </div>
            <div className="xl:hidden">
              <PartnersSlider />
              <div className="mb-6 flex items-center justify-center">
                <Link
                  to="/partners"
                  className="w-48 text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px"></div>
    </section>
  );
}

export default About;
