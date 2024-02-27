import React from "react";
import Weathercomp from "../components/Weather/weather";
import Navbar from "../components/Hero/Navbar";
function Weather() {
  return (
    <div className="reative">
      <Navbar />
      <div className="flex flex-col justify-center items-center text-white"></div>
      <div className="absolute bottom-0 h-28 bg-white text-black w-full flex flex-row justify-start gap-2 items-center overflow-x-scroll p-2">
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
        <Weathercomp />
      </div>
    </div>
  );
}

export default Weather;
