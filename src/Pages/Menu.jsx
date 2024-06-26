import { FaPlus } from "react-icons/fa";
import data from "../menuData";
import { FaStar } from "react-icons/fa";
import { useContext, useState } from "react";
import { CardContext } from "../Context/CardContext";
import { Link } from "react-router-dom";
import { FaMinus } from "react-icons/fa";
import { CartProvider, useCart } from "react-use-cart";
import Cart from "../Components/Cart";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
const Menu = () => {
  const { addItem, items } = useCart();
 
  const { handleOutsideClick, searchToggle } = useContext(CardContext);

  return (
    <>
            <div className="bg-white">
              <Navbar />
      </div>
      <div onClick={handleOutsideClick}>
             <Cart />
              <h2 className="font-bold text-center text-2xl  text-[#F48E28]">Menu</h2>

        <div className="py-5">
          <p className="text-xl mx-auto text-center leading-[3rem] py-4 sm:px-3 lg:w-[60rem]">
            <span className="text-[#F48E28]  font-bold">Foodie</span> has a menu
            that lets you pick your favorites.
          </p>
          <div>
            <input
              className={
                searchToggle
                  ? "border p-2 absolute top-10 right-2 rounded-lg shadow-md"
                  : "hidden"
              }
              type="text"
              onChange={(event) => {
                // console.warn(event.target.value)
                // {items.filter((item) => item.name === event.target.)}
              }}
              
              placeholder="Search"
            />
            
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:gap-5 gap-10 px-3 place-content-center place-items-center md:grid-cols-3">
          {data.productsData.map((item, index) => {
            return (
              <div className="shadow-lg hover:shadow-2xl cursor-pointer rounded-xl w-[23rem] lg:w-[18rem] md:w-[15rem] sm:w-[17rem]">
                <ProductCard
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  item={item}
                  rating={item.rating}
                  key={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
