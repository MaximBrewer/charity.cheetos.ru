import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import DogImg from "../../images/dgo.png";
import PartnerImg from "../../images/partner.png";
import StepsImg from "../../images/steps.png";
import Slider from "react-slick";
import { ArrowNextIcon, ArrowPrevIcon, ArrowDownIcon } from "../Icons";
import Parser from "html-react-parser";
import FaqForm from "../components/FaqForm";

function Rules({ toggleOpened, opened }) {
  const [faq, setFaq] = useState(window.App.data.faqs);
  return (
    <section id="faq">
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <h2 className="text-2xl text-center uppercase font-bold mb-6 mt-12">
          FAQ
        </h2>
        <div className="mb-10 text-justify">
          {faq.map((item, index) => {
            return (
              <div
                key={index}
                className={`rounded-xl sm:rounded-2xl overflow-hidden mb-4 cursor-pointer`}
                onClick={() => {
                  setFaq((prevState) => {
                    return prevState.map((i, k) => {
                      return {
                        ...i,
                        o: !i.o && k == index,
                      };
                    });
                  });
                }}
              >
                <div
                  className={`flex justify-between items-center text-sm sm:text-lg font-bold text-left py-2 px-6 ${
                    item.o ? `bg-yellow-900` : `bg-white`
                  }`}
                >
                  <span className="block mr-2">Вопрос №{index*1 + 1}: {item.q}</span>
                  <span className="text-black">
                    <ArrowDownIcon className="stroke-current w-6 h-4" />
                  </span>
                </div>
                <div
                  className={`text-sm sm:text-base bg-white px-6 ${
                    item.o ? `h-auto pt-4 pb-6` : `h-0`
                  }`}
                >
                  {Parser(item.a)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <h2 className="text-2xl text-center font-bold mb-6 mt-12">
          У меня есть вопрос:
        </h2>
        <div className="mb-10 text-justify">
          <FaqForm />
        </div>
      </div>
    </section>
  );
}

export default Rules;
