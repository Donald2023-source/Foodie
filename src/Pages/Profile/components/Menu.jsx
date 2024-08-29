import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import data from '../../../data/menuData';
import { useCart } from 'react-use-cart';
import ProductCard from '../../../Components/ProductCard';
import Cart from '../../../Components/Cart';
import cart from '../../../assets/Cart.png'
import { useTheme } from '../../../Context/themeContext';

const Menu = () => {
  const { addItem } = useCart();
  const [selectedTab, setSelectedTab] = useState('Breakfast');
  const [isCartVisible, setIsCartVisible] = useState(false)


  
  const BreakFast = data.productsData.filter(item => item.id <= 6);
  const Appetizer = data.productsData.filter(item => item.id > 6 && item.id <= 12);
  const MainDish = data.productsData.filter(item => item.id > 12 && item.id <= 18);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  let displayedItems = [];

  switch (selectedTab) {
    case 'Breakfast':
      displayedItems = BreakFast;
      break;
    case 'Appetizer':
      displayedItems = Appetizer;
      break;
    case 'Main Dish':
      displayedItems = MainDish;
      break;
    default:
      displayedItems = BreakFast;
      break;
  }

  return (
    <div >
      <span className='flex items-center justify-center'>
        <h2 className='text-center py-2 font-bold text-3xl text-orange-500'>Menu</h2>
        <span className='flex items-center px-8 absolute right-8 -top-6 lg:right-28 gap-8 justify-end'>
        <FaSearch className='cursor-pointer' size={20} color='black' />
        <img onClick={() => setIsCartVisible(!isCartVisible)} className='cursor-pointer' src={cart} alt="" />
        </span>
      </span>

      <div>
        <p className='text-center py-2'>Please choose from any of the categories</p>
        <div>
          <ul className='flex lg:gap-20 gap-10 flex-wrap text-xs py-5 text-center justify-center'>
            <motion.li
              initial={{ scale: 1 }} whileHover={{ scale: 0.9 }} transition={{ duration: 0.3 }}
              className={`lg:p-8 p-5 border rounded-xl w-22 lg:w-28 cursor-pointer ${selectedTab === 'Breakfast' ? 'bg-orange-500 border-orange-500' : ''}`}
              onClick={() => handleTabClick('Breakfast')}
            >
              Breakfast
            </motion.li>
            <motion.li
              initial={{ scale: 1 }} whileHover={{ scale: 0.9 }} transition={{ duration: 0.3 }}
              className={`lg:p-8 p-5 border rounded-xl w-22 lg:w-28 cursor-pointer ${selectedTab === 'Appetizer' ? 'bg-orange-500 border-orange-500' : ''}`}
              onClick={() => handleTabClick('Appetizer')}
            >

              
              Appetizer
            </motion.li>
            <motion.li
              initial={{ scale: 1 }} whileHover={{ scale: 0.9 }} transition={{ duration: 0.3 }}
              className={`lg:p-8 p-5 border rounded-xl w-20 lg:w-28 cursor-pointer ${selectedTab === 'Main Dish' ? 'bg-orange-500 border-orange-500' : ''}`}
              onClick={() => handleTabClick('Main Dish')}
            >
              Main Dish
            </motion.li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedItems.map((item, index) => (
          <ProductCard
            image={item.image}
            name={item.name}
            price={item.price}
            item={item}
            rating={item.rating}
            
            key={index}
            addItem={addItem} 
          />
        ))}
      </div>
      <div className='absolute top-2'>
        {isCartVisible && (
          <Cart/>
        )}  
      </div>
    </div>
  );
};

export default Menu;
