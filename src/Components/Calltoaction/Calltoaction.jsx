import React from "react";
import intDesign1 from "../../assets/intDesign1.jpg";
import intDesign2 from "../../assets/intDesign2.jpg";
import intDesign3 from "../../assets/intDesign3.jpg";

const Calltoaction = () => {
  return (
    <div className="flex justify-between px-48 py-10 items-center bg-gray-100">
      <div>
        <h2>Custom Painting</h2>
        <p>
          Style your home with an amazing unique piece or buy already made
          pieces
        </p>
        <button>Contact</button>
      </div>
      <div className="flex gap-5">
        <div className="w-[30rem] flex">
          <img src={intDesign1}></img>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-96">
            <img src={intDesign2}></img>
          </div>
          <div className="w-96">
            <img src={intDesign3}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calltoaction;
