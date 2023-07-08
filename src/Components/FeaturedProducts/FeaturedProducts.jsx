import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  // console.log("Data:", data);

  return (
    <div className="flex flex-col justify-center items-center py-40 px-48">
      <h2 className="text-2xl font-bold font-headerFont pb-10 capitalize">
        {type} products
      </h2>
      <div className="flex gap-6 capitalize">
        {/*maping over the data to fill in card component */}
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
