import React, { useContext } from 'react'
import './Button.css'
import { CartContext } from './Context';


function Button({ product }) {


    const { addToCart  } = useContext(CartContext);

    const add = () => {
        addToCart(product);
    }

    return (
        <div className='button'>
            <button className='add' onClick={add}>ADD CART</button>
        </div>
    )
}

export default Button

// import React, { useContext } from 'react';
// import './Button.css';
// import { CartContext } from './Context';

// function Button({ product }) {
//     const { addToCart } = useContext(CartContext);

//     return (
//         <div className='button'>
//             <button className='add' onClick={() => addToCart(product)}>ADD TO CART</button>
//         </div>
//     );
// }

// export default Button;
