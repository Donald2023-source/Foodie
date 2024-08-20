import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Products from '../Components/Products'
import Why from '../Components/Why'
import Footer from '../Components/Footer'
const Home = () => {
    return (
        <>
        <Navbar/>
         <div className='flex flex-col justify-center'>
         <Hero/>
        </div>
        <Products/>
         <div className='mt-24'>
         <Why />
        </div>
        <Footer/>
        </>
    )
}
export default Home