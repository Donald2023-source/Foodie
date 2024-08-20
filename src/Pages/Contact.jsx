import { FaWhatsapp } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaMailBulk } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa"
const Contact = () => {
    return (
        <>
        <div>
            <h2 className="text-2xl font-bold text-center p-2">Contact Us</h2>
            <p className="text-center text-lg">Our Contact services are always available to attend to you. You can reach us via any of the social media handles below. <br /> We would also love to get your feed back to aid efficiency and growth</p>
            <div className="flex justify-center gap-[2rem] mt-4">
                <div>
                    <form className="flex flex-col items-center gap-4 py-3 shadow-lg rounded-md px-3" action="">
                        <fieldset>
                            <input className="border py-3 text-black w-[22rem] px-6 rounded-md" type="text" placeholder="Please enter your name" />
                        </fieldset>

                        <fieldset>
                            <input className="border py-3 text-black w-[22rem] px-6 rounded-md" type="email" placeholder="Please enter your email" />
                        </fieldset>

                        <fieldset>
                            <textarea className="border py-3 text-black w-[22rem] px-6 rounded-md" name="" id="" cols="30" rows="10" placeholder="Talk to Us"></textarea>
                        </fieldset>
                        <button className="flex mx-auto p-2 cursor-pointer text-white bg-[#F48E28] w-32 justify-center rounded-lg">Submit</button>
                    </form>
                </div>

                <div className="lg:flex flex-col lg:gap-20 grid grid-cols-2 gap-7 px-5 py-2 mt-10">
                    <span className="flex items-center gap-2">
                        <FaWhatsapp href="www.whatsApp" color="white" className="bg-green-500 p-1 rounded-xl" size={35}/>
                        <p>08140381704</p>
                    </span>

                    <span className="flex items-center gap-2">
                        <FaFacebook href="www.facebook.com"  size={35} color="blue"/>
                        <p>Official_Foodie</p>
                    </span>

                    <span className="flex items-center gap-2">
                        <FaInstagram href="www.instagram.com" size={37} />
                        <p>the_official_foodie</p>
                    </span>
                    
                    <span className="flex items-center gap-2">
                        <FaTiktok href="www.tiktok.com" size={37}/>
                        <p>Foodie_</p>
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact