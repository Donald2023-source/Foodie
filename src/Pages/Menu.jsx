import Navbar from "../Components/Navbar"

import { useEffect, useState } from "react";
import Gyro from '../assets/Gyro Sandwhic.png';
import Star from '../assets/Star.png';
import Enchilade from '../assets/Enchilade.png';
import GreenBeans from '../assets/GreenBeans.png';
import Pizza from '../assets/Pizza (2).png';
import Chicken from '../assets/Chicken pot pie.png';
import GreeSalad from '../assets/GreenSalad.png';
import Burger from '../assets/BurgerCat.png'
import Drinks from '../assets/Drinks.png'
import Fries from '../assets/Fries.png'
import PizzaWhole from '../assets/pizzawhole 1.png'

const Menu = () => {
    
  const products = [
    { name: 'Gyro Sandwhic', image: Gyro, rating: 4.9, price: '$15.00' },
    { name: 'Enchilada', image: Enchilade, rating: 4.8, price: '$12.00' },
    { name: 'Green Beans', image: GreenBeans, rating: 4.7, price: '$10.00' },
    { name: 'Pizza', image: Pizza, rating: 4.5, price: '$18.00' },
    { name: 'Chicken Pot Pie', image: Chicken, rating: 4.6, price: '$14.00' },
    { name: 'Green Salad', image: GreeSalad, rating: 4.9, price: '$9.00' },
  ];
    return (
        <>
        <div>
        <div>
            <Navbar/>
            <div>
                <p className="text-xl mx-auto text-center leading-[3rem] py-4 sm:px-3 lg:w-[60rem]"><span className="text-[#F48E28] font-bold">Foodie</span> gives you a wide range, so you can select and have the best from our diverse menu. You get to select from different categories to suite your appetite.</p>
            </div>
        </div>
        <div>
            <div>
            <h2 className="text-center text-2xl py-3 font-bold">Category</h2>
              <section className="flex gap-14 w-screen justify-center py-5 mx-auto"> {/**Category block */}
                <div className="border lg:p-8 cursor-pointer md:p-8 p-6 rounded-xl hover:bg-[#F48E28] hover:text-white transition ease-in-out duration-500"> Cat1</div>
                <div className="border lg:p-8 cursor-pointer md:p-8 p-6 rounded-xl hover:bg-[#F48E28] hover:text-white transition ease-in-out duration-500">Cat2</div>
                <div className="border lg:p-8 cursor-pointer md:p-8 p-6 rounded-xl hover:bg-[#F48E28] hover:text-white transition ease-in-out duration-500">Cat3</div>
              </section>
              <div className="grid lg:grid-cols-4 gap-5 px-3 place-content-center place-items-center md:grid-cols-3">
              {products.map((product, index) => (
                <div className="shadow-lg hover:shadow-2xl cursor-pointer rounded-xl w-[23rem] lg:w-[18rem] md:w-[15rem] sm:w-[17rem]" key={index}>
                    <img className="lg:w-[20rem] rounded-2xl mx-auto lg:h-[14rem]" src={product.image} alt={product.name}/>
                    <span className="flex justify-between lg:px-4 px-2 pt-4">
                    <h4 className="font-bold">
                    {product.name}</h4>
                    <span className="flex items-center gap-3">
                    <img src={Star} alt="" />
                    <h5>{product.rating}</h5>
                    </span>
                    </span>
                    <span>
                      <h4 className="font-bold text-[#F48E28] text-center p-5">
                      {product.price}  
                      </h4> 
                    </span>
                </div>
              ))}
              </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Menu 