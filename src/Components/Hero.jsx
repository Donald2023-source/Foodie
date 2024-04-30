import Bike_Delivery from '../assets/Bike Delivery.png'
import Burger from '../assets/Burger.png'
import pizza from '../assets/Pizza.png'
import Combo from '../assets/Food_Combo.png'
import Mushroom from '../assets/Mushroom.png'
import Clock from '../assets/Clock.png'
import Location from '../assets/Location.png'
import Phone from '../assets/Phone.png'
import '../App.css'

const Hero = () => {
    return (
        <>
        <div className='lg:flex justify-around lg:gap-[14rem] lg:p-2 md:p-7'>
        <div className='lg:w-[26rem] flex flex-col items-center gap-8'>
            <img className='h-12' src={Bike_Delivery}/>
            <h2 className='font-extrabold lg:text-left text-center text-4xl leading-[3rem]'>The fattest Delivery In <span className='text-[#F48E28]'>Your City</span></h2>
            <h4 className='lg:text-left text-center leading-9'><span className='font-bold text-center text-[#F48E28] text-xl'>Welcome to Foodie!. </span>Never Worry about urgent deliveries. Foodie has you covered, We have your best interest in mind. Fast and efficient at all times and in all locations</h4>

            <button className='border p-3 rounded-lg bg-[#EFAB68] text-white hover:bg-[#f47628] transition ease-in duration-150'>Order Now</button>
        </div>


        <div>
            <div className="grid grid-cols-2 lg:gap-12 place-content-center py-6 overflow-x-hidden">
                <div className="h-42 shadow-lg hover:shadow-2xl hover:text-white transition ease-in duration-300 cursor-pointer hover:bg-gradient-to-tr hover:bg-[#f47628] rounded-xl lg:w-56 flex flex-col items-center mx-2">
                    <img className='h-32 z-[10]' src={Burger} />
                        <h2 className='p-2 font-bold text-xl italic'>Burger</h2>
                        <h2 className='p-2 font-bold'><span className='text-red-600'>$</span>172.00</h2>
                </div>

                <div className="h-42 shadow-lg hover:shadow-2xl hover:text-white transition ease-in duration-300 cursor-pointer hover:bg-gradient-to-tr hover:bg-[#f47628] rounded-xl lg:w-56 flex flex-col items-center mx-2">
                    <img className='h-32 z-[10] ' src={Combo} />
                        <h2 className='p-2 font-bold text-xl italic'>Food Combo</h2>
                        <h2 className='p-2 font-bold'><span className='text-red-600'>$</span>172.00</h2>
                </div>

                <div className="h-42 shadow-lg hover:shadow-2xl hover:text-white transition ease-in duration-300 cursor-pointer hover:bg-gradient-to-tr hover:bg-[#f47628] rounded-xl lg:w-56 flex flex-col items-center mx-2 p"
                >
                    <img className='h-32 z-[10] ' src={Mushroom} />
                        <h2 className='p-2 font-bold text-xl italic'>Mushroom</h2>
                        <h2 className='p-2 font-bold'><span className='text-red-600'>$</span>172.00</h2>
                </div>

                <div className="h-42 shadow-lg hover:shadow-2xl hover:text-white transition ease-in duration-300 cursor-pointer hover:bg-gradient-to-tr hover:bg-[#f47628] rounded-xl lg:w-56 flex flex-col items-center mx-2">
                    <img className='h-32 z-[10] ' src={pizza} />
                        <h2 className='p-2 font-bold text-xl italic'>Pizza</h2>
                        <h2 className='p-2 font-bold'><span className='text-red-600'>$</span>172.00</h2>
                </div>
            </div>
        </div>
        </div>

        <div>
            <div className='flex justify-around items-center flex-wrap lg:gap-[0.5rem]  sm:gap-4 md:justify-between sm:justify-between shadow-lg p-10 lg:w-[90%] md:w-[100%] mt-6 sm:w-[100%] gap-5 w-screen rounded-2xl lg:mx-auto'>
                <span className='text-center flex flex-col gap-6 items-center'>
                    <img className='bg-[#f47628] p-3 rounded-[50%]' src={Clock} />
                    <h3 className='font-bold text-xs lg:text-lg md:text-sm sm:text-xs'>Today 8:00am - 8:00pm</h3>
                    <p className='text-sm'>Working Time</p>
                </span>
                
                <span className='text-center flex flex-col gap-3 items-center'>
                <img className='bg-[#f47628] p-3 rounded-[50%]' src={Location} />
                <h3 className='font-bold text-xs lg:text-lg md:text-sm sm:text-xs'>Lagos, Nigeria</h3>
                <p className='text-sm'>Our Location</p>
                </span>
                
                <span className='text-center flex flex-col gap-3 items-center'>
                <img className='bg-[#f47628] p-3 rounded-[50%]' src={Phone} />
                <h3 className='font-bold text-xs lg:text-lg md:text-sm sm:text-xs'>+234 814 038 1704</h3>
                <p className='text-sm'>Phhone Number</p>
                </span>
            </div>
        </div>
        </>
    )
}
export default Hero