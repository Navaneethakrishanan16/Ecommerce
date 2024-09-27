
import React, { useEffect, useState } from 'react';
import './Men.css';
import Button from "./Button";

function Men() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res => res.json())
            .then(json => setProduct(json));
    }, []);

    const filter = product.slice(10, 26);

    return (
        <>
            <h1>All Collection</h1>
            <div className='all-collection'>
                {filter.map(item => (
                    <div key={item.id} className='product-item'>
                        <img src={item.image} alt={item.title} />
                        <h6>{item.title}</h6>
                        <span>${item.price}</span>
                        {/* Pass the product to Button component */}
                        <Button product={item} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Men;
