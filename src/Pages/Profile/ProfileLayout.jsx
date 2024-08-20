import React, { useContext, useState } from 'react';
import SideBar from './components/Aside';
import { CardContext } from '../../Context/CardContext';

const ProfileLayout = ({children}) => {
    
  return (
    <div className="relative">
      <div>
        <SideBar />
      </div>

   
      <div  className="w-screen lg:ml-[23%] px-3 lg:w-[80%] relative ">
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
