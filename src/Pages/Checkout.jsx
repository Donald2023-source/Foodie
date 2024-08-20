<<<<<<< HEAD
import React, { useContext } from 'react';
import { CardContext } from '../Context/CardContext';
import { useCart } from 'react-use-cart';
import { FaMinus } from 'react-icons/fa';

const Checkout = () => {
  const { selectedProducts } = useContext(CardContext);
  const { items, totalItems, cartTotal, totalUniqueItems, updateItemQuantity, removeItem } = useCart();

  return (
    <div className='lg:ml-4 ml-0 flex lg:flex-row flex-col gap-10 justify-around'>
      {items.length > 0 ? (
        <div className='flex lg:flex-row flex-col gap-10'>
          <div className='mt-3'>
            <span>
              <h2 className='text-center text-2xl font-bold text-orange-500 py-6'>Checkout</h2>
              <h4 className='font-semibold text-lg text-center py-2'>Total items: {totalUniqueItems}</h4>
            </span>
            <div className='flex flex-col gap-8'>
              {items.map((item) => (
                <div className='flex items-center lg:gap-10 gap-2 justify-around' key={item.id}>
                  <img className='h-10 rounded-[2rem]' src={item.image} alt={item.name} />
                  <h2 className='w-32 text-center text-sm'>{item.name}</h2>
                  <h2 className='font-semibold text-sm'>N{item.price.toLocaleString()}</h2>
                  <FaMinus
                    onClick={() => removeItem(item.id)}
                    className='cursor-pointer'
                    size={30}
                    color='orange'
                  />

                  <span className='flex gap-3 items-center'>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      className='border p-2 rounded-md'
                    >
                      +
                    </button>
                    <h2>{item.quantity}</h2>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      className='border p-2 rounded-md'
                    >
                      -
                    </button>
                  </span>
                </div>
              ))}
            </div>
            <h2 className='text-center font-semibold text-lg py-3'>
              Total: N{cartTotal.toLocaleString()}
            </h2>
          </div>

          <div className='shadow-xl rounded-lg border mx-auto md:w-[80%] w-[95%] lg:w-[27rem] px-8 mt-3'>
            <form className='flex flex-col gap-10 py-10' action="">
              <p>Please enter the information below</p>
              <fieldset>
                <input
                  className='border w-full p-3 rounded-lg outline-[#0000009b]'
                  type="text"
                  placeholder='Please enter your name'
                />
              </fieldset>

              <fieldset>
                <input
                  className='border p-3 w-full rounded-lg outline-[#0000009b]'
                  type="text"
                  placeholder='Please enter your email'
                />
              </fieldset>

              <fieldset>
                <input
                  className='border p-3 w-full rounded-lg outline-[#0000009b]'
                  type="text"
                  placeholder='Please enter your password'
                />
              </fieldset>

              <fieldset>
                <input
                  className='border p-3 w-full rounded-lg outline-[#0000009b]'
                  type="text"
                  placeholder='Please enter your CVV'
                />
              </fieldset>

              <fieldset>
                <input
                  className='border p-3 w-full rounded-lg outline-[#0000009b]'
                  type="text"
                  value={`N ${cartTotal.toLocaleString()}`}
                />
              </fieldset>


              <button className='p-3 border bg-orange-300 hover:bg-orange-500 text-white rounded-lg'>
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <h2 className='text-center mt-10 text-2xl font-semibold'>Nothing in the checkout!</h2>
      )}
    </div>
  );
};

export default Checkout;
=======
import {useCart } from "react-use-cart";
import { CardContext } from "../Context/CardContext";
import { useContext, useState } from "react";
import { FaMinus } from "react-icons/fa";

const Checkout = () => {
    const {selectedProducts} = useContext(CardContext)
    
    const {
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
    } = useCart()
    return (
        <>
        <div>
       <div className="flex md:flex-row justify-center lg:flex-row flex-col gap-10  mt-5">
        <div className="flex flex-col items-center gap-[2rem] lg:mt-5">
          <h2 className="font-bold text-center text-2xl text-[#F48E28]">Checkout</h2>
          <h1 className="font-medium">Cart ({totalUniqueItems}) Item(s)</h1>
          {items.map((item) => (
            <div key={item.id} className="flex flex-col mx-auto items-center">
              <div className="flex justify-center gap-[1.2rem] items-center px-4 lg:gap-[4rem]">
                <img className="w-10" src={item.image} alt={item.name} />
                <p className="w-32 text-center">{item.name}</p>
                <p>{item.price * item.quantity}</p>
                <span className="flex gap-2 items-center">
                <button className="bg-[#F48E28] rounded-md hover:bg-black hover:text-white transition duration-300 ease-in-out flex px-3 items-center"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>

                <h2>{item.quantity}</h2>

                <button className="bg-[#F48E28] rounded-md hover:bg-black hover:text-white transition duration-300 ease-in-out flex px-3 items-center"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>

                </span>

                <FaMinus className="cursor-pointer" onClick={() =>removeItem(item.id)} size={30} color="#F48E28"/>
              </div>
              
            </div>
            
          ))}
          <h2 className="font-bold text-lg text-center">Total: N{cartTotal}</h2>

        </div>
        
        <div>
                <form className="shadow-lg px-4 lg:px-4 py-10 bg-black w-fit rounded-lg flex flex-col items-center mx-auto" action="">
                    <h2 className="text-center font-bold text-xl text-[#F48E28]">Payment!</h2>
                    <h3 className="text-center text-white">Please provide the information below.</h3>
                    <fieldset className="border  bg-white p-3 rounded-lg my-5 w-[22rem] lg:w-[29rem]">
                        <input type="text" placeholder="Please enter your Name"/>
                    </fieldset>
                    <fieldset className="border bg-white p-3 rounded-lg my-5 w-[22rem] lg:w-[29rem]">
                        <input type="email" placeholder="Please enter your email"/>
                    </fieldset>
                    <fieldset className="border  bg-white p-3 rounded-lg my-5 w-[22rem] lg:w-[29rem]">
                        <input type="text" placeholder="Please enter Amount"/>
                    </fieldset>
                    <fieldset className="border  bg-white p-3 rounded-lg my-5 w-[22rem] lg:w-[29rem]">
                        <input type="password" placeholder="Please enter your Password"/>
                    </fieldset>
                    <fieldset className="border  bg-white p-3 rounded-lg my-5 w-[22rem] lg:w-[29rem]">
                        <input type="password" placeholder="Confirm Password"/>
                    </fieldset>

                    <button className="flex mx-auto p-2 cursor-pointer text-white bg-[#F48E28] w-32 justify-center rounded-lg">Confirm</button>
                </form>
            </div>
       </div>
       
        </div>
        </>
    )
}
export default Checkout

>>>>>>> 814157c7b21617e8c5d0ca4def52305bd3730122
