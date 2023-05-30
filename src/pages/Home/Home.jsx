import React from "react";
import Hero from '../../Components/Hero/Hero'
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div className="home">
      <Hero/>
      <FeaturedProducts/>
    </div>
  );
};

export default Home;
