import React from 'react'
import signUpImg from '../../assets/Wavy Buddies Out of Stock.png'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className='flex lg:flex-row overflow-hidden border border-red-200 flex-col gap-20 justify-center bg-orange-50 h-screen'>
      <div className='lg:w-[40%] border-red-500 border-4 lg:flex md:flex hidden items-center flex-col gap-10 mt-56 lg:mt-20'>
        <h1 className='font-semibold lg:leading-[3rem] w-screen text-xl lg:text-3xl lg:w-[80%] text-center'>Hi There! Foodie's got your back. No Sunday Scaries here. Join 100,000+ others and order in today</h1>
        <img className='lg:w-full object-cover w-[30%] lg:block ' src={signUpImg} alt="" />
      </div>

      <div className='shadow-xl rounded-xl w-screen lg:w-[30%] h-fit mt-10 py-10 flex bg-white flex-col gap-6'>
        <span className='flex justify-center gap-4 items-center'>
           <img className='w-[12%]' src={logo} alt="" />
            <h2 className='font-semibold'>Foodie</h2>
        </span>

        <span className='ml-10'>
          <h2 className='font-semibold text-3xl'>LOGIN</h2>
          <p className='text-sm py-3'>Welcome Back!</p>
        </span>
        <form className='px-10 flex flex-col gap-10' action="">

         <fieldset className='flex flex-col gap-2'>
            <label htmlFor="Email">Email</label>
            <input className='border p-3 rounded-lg' type="email" />
         </fieldset>

         <fieldset className='flex flex-col gap-2'>
            <label htmlFor="Password">Password</label>
            <input className='border p-3 rounded-lg' type="password" />
         </fieldset>

          <button className='bg-orange-600 rounded-lg text-white p-2 hover:scale-90 transition ease-in-out duration-500'>Submit</button>
        </form>
        <p className='text-center'>Don't have an account? <Link className='text-blue-500' to={'/auth/signup'}>SignUp</Link></p>
      </div>
    </div>
  )
}

export default SignUp