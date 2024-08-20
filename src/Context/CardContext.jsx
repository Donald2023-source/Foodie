import React, { createContext, useState, useEffect } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [isCardVisible, setCardVisible] = useState(false);
  // const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchToggle, setSearchToggle] = useState(false);

  
  // useEffect(() => {
  //   const savedCart = localStorage.getItem("selectedProducts");
  //   if (savedCart) {
  //     setSelectedProducts(JSON.parse(savedCart));
  //   }
  // }, []);

  const handleOutsideClick = (e) => {
    if (isCardVisible && !e.target.closest(".cart-container")) {
      setCardVisible(false);
    } 
  };

  const [isAside, setIsAside] = useState(false);
 
  const handleSearchToggle = () => {
    setSearchToggle(!searchToggle);
  };



  return (
    <CardContext.Provider
      value={{
        isCardVisible,
        setCardVisible,
        handleOutsideClick,
        handleSearchToggle,
        searchToggle,
        isAside,
        setIsAside
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
