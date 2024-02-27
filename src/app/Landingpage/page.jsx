import React from "react";
import Hero from "../components/Hero/page";
import Footer from "../components/Footer/Footer";
import Box from "../components/MiddleSection/Box";
import Navbar from "../components/Hero/Navbar";

function Landing() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Box />
      <Footer />
    </div>
  );
}

export default Landing;
