import React, { useEffect, useState } from "react";
import Veg1 from '../assets/vegetables-752153_1280.jpg'
import Veg2 from '../assets/vegetables-1584999_1280.jpg'
import spaghetti from '../assets/spaghetti-2931846_1280.jpg'
import Food from '../assets/8e5ba7ec864dcd8d4c2b7183b50e18cd.jpg'
import HamB from '../assets/hamburger-494706_1280.jpg'
import Skillet from '../assets/Lemon Garlic Butter Steak and Broccoli Skillet.jpg'
import pepperoni from '../assets/Pepperoni and Burrata Pizza with Pesto.jpg'
import JackB from '../assets/Shrimp Rice.jpg'
import mPasta from '../assets/Meatball pasta.jpg'
import Saucy from '../assets/Saucy Noodles.jpg'
import '../App.css'
import { Link } from "react-router-dom";

const LandingPage = () => {
  const Images = [
    Food, Skillet, mPasta
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [Images.length]);

  return (
    <>
      <div className='border bg-black flex justify-center h-screen overflow-hidden lg:gap-8 p-0 m-0'>
        {/* For large screens: display three images */}
        <div className="hidden lg:flex justify-between w-full h-full">
          {Images.map((image) => (
            <img key={image.id} src={image} alt="" />
          ))}
        </div>

        {/* For small screens: display one image */}
        <div className="lg:hidden w-full h-full">
          <img src={Images[currentIndex]} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className='bg-black opacity-80 overflow-hidden h-screen absolute top-0 w-screen' />
      <div className="absolute top-[50%] flex flex-col left-[40%]">
        <h2 className="text-white text-3xl font-medium">Hey There!</h2>
        <h2 className="text-white text-3xl">Welcome to <span className="font-bold text-[#F48E28]">Foodie!</span></h2>
        <button className="text-white shadow-lg rounded-md  hover:scale-105 duration-500 transition p-4 mx-auto bg-black mt-5">
          <Link to={'/home'}>Get Started</Link>
        </button>
      </div>
    </>
  );
};

export default LandingPage;
