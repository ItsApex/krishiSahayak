import React from "react";
import Weathercomp from "../components/Weather/weather";
import Bento from "./Bento";
import Navbar from "../components/Hero/Navbar";
import MapCard from "../components/Map/map";
import Navbar_Home from "./Navbar_home";
import TextField from "@mui/material/TextField";
function Weather() {
  // get data from localstorage
  
  return (
    <div className=" h-screen">
      <Navbar_Home />
      <div className="flex flex-row justify-center items-center bg-white h-[80vh]">
        <div className="text-black flex flex-col w-[50vw] justify-center items-center w-full">
          <div className="w-3/5  flex flex-wrap justify-center items-center  gap-10 ">
            <div className="flex flex-row justify-evenly items-center w-full">
              <TextField
                helperText="Nitrogen"
                id="demo-helper-text-aligned"
                label="N"
              />

              <TextField
                helperText="Phosphorous"
                id="demo-helper-text-aligned"
                label="P"
              />
              <TextField
                helperText="Potassium"
                id="demo-helper-text-aligned"
                label="P"
              />
              <TextField
                helperText="PH"
                id="demo-helper-text-aligned"
                label="pH"
              />
              <br />
            </div>
            <button className="bg-black text-white p-4 rounded-md">Send</button>

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
