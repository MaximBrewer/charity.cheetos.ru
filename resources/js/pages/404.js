import React from "react";

function NotFound() {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-4 xl:px-0 max-w-sm">
        <div className="flex flex-col flex-1 items-center">
          <h1 className="py-8 text-3xl xl:text-4xl font-bold">
            Страница не найдена.
          </h1>
        </div>
      </div>
      <div className="w-full h-px"></div>
    </section>
  );
}

export default NotFound;
