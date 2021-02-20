import React from "react";
import Parser from "html-react-parser";

function News() {
  return (
    <section id="news" className="bg-white xl:bg-transparent mt-80 xl:mt-8">
      <div className="w-full h-px"></div>
      {window.App.data.news.map((item, index) => (
        <div className={`xl:py-12 ${index ? `bg-white` : `text-white`}`} key={index}>
          <div className="max-w-sm xl:max-w-full mx-auto">
            <div className="container mx-auto px-4">
              <div className="xl:flex justify-between items-center">
                <div
                  className={`xl:mt-0 xl:w-3/5 xl:order-${index % 2 ? 1 : 2}`}
                >
                  <h2
                    className={`text-2xl font-bold text-center xl:text-left`}
                  >
                    {item.title}
                  </h2>
                  <div className="my-4 text-xl">{Parser(item.body)}</div>
                </div>
                <div
                  className={`xl:w-2/5 xl:${
                    index % 2 ? "pl" : "pr"
                  }-24 xl:order-${index % 2 ? 2 : 1}`}
                >
                  <div className="my-4">
                    <div
                      className="border-7 border-yellow-900 rounded-3xl overflow-hidden relative bg-center bg-no-repeat bg-cover w-full pb-100%"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full h-px xl:hidden"></div>
    </section>
  );
}

export default News;
