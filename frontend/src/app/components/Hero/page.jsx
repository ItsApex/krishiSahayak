"use client";
import React from "react";
import Herocomp from "./Herocomp";
import Signin from "./SigninButton";
import { SessionProvider } from "next-auth/react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      {/* <Navbar /> */}

      <div className="relative z-10 ">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center mt-[-20]">
        <div className="text-6xl font-bold">
          Beyond Farming, We are creating <br /> fresh experiences
        </div>
        <div className="text-2xl">
          Predictive analytics in agriculture involves the use of algorithms{" "}
          <br /> and machine learning models to analyze vast amounts of data
          collected from farms.
        </div>
        <button className="mt-8 bg-yellow-500 text-green-800 px-8 py-3 rounded-md hover:bg-yellow-630 hover:green-600">
          Get Started
        </button>

        <div className="flex flex-row justify-around items-center mt-20 space-x-40 ">
          <Herocomp feature="weather forecast" />
          <Herocomp feature="crop prediction" />
          <Herocomp feature="planting" />
          <Herocomp feature="harvesting" />
          {/* <SessionProvider>
            <Signin />
          </SessionProvider> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
