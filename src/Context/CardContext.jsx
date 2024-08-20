import React, { createContext, useState, useEffect } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [isCardVisible, setCardVisible] = useState(false);
  // const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchToggle, setSearchToggle] = useState(false);

<<<<<<< HEAD
  
=======
>>>>>>> 814157c7b21617e8c5d0ca4def52305bd3730122
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

<<<<<<< HEAD
  const [isAside, setIsAside] = useState(false);
 
=======
>>>>>>> 814157c7b21617e8c5d0ca4def52305bd3730122
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
<<<<<<< HEAD
        isAside,
        setIsAside
=======
>>>>>>> 814157c7b21617e8c5d0ca4def52305bd3730122
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
