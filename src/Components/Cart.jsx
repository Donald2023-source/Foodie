import { useCart } from "react-use-cart"
import { CardContext } from "../Context/CardContext"
import { useContext } from "react"
import { FaMinus } from "react-icons/fa"
import { Link } from "react-router-dom"

const Cart = () => {
    const {isCardVisible, isTextVisible, selectedProducts ,setIsTextVisible} = useContext(CardContext)
    const {  
        isEmpty,
        items,
        totalUniqueItems,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart()
    return (
        <>
        <div>
        </div>
        <div>
        {isEmpty ? (
            <div className="bg-white lg:w-[30rem] w-[20rem] lg:right-16 lg:top-14 fixed right-1 shadow-lg rounded-lg top-10 py-4">
            <h2 className="text-center font-medium">Your cart is empty</h2>
            </div>
        ) : (
               <div className="bg-white flex flex-col items justify-center gap-4 lg:w-[30rem] w-[20rem] lg:right-16 lg:top-14 fixed right-1 shadow-lg rounded-lg top-10 py-4" >
                {items.map((item, index) => {
        return ( 
            <div className="flex items-center justify-between px-5" key={index}>
            <img className="w-10 rounded-md" src={item.image} alt="" />
            <p className="w-16 text-center">{item.name}</p>
            <p>{item.price}</p>
            <FaMinus className="cursor-pointer" onClick={() =>removeItem(item.id)} size={30} color={'#F48E28'}/>
        </div>
        )
       
    })}
    <div className="flex gap-2 items-center mx-auto">
        <Link to={"/checkout"}>
        <button 
        className="flex items-center mx-auto gap-2 border p-2 my-2 rounded-xl hover:bg-black hover:text-white transition ease-in-out duration-500">
            Checkout
        </button>
        </Link>
        <button 
        onClick={() => emptyCart(items)}
        className="flex items-center mx-auto gap-2 border p-2 my-2 rounded-lg
         hover:bg-black hover:text-white transition ease-in-out duration-500">
            Clear Cart
        </button>
    </div>
    
</div>
        )}
        </div>
     
        </>
    )
}
export default Cart
