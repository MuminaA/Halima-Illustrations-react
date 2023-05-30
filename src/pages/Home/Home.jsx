import React from "react";
import Hero from '../../Components/Hero/Hero'
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Calltoaction from "../../Components/Calltoaction/Calltoaction";
import Aboutme from "../../Components/Aboutme/Aboutme";

const Home = () => {
  return (
    <div className="home">
      <Hero/>
      <FeaturedProducts/>
      <Calltoaction/>
      <Aboutme/>
    </div>
  );
};

export default Home;
