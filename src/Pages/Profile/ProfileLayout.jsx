import React, { useContext, useState } from 'react';
import SideBar from './components/Aside';
import { CardContext } from '../../Context/CardContext';
import { FaMoon } from 'react-icons/fa';
import { useTheme } from '../../Context/themeContext';
const ProfileLayout = ({children}) => {
    
  const { toggleTheme } = useTheme()
  return (
    <div className="relative">
    
      <div>
        <SideBar />
      </div>
      <FaMoon onClick={toggleTheme} className='absolute cursor-pointer top-3 right-3' size={20}/>

   
      <div  className="w-screen lg:ml-[23%] px-3 lg:w-[80%] relative ">
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
