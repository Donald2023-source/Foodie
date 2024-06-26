import { FaFacebook, FaYoutube, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
const Footer =() => {
    return(
        <>
        <div className="grid grid-cols-1 place-items-center text-white w-screen gap-8 lg:flex bg-[#F48E28] lg:justify-around p-20 h-fit">
            <div>
                <img className='mx-auto' src={logo} alt="" />
                <span className="flex mt-12 gap-4">
                    <FaFacebook size={25} color='blue'/>
                    <FaYoutube size={25} color='red'/>
                    <FaTwitter size={25} color='aqua'/>
                    <FaPinterest size={25} color='red'/>
                    <FaInstagram size={25}/>
                </span>
            </div>

            <div className="flex items-center gap-[7rem]">
                <span>
                <ul>
                    <li className="py-3"><Link to={'/home'}>Home</Link></li>
                    <li className="py-3"><Link to={'/menu'}>Menu</Link></li>
                    <li className="py-3"><Link to={'/contact'}>Contact</Link></li>
                    <li className="py-3">Shop</li>
                </ul>
                </span>

                <span> 
                    <ul className="no-underline list-none"> 
                        <li className="py-3">Careers</li>
                        <li className="py-3">Community</li>
                        <li className="py-3">Privacy Policy</li>
                    </ul >
                </span>
            </div>

            <div className="flex gap-8 lg:flex items-center lg:gap-8">
                <input className="bg-white p-4 rounded-2xl w-[12rem] text-sm" type="text" placeholder="Upadates in your inbox"/>
                <button className="p-4 bg-orange-600 rounded-[40%] w-16">Go</button>
            </div>
        </div>
        </>
    )
}
export default Footer