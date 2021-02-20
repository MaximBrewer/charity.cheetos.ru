import React from "react";
import Parser from "html-react-parser";

function Rules() {
  return (
    <section id="rules" className="bg-white">
      <div className="w-full h-px"></div>
      <div className="max-w-sm xl:max-w-full mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-xl xl:text-2xl text-center uppercase font-bold mb-6 mt-12">
            Правила проведения благотворительной акции «Cheetos»
            <br />
            «Протяни лапу дружбы»<br />(далее – «Акция»)
          </h2>
          <div className="mb-10 text-justify text-xl p-mb-4 markdown">
            {Parser(window.App.data.textRules)}
          </div>
        </div>
      </div>
      <div className="w-full h-px"></div>
    </section>
  );
}

export default Rules;
