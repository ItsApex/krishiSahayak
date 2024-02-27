import React from "react";

function Box() {
  return (
    <div className="h-full bg-white p-8 ">
      <h2 className="text-3xl font-bold mb-4 text-center text-black py-8">
        We will provide the best solutions
      </h2>

      <div className="flex flex-row justify-around items-center  gap-5 ">
        {/* Image 1 */}
        <img src="/image1.jpg" alt="Image 1" className="w-[20%]" />
        {/* Image 2 */}
        <img src="/image2.jpg" alt="Image 2" className="w-[20%]" />
        {/* Image 3 */}
        <img src="/image3.jpg" alt="Image 3" className="w-[20%]" />
        {/* Image 4 */}
        <img src="/image4.jpg" alt="Image 4" className="w-[20%]" />
      </div>
    </div>
  );
}

export default Box;
