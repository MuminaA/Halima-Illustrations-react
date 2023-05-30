import React, { useState } from "react";
import List from "../../Components/List/List";
import { useParams } from "react-router-dom";


const Products = () => {

  // category Id
  const catId = parseInt(useParams().id);
  // change the state of price range
  const [maxPrice, setMaxPrice] = useState(100)
  // change the state of sort
  const [sort, setSort] = useState(null)

  return (
    <div className="px-48 pb-20">
      <h2 className="text-2xl font-bold font-headerFont pb-10 flex justify-center">Shop</h2>
      <div className="flex">
        <div className="left flex-1 flex flex-col gap-4 sticky h-full top-[50px]">
          <div className="category">
            <p className="font-headerFont text-lg">Category</p>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id='1' value={1}/>
              <label>3 x 3</label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id='2' value={2}/>
              <label>24 x 50</label>
            </div>
          </div>
          <div className="price">
            <p className="font-headerFont text-lg">Price</p>
            <div className="flex gap-2 items-center"><span>0</span>
            <input type="range" min={0} max={100} onChange={e =>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span></div>
            
          </div>
          <div className="sortBy">
            <p className="font-headerFont text-lg">Sort by</p>
            <div className="flex gap-2 items-center">
              <input type="radio" id='asc' value='asc' name='price' onChange={e => setSort('asc')}/>
              <label>Price: low to high</label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="radio" id='desc' value='desc' name='price' onChange={e => setSort('desc')}/>
              <label>Price: high to low</label>
            </div>
          </div>
        </div>
        <div className="right flex-3">
          <List catId={catId} maxPrice={maxPrice} sort={sort} className=''/>
        </div>
      </div>
    </div>
  );
};

export default Products;
