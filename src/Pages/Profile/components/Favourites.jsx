import React, { useState, useEffect } from 'react';
import star from '../../../assets/Star.png';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Favourites = () => {
    const [likedProducts, setLikedProducts] = useState([]);

    useEffect(() => {
        const storedLikedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];
        setLikedProducts(storedLikedProducts);
    }, []);

    return (
        <div className='lg:ml-4  ml-0'>
            <h2 className='text-2xl font-bold text-orange-500 text-center py-3'>My Favourites</h2>

            <div className='flex flex-col justify-center gap-8'> 
                {likedProducts.length === 0 ? (
                    <h2 className='text-xl text-center font-semibold'>
                        No Favourites. Go to <Link className='text-orange-500' to="/menu">Menu</Link>
                    </h2>
                ) : (
                    likedProducts.map((product, id) => (
                        <div key={id} className='flex items-center  justify-center gap-10'>
                            <img className='w-16 rounded-[2rem]' src={product.image} alt={product.name} />
                            <h2 className='font-semibold w-32'>{product.name}</h2>
                            <h2 className='font-bold'>N{product.price}</h2>
                            <span className='flex items-center gap-2'>
                                <img src={star} alt="Star" />
                                <h2>{product.rating}</h2>
                            </span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Favourites;
