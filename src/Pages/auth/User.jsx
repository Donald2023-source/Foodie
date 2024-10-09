import React, { useState } from 'react';
import image from '../../assets/pexels-jj-jordan-44924743-8195814.jpg';
import logo from '../../assets/Logo.png';
import { FiEye, FiEyeOff, FiUser } from 'react-icons/fi'; 

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='container relative flex'>
      <div className='h-screen w-screen border'>
        <img
          className='w-full h-full object-cover flex items-center justify-center'
          src={image}
          alt=''
        />
      </div>

      <div className='lg:max-w-7xl md:max-w-5xl absolute top-0 h-full p-8 lg:p-20 lg:w-[60%] flex flex-col items-center gap-10 justify-center bg-[#070707b7]'>
        <h2 className='p-6 rounded-full bg-[#5c5c5cb8] text-xl w-fit'><FiUser/></h2>

        <div className='w-full'>
          <form className='flex flex-col gap-5 items-center justify-center w-full'>
            <fieldset className='flex items-center bg-[#3a393987] w-full lg:w-[60%] text-lg rounded-md gap-2'>
              <span className='border-r-2 px-2 h-full text-gray-400 '>+234</span>
              <input
                maxLength={10}
                className='py-2 outline-none bg-[#4444442a] text-gray-200'
                type="text"
                placeholder='Mobile number'
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '');
                }}
              />
            </fieldset>

            <fieldset className='relative  bg-[#3a39396a] text-gray-200 w-full lg:w-[60%] rounded-md p-2 flex items-center'>
              <input
                className='outline-none px-2 p-1 bg-[#3a3a3a00] w-full'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
              />
              <span
                className='absolute right-3 cursor-pointer text-gray-400'
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />} 
              </span>
            </fieldset>
            
            <fieldset className='text-gray-200 lg:w-[65%] rounded-md p-2 flex items-center gap-4'>
                <input className='p-2' type="checkbox" />
                <p className='leading-relaxed text-xs lg:text-md'>By creating an account, you agree to your Terms and have read and acknowledged the Global Privacy Statement</p>
            </fieldset>
            <button className='p-3 w-full rounded-lg text-white border-none bg-mainColor'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
