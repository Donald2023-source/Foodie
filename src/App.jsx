import { useState } from 'react'


import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Products from './Components/Products'
import Why from './Components/Why'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col justify-center'>
    <Navbar/>
    <Hero/>
    </div>
  <Products/>

    <Why />
 
  
 
   </>
  )
}

export default App
