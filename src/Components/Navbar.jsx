import Logo from '../assets/Logo.png'
import Search  from '../assets/Search.png'
import Cart from '../assets/Cart.png'
import Menu from '../assets/Menu.png'
import { Link } from 'react-router-dom'
import { CardContext } from '../Context/CardContext'
import { useContext, useEffect, useRef, useState } from 'react'
import { useCart } from 'react-use-cart'

const Navbar = () => {
    const {totalUniqueItems} = useCart()
     const inputRef = useRef(null);
     const [isInputFocused, setIsInputfocused] =useState(false) 

    
     const [nav, setNav] = useState(false)
        const HandleFocus = () => {
            setIsInputfocused(true);
            inputRef.current.focus();
        }
        const HandleNav = () => {
            setNav(!nav)
        }
       const { isCardVisible, setCardVisible, selectedProducts, handleSearchToggle } = useContext(CardContext)
          const handleCartToggle = () => {
        setCardVisible(!isCardVisible)
       }
    return (
        <>
        <div>
            <nav>
            <div className='lg:flex lg:gap-[8rem] lg:p-1 items-center w-screen justify-around md:p-5 px-2'>
                
                <div className='flex justify-between items-center'>
                    <span className='flex items-center font-bold text-[#f4762874]'>
                <img className='h-10' src={Logo}  />
                <h4>IE</h4>
                </span>
               
               <span className='flex gap-5 items-center cursor-pointer'>
               <img className='lg:hidden'  onClick={handleSearchToggle} src={Search} alt="" />

               <img className='h-8 lg:hidden cursor-pointer' onClick={handleCartToggle} src={Cart} alt='Cart' />
               
                <h2 className='font-bold absolute top-0 lg:right-[5.5rem] lg:text-lg right-[2.8rem] text-xl count md:top-5 md:right-[3.5rem] text-[#F48E28]'>{totalUniqueItems}</h2>
               
                <img onClick={HandleNav} className='h-8 lg:hidden  cursor-pointer' src={Menu} />

                </span>
                </div>
                <div>
                <ul className={ nav
              ? "lg:hidden fixed w-screen h-[100%] z-50 flex flex-col gap-7 items-center shadow-xl  rounded-xl bg-white"
              : "lg:flex gap-10 hidden"}>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-r-4'><Link to={'/'}>Home</Link></li>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-r-4'><Link to={'/menu'}>Menu</Link></li>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-r-4'>Shop</li>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-r-4'><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>

                <div className='hidden lg:flex gap-4  rounded-xl bg-white p-2 px-8 justify- w-fit justify-between shadow'>
                    <img onClick={HandleFocus} className='h-6 lg:flex hidden cursor-pointer' src={Search} />
                    <input type="text" ref={inputRef} className={isInputFocused ? 'focused' : ''} placeholder='Search' />
                    <img onClick={handleCartToggle} className='border-gray-900 border-l-2 pl-2 cursor-pointer' src={Cart} />
                    
                </div>
            </div>
            </nav>
        </div>
        </>
    )
    }
export default Navbar;