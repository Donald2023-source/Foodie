import React, { createContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [isCardVisible, setCardVisible] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addProduct = (product) => {
    setSelectedProducts((prev) => [...prev, product]);
  };

  const removeProduct = (index) => {
    setSelectedProducts((prev) => prev.filter((_, i) => i !== index));
  };
  
  const handleOutsideClick = (e) => {
    if (isCardVisible && !e.target.closest(".cart-container")) {
      setCardVisible(false),
      console.log("I'm clicked")
    }
  };


  return (
    <CardContext.Provider
      value={{
        isCardVisible,
        setCardVisible,
        selectedProducts,
        addProduct,
        removeProduct,
        handleOutsideClick
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
