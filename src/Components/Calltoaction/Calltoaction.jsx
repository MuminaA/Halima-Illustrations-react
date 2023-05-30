import React from "react";
import intDesign1 from "../../assets/intDesign1.jpg";
import intDesign2 from "../../assets/intDesign2.jpg";
import intDesign3 from "../../assets/intDesign3.jpg";
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { Link } from "react-router-dom";

const Calltoaction = () => {
  return (
    <div className="flex justify-between px-48 py-16 items-center bg-gray-100">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-bold text-[#1F2937] font-headerFont">Custom Painting</h2>
        <p className="font-bodyFont text-sm text-[#4B5563]">
          Style your home with an amazing unique piece 
          or buy already made
          pieces.
        </p>
        <button className="font-headerFont bg-[#111827] text-white pl-5 pr-10 py-5 max-w-[10rem] flex justify-between">Contact<EastRoundedIcon/></button>
      </div>
      <div className="flex gap-5">
        <div className="w-96 flex">
          <img src={intDesign1}></img>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-80">
            <img src={intDesign2}></img>
          </div>
          <div className="w-80">
            <img src={intDesign3}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calltoaction;
