import Quality from '../../assets/Q-Food.png';
import Healthy from '../../assets/Healthy Food.png';
import fastDelivery from '../../assets/fast-delivery.png';
import { motion } from 'framer-motion'

const Why = () => {
   return (
    <>
    <div className='flex flex-col items-center py-10'>
        <h4 className='font-bold uppercase text-center text-[#f47628]'>Services</h4>
        <h1 className='font-bold text-2xl text-center py-5'>Why Choose our Food</h1>

        <div className='flex flex-col flex-wrap justify-center gap-20 lg:gap-1 w-screen lg:flex lg:flex-row lg:justify-around lg:px-20 lg:w-[90rem] md:flex md:flex-row'>
            <motion.section 
             whileInView={{ opacity: 1, x: 0}}  
             animate={{ opacity: 0.5, x: -100}} 
             transition={{ duration: 1}} className='border flex flex-col items-center gap-4 py-4 px-auto lg:w-[21rem] md:w-[19rem] rounded-2xl'>
                <img className='bg-[#F5DDC4] rounded-[40%] p-3 h-14' src={Quality}/>
                <h4 className='font-bold text-xl'>Wide Selection of Restaurants</h4>
                <p className='text-center leading-8 px-3'>We collaborate with a diverse range of restaurants, allowing you to explore various cuisines and meals, all available in one place.</p>
            </motion.section>

            <motion.section
             whileInView={{ opacity: 1, x: 0}}  
             animate={{ opacity: 0.5, x: -100}} 
             transition={{ duration: 1}} 
             className='flex flex-col items-center gap-4 py-4 px-auto lg:w-[22rem] md:w-[18rem] rounded-2xl shadow-xl border'>
                <img className='bg-[#F5DDC4] rounded-[40%] p-3 h-14' src={Healthy}/>
                <h4 className='font-bold text-xl'>Easy Ordering Process</h4>
                <p className='text-center leading-8 px-3'>Our platform makes it simple for you to select your favorite dishes from various restaurants and place your order in just a few clicks.</p>
            </motion.section>

            <section className='border flex flex-col items-center gap-4 py-4 px-auto lg:w-[22rem] md:w-[18rem] mb-4 rounded-2xl'>
                <img className='bg-[#F5DDC4] rounded-[40%] p-3 h-14' src={fastDelivery}/>
                <h4 className='font-bold text-xl'>Fast and Reliable Delivery</h4>
                <p className='text-center leading-8 px-3'>Once you’ve made your choice, our delivery partners ensure your meal arrives quickly and in perfect condition, so you can enjoy it fresh.</p>
            </section>
        </div>
    </div>
    </>
   );
}
export default Why;
