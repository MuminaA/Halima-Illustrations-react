import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <div className="bg-heroImg h-screen bg-cover bg-center">
        <div className="text-white flex flex-col justify-center items-center h-screen gap-4 font-headerFont">
          <h1 className="text-5xl ">Welcome to Halima Illustrations</h1>
          <p className="text-2xl font-bodyFont">
            Discover beautiful, hand-drawn illustrations to add a pop of color
            to <span className="bg-yellow-400/80 p-2">your home</span>
          </p>
          <Link to={`/products/1`}><button className="bg-white text-black px-9 py-4 rounded-full text-lg font-bold hover:scale-110 transition-transform duration-300">Shop Now</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
