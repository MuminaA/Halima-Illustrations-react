import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar flex justify-between md:px-48 md:py-8 bg-white">
      <div className="brand">
        <img src={logo} className="w-48"></img>
      </div>
      <div className="links flex items-center font-headerFont">
        <ul className="flex gap-3 items-center">
          <li className=" hover:text-gray-400">
            <Link to={"/"}>Home</Link>
          </li>
          <li  className=" hover:text-gray-400">
            <Link to={"/products/1"}>Shop</Link>
          </li>
          <li  className=" hover:text-gray-400">
            <a href="">About Me</a>
          </li>
          <li  className=" hover:text-gray-400">
            <a href="">Contact</a>
          </li>
          <li className="cart " onClick={() => setOpen(!open)}>
            <div className="absolute bg-blue-500 rounded-2xl px-2 w-0 h-4 top-16 right-[11.8rem] flex justify-center items-center">
              <span className="text-xs font-bold">0</span>
            </div>
            <div className="hover:text-gray-400"><ShoppingBagIcon /></div>
          </li>
        </ul>
      </div>{open ? <Cart/> : ''}
      
    </div>
  );
};

export default Navbar;
