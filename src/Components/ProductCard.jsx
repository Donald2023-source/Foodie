import { FaPlus } from "react-icons/fa"
import { useCart } from "react-use-cart"
const ProductCard = (props) => {
    const {addItem, item, totalItems} = useCart()
    return (
        <>
         <div>
              <img className="lg:w-[20rem] rounded-2xl mx-auto lg:h-[14rem]" src={props.image} alt={props.name} />
              <span className="flex justify-between lg:px-4 px-2 pt-4">
                <h4 className="font-bold">{props.name}</h4>
                <span className="flex items-center gap-3">

                  <h5>{props.rating}</h5>
                </span>
              </span>
              <span>
                <h4 className="font-bold text-[#F48E28] text-center p-5">N{props.price}</h4>
                <button onClick={() =>addItem(props.item)} className="flex items-center mx-auto gap-2 border p-3 my-2 rounded-xl hover:bg-black hover:text-white transition ease-in-out duration-500">
                  <FaPlus size={20} color={'#F48E28'} />
                  <h4>Order</h4>
                </button>
              </span>
              </div>


        </>
    )
}
export default ProductCard