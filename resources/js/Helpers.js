import React from "react";
export function DoubleButton() {
  return (
    <div className="my-6 flex items-center justify-center">
      <a
        href={window.App.data.doubleLink}
        target="_blank"
        className="w-64 text-xl bg-darkOrange-900 hover:bg-darkOrange-800 shadow-lg hover:shadow-xl active:top-px relative outline-none rounded-2xl py-2 px-7 text-white font-bold text-center focus:outline-none"
      >
        Удвоить помощь!
      </a>
    </div>
  );
}
export function OfficialVideo() {
  return (
    <div className="my-4 border-7 border-yellow-900 rounded-3xl overflow-hidden bg-darkOrange-900">
      <div id="responsiveVideoWrapper" className="relative h-0 pb-fluid-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${window.App.data.youtube}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          autoPlay
        ></iframe>
      </div>
    </div>
  );
}
