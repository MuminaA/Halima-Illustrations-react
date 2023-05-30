import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    // Link to send to product page
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew ? (
            <span className="absolute bg-white font-bold text-orange-500 px-2 m-2">
              New
            </span>
          ) : (
            ""
          )}
          <img src={item.img} className="w-[350px]"></img>
        </div>
        <h2 className="text-lg pt-2 font-headerFont">{item.title}</h2>
        <div>
          <h3 className="font-bold font-headerFont">${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
