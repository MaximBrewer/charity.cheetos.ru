import React from "react";
import Parser from "html-react-parser";

function Rules() {
  return (
    <section id="rules" className="bg-white">
      <div className="w-full h-px"></div>
      <div className="container mx-auto px-4 xl:px-0 max-w-sm">
        <h2 className="text-2xl text-center uppercase font-bold mb-6 mt-12">
          ПРАВИЛА АЦИИ
        </h2>
        <div className="mb-10 text-justify text-xl p-mb-4">
          {Parser(window.App.data.textRules)}
        </div>
      </div>
      <div className="w-full h-px"></div>
    </section>
  );
}

export default Rules;
