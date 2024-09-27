
import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {

        const storedCartItems = localStorage.getItem("uniqueCartItems");
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    const addToCart = (product) => {
        const existingProduct = cartItems.find(item => item.id === product.id);

        if (existingProduct) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? {
                    ...item,
                    quantity: item.quantity + 1,
                    total: Math.floor(product.price * (item.quantity + 1))
                } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1, total: product.price }]);
        }
    };

    const removeFromCart = (item) => {
        const updatedCartItems = cartItems.map(product => {
            if (product.id === item.id && product.quantity > 0) {
                return {
                    ...product,
                    quantity: product.quantity - 1,
                    total: Math.floor(item.price * (product.quantity - 1))
                };
            }
            return product;
        }).filter(product => product.quantity > 0);

        setCartItems(updatedCartItems);
    };

    const uniqueCartItems = Array.from(new Map(cartItems.map(item => [item.id, item])).values());

    useEffect(() => {
        localStorage.setItem("uniqueCartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, uniqueCartItems, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
