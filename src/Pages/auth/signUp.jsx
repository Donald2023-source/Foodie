import React, { useContext, useEffect, useState } from 'react'
import signUpImg from '../../assets/Wavy Buddies Out of Stock.png'
import logo from '../../assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/authContext'
import { Puff } from 'react-loader-spinner'

const SignUp = () => {

  const [isSuccess, setIsSuccess] = useState(false)
  const [form, setForm] = useState({
    userName: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if(isSuccess){
      navigate('/profile/Home')
    }
  }, [isSuccess, navigate]);
  

  const authentication = (e) => {
    setIsLoading(true)
    e.preventDefault();
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30, 
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data); 
        localStorage.setItem('token', data.token)
        console.log(data.token); 
        setIsSuccess(true)
        setIsLoading(false)
    })
    .catch(err => console.error('Error:', err)); 
};



  return (
    <div className='flex lg:flex-row flex-col gap-24 justify-center bg-orange-50 h-screen'>
    <div className='lg:w-[40%] flex items-center flex-col gap-4 mt-2 lg:mt-20'>
      <h1 className='font-semibold lg:leading-[3rem] w-screen text-xl lg:text-3xl lg:w-[80%] text-center'>Hi There! Foodie's got your back. No Sunday Scaries here. Join 100,000+ others and order in today</h1>
      <img className='lg:w-full w-[60%] lg:block ' src={signUpImg} alt="" />

      <button onClick={authentication} className='bg-orange-600 rounded-lg text-white p-9 hover:scale-90 transition ease-in-out duration-500'>Authenticate</button>
    </div>

    {/* <div className='shadow-xl rounded-xl w-screen lg:w-[30%] h-fit mt-10 py-10 flex bg-white flex-col gap-6'>
      <span className='flex justify-center gap-4 items-center'>
         <img className='w-[12%]' src={logo} alt="" />
          <h2 className='font-semibold'>Foodie</h2>
      </span>

      <span className='ml-10'>
        <h2 className='font-semibold text-3xl'>Sign Up for free</h2>
        <p className='text-sm py-3'>Begin by creating an account today</p>
      </span>
      <form onSubmit={signUp} className='px-10 flex flex-col gap-10' action="">
       <fieldset className='flex flex-col gap-2'>
          <label htmlFor="name">Name</label>
          <input 
          className='border p-3 rounded-lg' 
          onChange={handleChange}
          value={signUpForm.userName}
          required
          name='userName'
          type="text" />
       </fieldset>

       <fieldset className='flex flex-col gap-2'>
          <label htmlFor="Email">Email</label>
          <input 
          name='email'
          className='border p-3 rounded-lg' 
          value={signUpForm.email}
          onChange={handleChange}
          required
          type="email" />
       </fieldset>

       <fieldset className='flex flex-col gap-2'>
          <label htmlFor="Password">Password</label>
          <input 
          className='border p-3 rounded-lg' 
          onChange={handleChange}
          name='password'
          value={signUpForm.password}
          required
          type="password" />
       </fieldset>

        <button type='submit' className='bg-orange-600 rounded-lg text-white p-2 hover:scale-90 transition ease-in-out duration-500'>Submit</button>
      </form>
      <p className='text-center'>Already have an Account? <Link className='text-blue-500' to={'/auth/login'}>Login</Link></p>
    </div> */}
    

    {isLoading && (
                <div style={{ height: '100vh', width: '100vw', backgroundColor: 'black', opacity: '0.92', position: 'absolute', top: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Puff visible={true} height="80" width="80" color="orange" ariaLabel="puff-loading" wrapperStyle={{}} wrapperClass=""/>
                </div>
            )}
  </div>
  )
}

export default SignUp