import React, { useContext, useState } from 'react';
import './header.css';
import cartLogo from '../assets/cart-logo.png';
import { CartContext } from './Context'; // Import the CartContext
import { Outlet, Link } from 'react-router-dom';
import CartHover from './CartHover'; // Import the CartHover component
import "./Hover.css";


function Headers() {
    const { uniqueCartItems } = useContext(CartContext); // Use the cartItems from context
    const [isHovered, setIsHovered] = useState(false); // State to track hover

    return (
        <div>
            <div className='header-top'>
                <h2>Neesho</h2>
                <ul className='navpage'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Popular">Popular</Link></li>
                    <li><Link to="/Men">Men</Link></li>
                </ul>
                <div className='cart'>
                    <button className='login-btn'>Login</button>
                    <Link to="/Cart" aria-label="Go to cart">
                        <img 
                            src={cartLogo} 
                            alt="cart" 
                            style={{ cursor: 'pointer' }} 
                            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                            onMouseLeave={() => setIsHovered(false)} // Set hover state to false
                        />
                    </Link>
                    <div className="header-count">{uniqueCartItems.length}</div> {/* Display the cart count */}
                </div>
            </div>
            {isHovered && <CartHover />}
            <Outlet />
        </div>
    );
}

export default Headers;
