import React, { useContext } from 'react';
import { CartContext } from './Context';
import "./Hover.css";

function CartHover() {
    const { cartItems} = useContext(CartContext); // Use the cartItems and remove function from context

    return (
        <div className='hover-cart-container' >
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <div className='hover-cart-item'>
                    {cartItems.map((item, index) => (
                        <div key={index} className='hover-item-of-cart'>
                            <img src={item.image} alt={item.title} />
                            <h6>{item.title}</h6>
                            <span>${item.price}</span>
                            <p className='p'>Quantity: {item.quantity}</p>
                            <p className='p'>Total: {item.total}</p>
                           
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CartHover;
