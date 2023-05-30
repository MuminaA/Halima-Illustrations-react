import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => (
  <div className="flex flex-col gap-12 bg-black text-white px-48 pt-20 pb-7">
    <div className="flex justify-between">
      <div>
        <h2 className="text-lg font-bold pb-2">Need help?</h2>
        <ul className="text-gray-400 flex flex-col gap-3">
          <li><a href="">FAQ</a></li>
          <li><a href="">Refund and Returns Policy</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-bold pb-2">Get in touch</h2>
        <ul className="text-gray-400 flex flex-col gap-3">
          <li><a href="">contact@example.com</a></li>
          <li><a href="">0123-456-7890</a></li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-bold pb-2">Follow</h2>
        <ul className="text-gray-400 flex flex-col gap-3">
          <li>
            <a href=""><InstagramIcon /></a>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex self-center">
      <p>Halima Illustrations © 2023</p>
    </div>
  </div>
);

export default Footer;