
import React, { useState, useEffect } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import { useCart } from "react-use-cart";

const ProductCard = (props) => {
    const { addItem } = useCart();
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];
        setIsLiked(likedProducts.some(product => product.name === props.name));
    }, [props.name]);

    const handleClick = () => {
        setIsLiked((prevIsLiked) => {
            const newIsLiked = !prevIsLiked;
            let likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];

            if (newIsLiked) {
                likedProducts.push({
                    name: props.name,
                    image: props.image,
                    price: props.price,
                    rating: props.rating
                });
            } else {
                likedProducts = likedProducts.filter((product) => product.name !== props.name);
            }

            
            
            localStorage.setItem("likedProducts", JSON.stringify(likedProducts));

            return newIsLiked;
        });
    };

    return (
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img className="w-full h-[200px] object-cover" src={props.image} alt={props.name} />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <FaHeart
                    onClick={handleClick}
                    className={`cursor-pointer ${isLiked ? 'text-red-500' : 'text-white'} text-3xl hover:scale-105 transition-transform duration-300`}
                    size={40}
                />
            </div>
            <div className="relative p-4">
                <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold">{props.name}</h4>
                    <h5 className="text-gray-300">{props.rating}</h5>
                </div>
                <h4 className="font-bold text-[#F48E28] text-center mb-2">N{props.price}</h4>
                <button
                    onClick={() => addItem(props.item)}
                    className="flex items-center mx-auto gap-2 border p-3 rounded-xl hover:bg-black hover:text-white transition ease-in-out duration-500"
                >
                    <FaPlus size={20} color={'#F48E28'} />
                    <h4>Order</h4>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
