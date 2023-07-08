import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    // Link to send to product page
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.attributes.isNew ? (
            <span className="absolute bg-white font-bold text-orange-500 px-2 m-2">
              New
            </span>
          ) : (
            ""
          )}
          {/* setting the img from the data,
            question marks are for if the data dosent have an image */}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes.url
            }
            className="w-[350px]"
          ></img>
        </div>
        <div className="flex justify-between items-center mt-3">
          <h2 className="text-lg font-headerFont">
            {item.attributes.title}
          </h2>
          <div>
            <h3 className="font-headerFont text-red-600">
              ${item.attributes.price.toFixed(2)}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
