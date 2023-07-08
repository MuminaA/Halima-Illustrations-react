import React, { useState } from "react";
import List from "../../Components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  // category Id
  const catId = parseInt(useParams().id);
  // change the state of price range
  const [maxPrice, setMaxPrice] = useState(100);
  // change the state of sort
  const [sort, setSort] = useState(null);
  // chose sub category
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  // console.log(data)

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };



  return (
    <div className="px-48 pb-20">
      <h2 className="text-2xl font-bold font-headerFont pb-10 flex justify-center">
        Shop
      </h2>
      <div className="flex">
        <div className="left flex-1 flex flex-col gap-4 sticky h-full top-[50px]">
          <div className="category">
            <p className="font-headerFont text-lg">Category</p>
            {data?.map((item) => (
              <div className="flex gap-2 items-center capitalize" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))}
          </div>
          <div className="price">
            <p className="font-headerFont text-lg">Price</p>
            <div className="flex gap-2 items-center">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={100}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="sortBy">
            <p className="font-headerFont text-lg">Sort by</p>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                onChange={(e) => setSort("asc")}
              />
              <label htmlFor="asc">Price: low to high</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={(e) => setSort("desc")}
              />
              <label htmlFor="desc">Price: high to low</label>
            </div>
          </div>
        </div>
        <div className="right flex-3 capitalize">
          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            subCats={selectedSubCats}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
