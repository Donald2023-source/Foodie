import Logo from '../assets/Logo.png'
import Search  from '../assets/Search.png'
import Cart from '../assets/Cart.png'
import Menu from '../assets/Menu.png'

import { useEffect, useRef, useState } from 'react'
const Navbar = () => {

   
     const inputRef = useRef(null);
     const [isInputFocused, setIsInputfocused] =useState(false) 
    
        const HandleFocus = () => {
            setIsInputfocused(true);
            inputRef.current.focus();
        }

        const [nav, setNav] = useState(true)

       function HandleNav() {
        setNav(!nav)
        document.body.style.overflowY='hidden'
       }
       
    return (

        <>
        <div>
            <nav>
            <div className='lg:flex place-items-center items-center w-screen justify-around'>
                
                <div className='flex justify-between items-center'>
                    <span className='flex items-center font-bold text-[#f4762874]'>
                <img className='h-10' src={Logo}  />
                <h4>IE</h4>
                </span>
               
                <img onClick={HandleNav} className='h-8 lg:hidden  cursor-pointer' src={Menu} />
                </div>

                <div>
                <ul className={nav ? 'hidden  lg:flex gap-14' : 'lg:flex sm:block md:block gap-14 h-[100vh]'}>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-r-4'><a href="/">Home</a></li>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-r-4'><a href="/">Menu</a></li>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-r-4'><a href="/">Service</a></li>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-r-4'><a href="/">Shop</a></li>
                    </ul>
                </div>

                <div className='hidden lg:flex gap-4  rounded-xl md:hidden  bg-white p-2 px-5 justify- w-fit justify-between shadow'>
                    <img onClick={HandleFocus} className='h-6 cursor-pointer' src={Search} />
                    <input type="text" ref={inputRef} className={isInputFocused ? 'focused' : ''} placeholder='Search' />
                    <img className='border-gray-900 border-l-2 pl-2 cursor-pointer' src={Cart} />
                </div>
            </div>
            </nav>
        </div>
        </>
    )
    }
export default Navbar 