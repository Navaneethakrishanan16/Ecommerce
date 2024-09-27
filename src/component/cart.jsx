import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from './Context'; // Import CartContext

function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext); // Use cartItems and removeFromCart from context




    return (
        <div className='cart-container'>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <div className='cart-container-item'>
                    {cartItems.map((item, index) => (
                        <div key={index} className='item-of-cart'>
                            <img src={item.image} alt={item.title} />
                            <h6>{item.title}</h6>
                            <span>${item.price}</span>
                            <p className='p'>Quantity: {item.quantity}   </p>
                            <p className='p'>Total:{item.total}</p>
                            <div className='button'>
                                <button className='sub' onClick={() => removeFromCart(item)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;
