import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowDownIcon } from "../Icons";
import Parser from "html-react-parser";
import FaqForm from "../components/FaqForm";

function Faq({ category = "charity" }) {
  const [faq, setFaq] = useState(window.App.data.faqs[category]);

  let location = useLocation();
  useEffect(() => {
    setFaq(window.App.data.faqs[category]);
  }, [location]);

  return (
    <section id="faq">
      <div className="container mx-auto px-4 xl:px-0 max-w-sm">
        <h2 className="text-2xl text-center uppercase font-bold mb-6 mt-12 text-white">
          FAQ
        </h2>
        <div className="mb-10 text-justify">
          {faq.map((item, index) => {
            return (
              <div
                key={index}
                className={`rounded-xl xl:rounded-2xl overflow-hidden mb-4 cursor-pointer`}
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
                  className={`flex justify-between items-center text-sm xl:text-lg font-bold text-left py-3 px-4 ${
                    item.o ? `bg-yellow-900` : `bg-white`
                  }`}
                >
                  <span className="block mr-2">
                    Вопрос №{index * 1 + 1}: {item.q}
                  </span>
                  <span className="text-black">
                    <ArrowDownIcon className="stroke-current w-6 h-4" />
                  </span>
                </div>
                <div
                  className={`markdown text-sm xl:text-base bg-white px-6 ${
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
      <div className="container mx-auto px-4 xl:px-0 max-w-sm">
        <h2 className="text-2xl text-center font-bold mb-6 mt-12 text-white">
          У меня есть вопрос:
        </h2>
        <div className="mb-10 text-justify">
          <div className="w-4/5 m-auto">
            <FaqForm category={category} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
