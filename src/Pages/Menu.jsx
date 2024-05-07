import Navbar from "../Components/Navbar";
import { useContext, useState } from "react";
import Gyro from '../assets/Gyro Sandwhic.png';
import Star from '../assets/Star.png';
import Enchilade from '../assets/Enchilade.png';
import GreenBeans from '../assets/GreenBeans.png';
import Pizza from '../assets/Pizza (2).png';
import Chicken from '../assets/Chicken pot pie.png';
import GreeSalad from '../assets/GreenSalad.png';
import { FaPlus } from 'react-icons/fa';
import { CardContext } from "../Context/CardContext";
import { FaMinus } from "react-icons/fa";


const Menu = () => {
    const {addProduct, isCardVisible, increment, selectedProducts, handleTogglecart, removeProduct, handleOutsideClick} = useContext(CardContext)
  const products = [
    { name: 'Gyro Sandwich', image: Gyro, rating: 4.9, price: '$15.00' },
    { name: 'Enchilada', image: Enchilade, rating: 4.8, price: '$12.00' },
    { name: 'Green Beans', image: GreenBeans, rating: 4.7, price: '$10.00' },
    { name: 'Pizza', image: Pizza, rating: 4.5, price: '$18.00' },
    { name: 'Chicken Pot Pie', image: Chicken, rating: 4.6, price: '$14.00' },
    { name: 'Green Salad', image: GreeSalad, rating: 4.9, price: '$9.00' },
  ];

  return (
    <> 
    <div className="fixed top-0 left-0 bg-white">
       <Navbar/>
    </div>
     
      <div className="relative">
        {isCardVisible && (
          <div className="bg-white w-[20rem] absolute right-1 shadow-lg rounded-lg top-10">
            {selectedProducts.length > 0 ? (
              selectedProducts.map((product, index) => (
              <div className="flex flex-col items-center">
                <div key={index} className="flex items-center gap-4 p-2">
                  <img src={product.image} alt={product.name} className="w-10" />
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                 <FaMinus onClick={() => removeProduct(index)} className="cursor-pointer" size={30} color={'#F48E28'}/>
                </div>
                </div>
              ))
            ) : (
              <div>
                <p className="text-center py-3">Your Cart is Empty.</p>
              </div>
            )}
            {selectedProducts.length != 0 &&(
              <button className="border py-3 px-5 pointer mb-2 mx-auto flex rounded-xl">Check Out</button>
            )}
            
          </div>
          
        )}
      </div>
      <div onClick={handleOutsideClick} className="py-5">
        <p className="text-xl text-center leading-[3rem] py-4 sm:px-3 lg:w-[60rem]">
          <span className="text-[#F48E28] font-bold">Foodie</span> has a menu that lets you pick your favorites.
        </p>

        <div className="grid lg:grid-cols-4 gap-5 px-3 place-content-center place-items-center md:grid-cols-3">
          {products.map((product, index) => (
            <div
              className="shadow-lg hover:shadow-2xl cursor-pointer rounded-xl w-[23rem] lg:w-[18rem] md:w-[15rem] sm:w-[17rem]"
              key={index}
              onClick={() => addProduct(product)}
            >
              <img className="lg:w-[20rem] rounded-2xl mx-auto lg:h-[14rem]" src={product.image} alt={product.name} />
              <span className="flex justify-between lg:px-4 px-2 pt-4">
                <h4 className="font-bold">{product.name}</h4>
                <span className="flex items-center gap-3">
                  <img src={Star} alt="Star" />
                  <h5>{product.rating}</h5>
                </span>
              </span>
              <span>
                <h4 className="font-bold text-[#F48E28] text-center p-5">{product.price}</h4>
                <button onClick={increment} className="flex items-center mx-auto gap-2 border p-3 my-2 rounded-xl hover:bg-black hover:text-white transition ease-in-out duration-500">
                  <FaPlus size={20} color={'#F48E28'} />
                  <h4>Order</h4>
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
