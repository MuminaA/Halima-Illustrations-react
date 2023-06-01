import React from "react";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Product = () => {
  // setting state of image to main img
  const [selectedImg, setSelectedImg] = useState(0);
  //
  const [quantity, setQuantity] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1530634962287-1aa57a5e70fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1509744645300-a2098b11871a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  ];
  return (
    <div className="flex px-48 pb-20 gap-6">
      <div className="left flex gap-6">
        <div className="images w-40 flex flex-col gap-2">
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg w-[500px]">
          <img src={images[selectedImg]} alt="" className=" h-[800px] object-cover"/>
        </div>
      </div>
      <div className="right font-headerFont flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Name</h2>
        <span className="">$12</span>
        <div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
            rhoncus pulvinar aliquam.
          </p>
        </div>

        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            className="bg-gray-200 w-6 mr-2 rounded-sm shadow-md"
          >
            -
          </button>
          {quantity}
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="bg-gray-200 w-6 ml-2 rounded-sm shadow-md"
          >
            +
          </button>
        </div>
        <div className="">
          <button className="add bg-gray-200 py-2 px-8 flex gap-2 rounded-sm shadow-md">
            <AddShoppingCartIcon />
            Add to cart
          </button>
        </div>

        <div className="flex gap-2 text-[#287afec2] cursor-pointer">
          <FavoriteBorderIcon />
          Add to wishlist
        </div>
      </div>
    </div>
  );
};

export default Product;
