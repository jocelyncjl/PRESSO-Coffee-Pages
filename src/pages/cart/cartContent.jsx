import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log("cartItems-ooooo", cartItems);
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name
            ? {
                ...i,
                quantity: i.quantity + 1,
                total: i.price * (i.quantity + 1),
              }
            : i
        );
      }

      return [...prevItems, { ...item, quantity: 1, total: item.price }];
    });
  };

  const removeFromCart = (itemName) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== itemName));
  };







  return (
    <CartContext.Provider value={{ cartItems, addToCart,removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
