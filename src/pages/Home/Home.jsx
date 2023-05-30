import React from "react";
import Hero from '../../Components/Hero/Hero'
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Calltoaction from "../../Components/Calltoaction/Calltoaction";

const Home = () => {
  return (
    <div className="home">
      <Hero/>
      <FeaturedProducts/>
      <Calltoaction/>
    </div>
  );
};

export default Home;
