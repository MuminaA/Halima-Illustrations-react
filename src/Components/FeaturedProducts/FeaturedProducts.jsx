import React from "react";
import Card from "../Card/Card";
import Frame1 from '../../assets/Frame1.png';
import Frame3 from '../../assets/Frame3.png';
import Frame4 from '../../assets/Frame4.png';

const FeaturedProducts = () => {
  // fake data
  const data = [
    {
        id:1,
        img: Frame1,
        title: 'Women in a white dress',
        isNew: true,
        price: 12,
    },
    {
        id:1,
        img: Frame3,
        title: 'Hijabi burgendy',
        isNew: false,
        price: 12,
    },
    {
        id:1,
        img: Frame4,
        title: 'Abstract flower',
        isNew: false,
        price: 12,
    },
  ]

  return (
    <div className="flex flex-col justify-center items-center py-40 px-48">
      <h2 className="text-2xl font-bold font-headerFont pb-10">Featured Products</h2>
      <div className="flex gap-6">
      {/*maping over the data to fill in card component */}
      {data.map(item => (
        <Card item={item} key={item.id}/>
      ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
