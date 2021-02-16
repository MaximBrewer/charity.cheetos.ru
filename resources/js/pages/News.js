import React from "react";
import Parser from "html-react-parser";

function News() {
  return (
    <section id="news" className="bg-white mt-80">
      <div className="container mx-auto px-4 sm:px-0 max-w-sm">
        <div className="w-full h-px"></div>
        {window.App.data.news.map((item, index) => (
          <div key={index} className={`my-6 ${index ? `` : `-mt-72`}`}>
            <h2
              className={`text-2xl font-bold text-center ${
                index ? `` : `text-white`
              }`}
            >
              {item.title}
            </h2>
            <div className="my-4 border-7 border-yellow-900 rounded-3xl overflow-hidden">
              <div
                className="relative bg-center bg-no-repeat bg-cover w-full pb-100%"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
            <div className="my-4 text-xl">{Parser(item.body)}</div>
          </div>
        ))}
      </div>
      <div className="w-full h-px"></div>
    </section>
  );
}

export default News;
