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
