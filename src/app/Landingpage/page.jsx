import React from "react";
import Hero from "../components/Hero/page";
import Footer from "../components/Footer/Footer";
import Box from "../components/MiddleSection/Box";
function Landing() {
  return (
    <div className="w-full">
      <Hero />
      <Box />
      <Footer />
    </div>
  );
}

export default Landing;
