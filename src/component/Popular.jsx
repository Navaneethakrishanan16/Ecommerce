
import React, { useEffect, useState } from 'react';
import './Popular.css';
import Button from "./Button"

function Men() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res => res.json())
            .then(json => setProduct(json));
    }, []);

    const topProducts = product.slice(0, 4);

    return (
        <>
            <h1>women Top Selling Collection</h1>
            <div className='top-selling'>
                {
                    topProducts.map((item, index) =>
                        item.category === "women's clothing" ? (
                            <div key={index} className='cart-top-sell'>
                                <img src={item.image} alt={item.title} />
                                <h6>{item.title}</h6>
                                <span>${item.price}</span>
                                {/* Pass the product to Button component */}
                                <Button product={item} />
                            </div>
                        ) : null
                    )
                }
            </div>
        </>
    );
}

export default Men;



// [{"id":20,
// "title":"DANVOUY Womens T Shirt Casual Cotton Short"
// ,"price":12.99,
// "description":"95%Cotton,5%Spandex, Features: Casual, Short Sleeve,
//   Letter Print,V-Neck,Fashion Tees,
//   The fabric is soft and has some stretch.,
//    Occasion: Casual/Office/Beach/School/Home/Street.
//     Season: Spring,Summer,Autumn,Winter.",
//     "category":"women's clothing",
//     "image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//     "rating":{"rate":3.6,
//         "count":145}}
