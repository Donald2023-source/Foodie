import Bike_Delivery from '../../assets/Bike Delivery.png'
import Burger from '../../assets/Burger.png'
import pizza from '../../assets/Pizza.png'
import Combo from '../../assets/Food_Combo.png'
import Mushroom from '../../assets/Mushroom.png'
import Clock from '../../assets/Clock.png'
import Location from '../../assets/Location.png'
import Phone from '../../assets/Phone.png'
import '../../App.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import React, { useContext } from 'react'
import { useTheme } from '../../Context/themeContext'


const Hero = () => {
    const {theme, toggleTheme} = useTheme();
  return (
    <div>
        <div className='lg:flex justify-between mx-auto lg:w-[85%] lg:gap-[15rem] lg:p-2 md:p-7 p-1'>
        <div className='lg:w-[26rem] flex flex-col items-center gap-8'>
            <img className='h-12' src={Bike_Delivery}/>
            <h2 className='font-extrabold lg:text-left text-center text-3xl lg:text-4xl leading-[3rem]'>The fattest Delivery In <span className='text-[#F48E28]'>Your City</span></h2>
            <h4 className='lg:text-left md:text-md text-sm text-center leading-9'><span className='font-bold text-center text-[#F48E28] text-xl'>Welcome to Foodie!. </span>Never Worry about urgent deliveries. Foodie has you covered, We have your best interest in mind. Fast and efficient at all times and in all locations</h4>

            <Link to={'/auth/signup'}>
                 <button className='border p-3 rounded-lg bg-[#EFAB68] text-white hover:bg-[#f47628] transition ease-in duration-150'>Order Now</button>
            </Link>
            
        </div>


        <div>
            <div className="grid grid-cols-2 lg:gap-12 gap-y-5 place-content-center py-6 overflow-x-hidden">
                <motion.div    animate={{ y: [0, -19, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }} className={`h-42 shadow-lg hover:shadow-2xl hover:text-white transition ease-in duration-300 cursor-pointer hover:bg-gradient-to-tr hover:bg-[#f47628] rounded-xl lg:w-56 flex flex-col items-center mx-2 card ${theme} justify-center`}>
                    <img className='h-20 lg:h-32' src={Burger} />
                        <h2 className='p-2 font-bold lg:text-xl italic'>Burger</h2>
                        <h2 className='p-2 text-sm lg:text-md md:text-md font-bold'><span className='text-red-600'>$</span>172.00</h2>
                </motion.div>

                <div  className={`h-42 shadow-lg hover:shadow-2xl hover:text-white transition ease-in duration-300 cursor-pointer hover:bg-gradient-to-tr hover:bg-[#f47628] rounded-xl lg:w-56 flex flex-col items-center mx-2 card ${theme}`}>
                    <img className='h-20 lg:h-32' src={Combo} />
                        <h2 className='p-2 font-bold lg:text-xl italic'>Food Combo</h2>
                        <h2 className='p-2 text-sm lg:text-md md:text-md font-bold'><span className='text-red-600'>$</span>172.00</h2>
                </div>

                <div className={`h-42 shadow-lg hover:shadow-2xl hover:text-white transition ease-in duration-300 cursor-pointer hover:bg-gradient-to-tr hover:bg-[#f47628] rounded-xl lg:w-56 flex flex-col items-center justify-center mx-2 card ${theme}`}
                >
                    <img className='h-20  lg:h-32' src={Mushroom} />
                        <h2 className='p-2 font-bold lg:text-xl italic'>Mushroom</h2>
                        <h2 className='p-2 text-sm lg:text-md md:text-md font-bold'><span className='text-red-600'>$</span>172.00</h2>
                </div>

                <motion.div animate={{ x: [0, -19, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }} className={`h-42 shadow-lg hover:shadow-2xl hover:text-white transition ease-in duration-300 cursor-pointer hover:bg-gradient-to-tr hover:bg-[#f47628] rounded-xl lg:w-56 flex flex-col items-center mx-2 card ${theme}`}>
                    <img className='h-20 lg:h-32' src={pizza} />
                        <h2 className='p-2 font-bold lg:text-xl italic'>Pizza</h2>
                        <h2 className='p-2 text-sm lg:text-md md:text-md font-bold'><span className='text-red-600'>$</span>172.00</h2>
                </motion.div>
            </div>
        </div>
        </div>

        
    </div>
  )
}

export default Hero