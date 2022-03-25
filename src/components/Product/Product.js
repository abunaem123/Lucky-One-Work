import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name, price, id } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p>Price: {price}</p>
                <p>Id: {id}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='cart-btn'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;