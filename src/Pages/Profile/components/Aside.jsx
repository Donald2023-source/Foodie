import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsHouse, BsMenuButton, BsCart, BsHeartFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from 'react-use-cart';
import { CardContext } from '../../../Context/CardContext';
import logo from '../../../assets/Logo.png'
import { useTheme } from '../../../Context/themeContext';

const SideBar = () => {
    const { isAside, setIsAside } = useContext(CardContext);
    const { totalItems } = useCart();
    const activeStyle = 'bg-orange-300 text-white';
    const [likedProducts, setLikedProducts] = useState([]);
    const sidebarRef = useRef(null);

    const { theme } = useTheme()
    useEffect(() => {
        const storedFavourites = JSON.parse(localStorage.getItem('likedProducts')) || [];
        setLikedProducts(storedFavourites);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsAside(false); 
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setIsAside]);

    return (
        <div>
            <nav className='flex items-center justify-between lg:mt-0 lg:justify-end px-2'>
                <FaBars
                    className='lg:hidden cursor-pointer'
                    onClick={() => setIsAside(!isAside)}
                    size={25}
                    color='orange'
                />
            </nav>

            <div className={`hidden lg:flex card ${theme} lg:w-[25%] bg-white flex-col justify-between py-10 px-5 shadow-lg h-screen fixed`}>
            <div>
            <img className='h-10 mb-10 w-fit' src={logo} alt="" />
                <ul className='flex flex-col gap-10'>
                    <NavLink
                        to='/profile/home'
                        className={({ isActive }) =>
                            `flex items-center p-2 rounded-lg gap-7 hover:bg-orange-400 hover:text-white transition ${isActive ? activeStyle : ''}`
                        }
                    >
                        <BsHouse color='orange' size={20} />
                        <h2>Home</h2>
                    </NavLink>

                    <NavLink
                        to='/menu'
                        className={({ isActive }) =>
                            `flex items-center p-2 rounded-lg gap-7 hover:bg-orange-400 hover:text-white transition ${isActive ? activeStyle : ''}`
                        }
                    >
                        <BsMenuButton color='orange' size={20} />
                        <h2>Menu</h2>
                    </NavLink>

                    <NavLink
                        to='/checkout'
                        className={({ isActive }) =>
                            `flex items-center p-2 rounded-lg gap-7 hover:bg-orange-400 hover:text-white transition ${isActive ? activeStyle : ''}`
                        }
                    >
                        <BsCart color='orange' size={20} />
                        <h2>Checkout</h2>
                    </NavLink>

                    <NavLink
                        to='/favourite'
                        className={({ isActive }) =>
                            `flex items-center p-2 rounded-lg gap-7 hover:bg-orange-400 hover:text-white transition ${isActive ? activeStyle : ''}`
                        }
                    >
                        <BsHeartFill color='orange' size={20} />
                        <h2>Favourite ({likedProducts.length})</h2>
                    </NavLink>
                </ul>
                </div>
                <h2 className='flex items-center p-2 rounded-lg gap-7 hover:bg-orange-400 hover:text-white transition'>
                    LogOut
                </h2>
            </div>
            

            <AnimatePresence>
                {isAside && (
                    <motion.div
                        ref={sidebarRef} 
                        className={`lg:hidden h-screen aside ${theme} absolute shadow-lg bg-white rounded-lg px-3 w-[60%] flex flex-col justify-between py-10 z-50`}
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.5 }}
                    >
                        <ul className='flex flex-col gap-10'>
                            <NavLink
                                to='/profile/home'
                                className={({ isActive }) =>
                                    `flex items-center p-2 rounded-lg gap-7 hover:bg-orange-300 hover:text-white transition ${isActive ? activeStyle : ''}`
                                }
                            >
                                <BsHouse color='orange' size={20} />
                                <h2>Home</h2>
                            </NavLink>

                            <NavLink
                                to='/menu'
                                className={({ isActive }) =>
                                    `flex items-center p-2 rounded-lg gap-7 hover:bg-orange-300 hover:text-white transition ${isActive ? activeStyle : ''}`
                                }
                            >
                                <BsMenuButton color='orange' size={20} />
                                <h2>Menu</h2>
                            </NavLink>

                            <NavLink
                                to='/checkout'
                                className={({ isActive }) =>
                                    `flex items-center p-2 rounded-lg gap-7 hover:bg-orange-300 hover:text-white transition ${isActive ? activeStyle : ''}`
                                }
                            >
                                <BsCart color='orange' size={20} />
                                <h2>Checkout</h2>
                            </NavLink>

                            <NavLink
                                to='/favourite'
                                className={({ isActive }) =>
                                    `flex items-center p-2 rounded-lg gap-7 hover:bg-orange-300 hover:text-white transition ${isActive ? activeStyle : ''}`
                                }
                            >
                                <BsHeartFill color='orange' size={20} />
                                <h2>Favourite ({likedProducts.length})</h2>
                            </NavLink>
                        </ul>

                        <h2 className='flex items-center p-2 rounded-lg gap-7 hover:bg-orange-300 hover:text-white transition'>
                            LogOut
                        </h2>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SideBar;
