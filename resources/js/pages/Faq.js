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
    <section id="faq" className="xl:bg-white">
      <div className="w-full h-px"></div>
      <div className="max-w-sm xl:max-w-full mx-auto">
        <div className="container mx-auto">
          <h2 className={`text-2xl font-bold text-center mt-8 hidden xl:block`}>
            ПРОТЯНИ ЛАПУ ДРУЖБЫ
          </h2>
          <h2 className="text-2xl text-center font-bold mb-8 mt-2 text-white xl:text-black">
            <span className="uppercase">FAQ</span>
            <span className="hidden xl:inline">: Как взять животное?</span>
          </h2>
          <div className="mb-10">
            {faq.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`rounded-xl xl:rounded-2xl overflow-hidden mb-4 xl:mb-6 cursor-pointer xl:border-7 xl:cursor-pointer xl:border-yellow-800`}
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
                    className={`flex justify-between items-center text-sm xl:text-lg font-bold text-left py-3 px-4 xl:px-8 ${
                      item.o ? `bg-yellow-800` : `bg-white xl:bg-yellow-800`
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
                    className={`markdown text-sm xl:text-base bg-white px-4 ${
                      item.o ? `h-auto pt-4 pb-6` : `hidden`
                    }`}
                  >
                    {Parser(item.a ?? "")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="max-w-sm xl:max-w-full mx-auto">
        <div className="container mx-auto">
          <h2 className="text-2xl text-center font-bold mb-6 mt-12 text-white">
            У меня есть вопрос:
          </h2>
          <div className="mb-10">
            <div className="w-4/5 xl:w-2/3 m-auto">
              <FaqForm category={category} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px"></div>
    </section>
  );
}

export default Faq;
