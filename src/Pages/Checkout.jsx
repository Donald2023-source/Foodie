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

