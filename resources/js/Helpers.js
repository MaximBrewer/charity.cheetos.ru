import React from "react";
import YouTube from "react-youtube";
import { buttonClass } from "./Classes";
import FrameImg from "../images/frame.png";

export function DoubleButton({ xlYellow = false }) {
  return (
    <div className="my-6 flex items-center justify-center xl:justify-start">
      <a
        href={window.App.data.doubleLink}
        target="_blank"
        className={buttonClass() + ` w-64 xl:w-auto xl:px-12 text-xl xl:text-2xl ${xlYellow ? `xl:bg-yellow-800 xl:hover:bg-yellow-600 xl:text-darkOrange-900` : ``}`}
      >
        Удвоить помощь
      </a>
    </div>
  );
}
export function OfficialVideo() {
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
    },
  };
  const _onReady = (event) => {
    event.target.playVideo();
  };
  return (
    <div className="my-4 p-3 xl:my-0 bg-frame bg-cover rounded-3xl overflow-hidden">
      <div className="relative h-0 pb-fluid-video rounded-2xl overflow-hidden">
        <YouTube
          containerClassName="absolute w-full h-full"
          className="absolute w-full h-full"
          videoId={window.App.data.youtube}
          opts={opts}
          onReady={_onReady}
        />
      </div>
    </div>
  );
}
export function SchoolVideo() {
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
    },
  };
  const _onReady = (event) => {
    // event.target.playVideo();
  };
  return (
    <div className="my-4 xl:my-0 p-3 bg-frame bg-cover rounded-3xl overflow-hidden">
      <div className="relative h-0 pb-fluid-video rounded-2xl overflow-hidden">
        <YouTube
          containerClassName="absolute w-full h-full"
          className="absolute w-full h-full"
          videoId={window.App.data.youtubeSchool}
          opts={opts}
          onReady={_onReady}
        />
      </div>
    </div>
  );
}
