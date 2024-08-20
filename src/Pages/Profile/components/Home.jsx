import React, { useState } from 'react';
import { motion } from 'framer-motion';
import data from '../../../data/menuData';
import { Link } from 'react-router-dom';
const Home = () => {
  const [selectedTab, setSelectedTab] = useState('Breakfast');

  const Breakfast = data.productsData.filter(item => item.id <= 6);
  const Appetizer = data.productsData.filter(item => item.id > 6 && item.id <= 12);
  const MainDish = data.productsData.filter(item => item.id > 12 && item.id <= 18);
  

  const MeatAndFishDishes = data.productsData.filter(item => item.category === 'Meat and Fish Dishes');
  const VegetarianAndVeganDishes = data.productsData.filter(item => item.category === 'Vegetarian and Vegan Dishes');

  let displayedItems = [];

  switch (selectedTab) {
    case 'Breakfast': 
      displayedItems = Breakfast;
      break;
    case 'Appetizer': 
      displayedItems = Appetizer;
      break;
    case 'Main Dish':
      displayedItems = MainDish;
      break;
    case 'Meat and Fish Dishes':
      displayedItems = MeatAndFishDishes;
      break;
    case 'Vegetarian and Vegan Dishes':
      displayedItems = VegetarianAndVeganDishes;
      break;
    default: 
      displayedItems = Breakfast;
      break;
  }

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className='w-[100%]'>
      <motion.div 
        className='lg:w-[70%] mt-8 md:w-[70%] w-[90%] mx-auto p-8 md:p-10 lg:p-14 rounded-xl bg-mainColor'
        animate={{ x: [0, 20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      >
        <motion.h2
          className='text-white font-semibold text-xl text-center'
          animate={{ y: [0, -10, 0], opacity: [1, 0.7, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        >
          Hi Alvita
        </motion.h2>
        <motion.p
          className='text-center text-white text-sm py-2'
          animate={{ y: [0, -5, 0], opacity: [1, 0.8, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        >
          Welcome to Foodie!
        </motion.p>
      </motion.div>

      <motion.div
        className='border w-[95%] mx-auto mt-8 p-4 lg:text-base md:text-base text-sm rounded-lg'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className='text-center text-lg font-semibold'>Explore the Rich Flavors of Africa</h2>
        <p className='text-center mt-2'>Discover a variety of delicious African delicacies. Whether you're craving savory stews, hearty grains, or vibrant vegetarian dishes, we've got you covered!</p>
      </motion.div>

  
      <div className='flex flex-col items-center mt-8 text-center justify-center gap-12'>
        <motion.div
          className='flex flex-col gap-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className='font-bold text-2xl '>Main Categories</h2>
          <p className='text-lg'>Filled with delicious African Delicacies</p>
        </motion.div>

        <motion.div
          className='w-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <ul className='flex flex-wrap gap-8 justify-center'>
            {['Breakfast', 'Appetizer', 'Main Dish', 'Meat and Fish Dishes', 'Vegetarian and Vegan Dishes'].map((category, index) => (
              <motion.li
                key={index}
                className={`border w-42 text-center p-3 rounded-lg cursor-pointer ${
                  selectedTab === category ? 'bg-orange-400 text-white' : ''
                }`}
                whileHover={{ scale: 1.05, backgroundColor: '#f59e0b', color: '#fff' }}
                transition={{ duration: 0.3 }}
                onClick={() => handleTabChange(category)}
              >
                {category}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className='w-[90%] mt-8 grid place-content-center place-items-center cursor-pointer lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {displayedItems.map((item, id) => (
            <div key={id} className='bg-white hover:shadow-xl w-fit p-4 rounded-lg shadow-md'>
              <img src={item.image} alt={item.name} className='w-30 h-[200px] object-cover rounded-lg' />
              <h3 className='mt-4 text-center text-lg font-semibold'>{item.name}</h3>
            </div>
          ))}
        </motion.div>
      </div>
        
        <Link className='flex mx-auto py-10' to={'/menu'}>
        <button className='p-7 rounded-[3rem] bg-orange-400 text-white hover:scale-105 transition border mx-auto'>See more</button>
        </Link>
    </div>
  );
};

export default Home;
