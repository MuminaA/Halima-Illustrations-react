import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar flex justify-between md:px-48 md:py-8 bg-white">
      <div className="brand">
        <img src={logo} className="w-48"></img>
      </div>
      <div className="links flex font-headerFont">
        <ul className="flex gap-3 items-center">
          <li className=" hover:text-gray-400 transition delay-150 hover:delay-200 hover:ease-in-out">
            <Link to={"/"}>Home</Link>
          </li>
          <li  className=" hover:text-gray-400 transition delay-150 hover:delay-200 hover:ease-in-out">
            <Link to={"/products/1"}>Shop</Link>
          </li>
          <li className="cart " onClick={() => setOpen(!open)}>
            <div className="absolute bg-blue-500 rounded-2xl px-2 w-0 h-4 top-16 right-[11.8rem] flex justify-center items-center">
              <span className="text-xs font-bold">{products.length}</span>
            </div>
            <div className="hover:text-gray-400 hover:cursor-pointer transition delay-150 hover:delay-200 hover:ease-in-out"><ShoppingBagIcon /></div>
          </li>
        </ul>
      </div>{open ? <Cart/> : ''}
      
    </div>
  );
};

export default Navbar;
