import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Products from '../Components/Products'
import Why from '../Components/Why'
const Home = () => {
    return (
        <>
         <div className='flex flex-col justify-center'>
         <Navbar/>
         <Hero/>
        </div>
        <Products/>
         <div className='mt-24'>
         <Why />
        </div>
        </>
    )
}
export default Home