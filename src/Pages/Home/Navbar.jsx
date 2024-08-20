import Logo from '../../assets/Logo.png'
import Search  from '../../assets/Search.png'
import Cart from '../../assets/Cart.png'
import Menu from '../../assets/Menu.png'
import { Link } from 'react-router-dom'
import { CardContext } from '../../Context/CardContext'
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
            <div className='lg:flex lg:gap-[8rem] lg:p-1 py-6 items-center w-screen justify-around md:p-5 px-2'>
                
                <div className='flex justify-between items-center'>
                    <span className='flex items-center font-bold text-[#f4762874]'>
                <img className='h-10' src={Logo}  />
                <h4>IE</h4>
                </span>
               
               <span className='flex gap-5 items-center cursor-pointer'>
                <Link to={'/auth/signup'}>
               <button className='border lg:hidden  bg-black text-white py-2 px-4 rounded-xl'>Sign Up</button>
               </Link>
                <img onClick={HandleNav} className='h-8 lg:hidden  cursor-pointer' src={Menu} />

                </span>
                </div>
                <div>
                <ul className={ nav
              ? "lg:hidden fixed w-screen h-[100%] z-50 flex flex-col gap-7 items-center shadow-xl  rounded-xl bg-white"
              : "lg:flex gap-10 hidden"}>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-b-2'><Link to={'/home'}>Home</Link></li>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-b-2'><Link to={'/about'}>About</Link></li>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-b-2'>Support</li>
                        <li className='py-14 lg:p-1 text-center hover:text-[#F48E28] hover:text-xl transition ease-in duration-500 hover:border-b-2'><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>
                <Link to={'/auth/signup'}>
                <button className='border lg:flex  hidden bg-black text-white py-2 px-4 rounded-xl'>Sign Up</button>
                </Link>
            </div>
            </nav>
        </div>
        </>
    )
    }
export default Navbar