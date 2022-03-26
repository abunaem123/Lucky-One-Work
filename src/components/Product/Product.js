import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name, price, id } = props.product;

    return (
        // <div className='product col'>
        //     <img src={img} alt="" />
        //     <div className='product-info'>
        //         <h3 className='product-name'>{name}</h3>
        //         <p>Price: {price}</p>
        //         <p>Id: {id}</p>
        //     </div>
        //     <button onClick={() => props.handleAddToCart(props.product)} className='cart-btn'>
        //         <p>Add to Cart</p>
        //     </button>
        // </div>
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top w-50 mx-auto" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}</p>
                </div>
                <button onClick={() => props.handleAddToCart(props.product)} className='cart-btn'>
                    <p>Add to Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Product;