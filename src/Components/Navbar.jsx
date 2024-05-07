import Logo from '../assets/Logo.png'
import Search  from '../assets/Search.png'
import Cart from '../assets/Cart.png'
import Menu from '../assets/Menu.png'
import { Link } from 'react-router-dom'
import { CardContext } from '../Context/CardContext'
import { FaPlus } from 'react-icons/fa'

import { useContext, useEffect, useRef, useState } from 'react'
const Navbar = () => {
     const inputRef = useRef(null);
     const [isInputFocused, setIsInputfocused] =useState(false) 
     const [nav, setNav] = useState(true)
        const HandleFocus = () => {
            setIsInputfocused(true);
            inputRef.current.focus();
        }
        const HandleNav = () => {
            setNav(!nav)
        }
       const { isCardVisible, setCardVisible, selectedProducts } = useContext(CardContext)
       const cartItemCount = selectedProducts.length;
          const handleCartToggle = () => {
        setCardVisible(!isCardVisible)
        setIsTextVisible(!isTextVisible)
       }
    return (
        <>
        <div>
            <nav>
            <div className='lg:flex lg:gap-[8rem] lg:p-1 items-center w-screen justify-around md:p-5'>
                
                <div className='flex justify-between items-center'>
                    <span className='flex items-center font-bold text-[#f4762874]'>
                <img className='h-10' src={Logo}  />
                <h4>IE</h4>
                </span>
               
               <span className='flex gap-5 items-center'>
               <img className='h-8 lg:hidden cursor-pointer' onClick={handleCartToggle} src={Cart} alt='Cart' />
               
                <h2 className='font-bold absolute top-0 right-9 text-xl count text-[#F48E28]'>{cartItemCount}</h2>
               
                <img onClick={HandleNav} className='h-8 lg:hidden  cursor-pointer' src={Menu} />
                </span>
                </div>
                {/* {isCardVisible && (
          <div className="absolute right-0 bg-white shadow-lg rounded-lg p-5">
            {selectedProducts.length === 0 ? (
              <div className="text-center">
                <h4>Your Cart is Empty.</h4>
                <Link to="/menu">
                  <button className="border p-3 my-2 rounded-xl">
                    Order Now
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                {selectedProducts.map((product, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <img src={product.image} className="w-8 h-8" alt={product.name} />
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}       */}
                <div>
                <ul className={nav ? 'hidden lg:flex gap-14 ': 'lg:flex sm:block md:block gap-14 h-[100vh]'}>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-r-4'><Link to={'/'}>Home</Link></li>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-r-4'><Link to={'/menu'}>Menu</Link></li>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-r-4'>Service</li>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-r-4'>Shop</li>
                    </ul>
                </div>

                <div className='hidden lg:flex gap-4  rounded-xl md:hidden  bg-white p-2 px-8 justify- w-fit justify-between shadow'>
                    <img onClick={HandleFocus} className='h-6 cursor-pointer' src={Search} />
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