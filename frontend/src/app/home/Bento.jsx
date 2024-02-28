import React from "react";

function Bento({heading , subs}) {
  return (
    <div className="w-2/5 h-56 rounded-lg bg-gray-200 flex flex-row  justify-center items-center shadow-sm transition duration-300 ease-in-out transform hover:shadow-lg">
      <div className=" text-center">
        {heading}
      </div>
      <div className=" text-center">
        {subs}
      </div>
    </div>
  );
}

export default Bento;
