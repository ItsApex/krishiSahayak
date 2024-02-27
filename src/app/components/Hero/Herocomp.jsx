import React from "react";
import Image from "next/image";

function Herocomp(props) {
  // Define SVG icons for each feature
  const getIcon = (feature) => {
    switch (feature) {
      case "weather_forecast":
        return (
          <Image
            src="/weather_icon.svg"
            alt="Weather Icon"
            width={32}
            height={32}

          />
        );
      case "crop_prediction":
        return (
          <Image src="/crop_icon.svg" alt="Crop Icon" width={32} height={32} />
        );
      case "planting":
        return (
          <Image
            src="/planting_icon.svg"
            alt="Planting Icon"
            width={32}
            height={32}
          />
        );
      case "harvesting":
        return (
          <Image
            src="/harvesting_icon.svg"
            alt="Harvesting Icon"
            width={32}
            height={32}
          />
        );
      default:
        return null;
    }
  };

  return (
    // <div className="w-[50%] bg-white h-24 text-black flex flex-row justify-center items-center rounded p-2">
    //   {getIcon(props.feature)}
    //   <span className="ml-2 ">{props.feature.replace(/_/g, " ")}</span>
    // </div>

    <div className="flex flex-row justify-center items-center gap-10 text-white text-3xl font-bold ">
      <p>{props.feature}</p>
    </div>
  );
}

export default Herocomp;
