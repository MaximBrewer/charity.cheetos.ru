import React from "react";
import Parser from "html-react-parser";

function Rules() {
  return (
    <section id="rules" className="bg-white">
      <div className="w-full h-px"></div>
      <div className="max-w-sm xl:max-w-full mx-auto">
        <div className="container mx-auto">
          <h2 className={`text-2xl font-bold text-center mt-8 hidden xl:block`}>
            ПРОТЯНИ ЛАПУ ДРУЖБЫ
          </h2>
          <h2 className="text-xl text-center font-bold mb-6 mt-4">
            Правила проведения благотворительной акции «Cheetos»
            <br />
            «Протяни лапу дружбы»
            <br />
            (далее – «Акция»)
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
