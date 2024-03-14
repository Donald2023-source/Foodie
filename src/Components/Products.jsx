import { useEffect, useState } from 'react';
import Gyro from '../assets/Gyro Sandwhic.png';
import Star from '../assets/Star.png';
import Enchilade from '../assets/Enchilade.png';
import GreenBeans from '../assets/GreenBeans.png';
import Pizza from '../assets/Pizza (2).png';
import Chicken from '../assets/Chicken pot pie.png';
import GreeSalad from '../assets/GreenSalad.png';

const Products = () => {
  const products = [
    { name: 'Gyro Sandwhic', image: Gyro, rating: 4.9, price: '$15.00' },
    { name: 'Enchilada', image: Enchilade, rating: 4.8, price: '$12.00' },
    { name: 'Green Beans', image: GreenBeans, rating: 4.7, price: '$10.00' },
    { name: 'Pizza', image: Pizza, rating: 4.5, price: '$18.00' },
    { name: 'Chicken Pot Pie', image: Chicken, rating: 4.6, price: '$14.00' },
    { name: 'Green Salad', image: GreeSalad, rating: 4.9, price: '$9.00' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isSmallScreen) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [isSmallScreen, products.length]);

  return (
    <>
      <div className='mt-12'>
        <span>
          <h4 className='text-center text-[#F48E28] font-semi-bold'>Products</h4>
          <h2 className='text-center font-bold text-3xl py-4'>Most Popular dishes</h2>
        </span>

        {isSmallScreen ? (
          <div className=''>
            {products.map((product, index) => (
              <div className='items-center flex-col p-3 transition ease-in duration-500' key={index} style={{ display: index === currentIndex ? 'flex' : 'none' }}>
                <img className='h-64 w-[25rem]' src={product.image} alt={product.name} />
                <h4 className='font-bold text-lg pt-2'>{product.name}</h4>
                <h4 className='py-3 font-bold text-md'>{product.price}</h4>
                <button className='border bg-[#F48E28] p-3 rounded-[2rem] text-white text-sm'>Add to Cart</button>
              </div>
            ))}
          </div>
        ) : (
          <div className='grid grid-cols-3 place-content-center w-screen p-0 place-items-center gap-12'>
            {products.map((product, index) => (
              <div className='shadow-lg hover:shadow-2xl cursor-pointer rounded-2xl lg:w-[20rem] md:w-[17rem]' key={index} >
                <img className='h-54 w-fit' src={product.image} alt={product.name} />
                <span className='flex justify-between px-2'>
                <h4 className='font-bold '>{product.name}</h4>
                <span className='flex  items-center gap-3 bg'>
                <img src={Star} />
                <h5>{product.rating}</h5>
                </span>
                </span>
                <span className='flex items-center justify-between px-2 py-5 pb-5'>
                <button className='border bg-[#F48E28] sm:p-2 p-3 rounded-[2rem] sm:text-sm md:bg-red-900 text-white text-sm'>Add to Cart</button>
                <h4>{product.price}</h4>
                </span>
              </div>
            ))}
          </div>
        )}
        <span className='hidden lg:block md:flex'>
          <h4 className='font-semibold text-center rounded-full bg-[#F48E28] text-white py-4 w-32 border mt-5 hover:shadow-2xl cursor-pointer mx-auto flex justify-center'>See More</h4>
        </span>
      </div>
    </>
  );
};

export default Products;
