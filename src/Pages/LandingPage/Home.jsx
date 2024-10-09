import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Services";
import Why from "./Why";
import Footer from "../../Components/Footer";
import Services from "./Services";
const Home = () => {
    return (
        <>
        <Navbar/>
         <div className='flex flex-col justify-center'>
         <Hero/>
        </div>
        <Services/>
         <div className='mt-24'>
         <Why />
        </div>
        <Footer/>
        </>
    )
}
export default Home