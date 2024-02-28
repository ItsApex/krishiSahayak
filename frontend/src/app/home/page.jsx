import React from "react";
import Weathercomp from "../components/Weather/weather";
import Bento from "./Bento";
import Navbar from "../components/Hero/Navbar";
import MapCard from "../components/Map/map";
import Navbar_Home from "./Navbar_home";
function Weather() {
  return (
    <div className=" h-screen">
      <Navbar_Home />
      <div className="flex flex-row justify-center items-center bg-white h-[80vh]">
        <div className="text-black flex flex-col w-[50vw] justify-center items-center ">
          <div className="w-3/5  flex flex-wrap justify-center items-center  gap-10 ">
            <Bento />
            <Bento />
            <Bento />
            <Bento />
          </div>
        </div>
        <div className="w-2/5 h-full  flex flex-row justify-center items-center">
          <div className="bg-green-800 w-[90%] rounded-xl h-4/5">
            <MapCard zoom={15} />
          </div>
        </div>
      </div>
      <div className=" h-[20vh] bg-white text-black w-full flex flex-row justify-start gap-2 items-center overflow-x-scroll p-2">
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
