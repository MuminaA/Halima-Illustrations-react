import React from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const subCategoryFilters = subCats
    .map((item) => `&[filters][sub_categories][id][$in][]=${item}`)
    .join("");

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCategoryFilters}${
      sort ? `&sort=price:${sort}` : ""
    }&[filters][price][$lte]=${maxPrice}`
  );

  return (
    <div className="list flex flex-wrap gap-6 ">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
