import React from "react";
import Frame1 from "../../assets/Frame1.png";
import Frame3 from "../../assets/Frame3.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, ListItemSecondaryAction } from "@mui/material";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: Frame1,
      title: "Women in a white dress",
      desc: "Loren ipsum dolor sit amet, consectetur adipiscing",
      isNew: true,
      price: 12,
    },
    {
      id: 2,
      img: Frame3,
      title: "Hijabi burgendy",
      desc: "Loren ipsum dolor sit amet",
      isNew: false,
      price: 8,
    },
  ];
  return (
    <div className="cart absolute right-5 top-20 z-50 bg-white p-5 shadow-lg">
      <h2 className="mb-7 text-gray-400 text-xl">Products in cart</h2>
      {data.map((item) => (
        <div className="item flex gap-5 mb-5 items-center" key={item.id}>
          <img src={item.img} alt="" className="w-20 h-[100px] object-cover" />
          <div className="details">
            <h2 className="mb-4 text-gray-400 text-lg">{item.title}</h2>
            <p className="text-sm mb-2.5">{item.desc.substring(0, 100)}</p>
            <div className="price font-semibold">1 x ${item.price}</div>
          </div>
          <DeleteIcon className="text-red-500 cursor-pointer" />
        </div>
      ))}
      <div className="total flex justify-between font-bold">
        <span className="mb-5">SUBTOTAL</span>
        <span className="">$20 </span>
      </div>
      <button className="flex bg-gray-200 py-2 px-8 rounded-sm shadow-md mb-5 text-sm font-semibold">PROCEED TO CHECKOUT</button>
      <span className="reset text-red-500 text-sm cursor-pointer">Reset Cart</span>
    </div>
  );
};

export default Cart;
