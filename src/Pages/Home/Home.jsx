import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Why from "./Why";
import Footer from "../../Components/Footer";
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