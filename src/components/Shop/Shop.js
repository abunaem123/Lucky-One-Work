import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart)
    }
    const deleteButton = () => {
        const deleteItem = [];
        setCart(deleteItem)
    }
    return (
        <div className='shop-container'>
            <div className="product-container row row-cols-1 row-cols-md-3 g-4 p-4">
                {
                    products.map(product => <Product key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container bg-light p-4">
                <h4>Order Summary</h4>
                {/* <p>Selected Items: {cart.length}</p> */}
                {cart.map((item) =>
                    <div key={item.id} className='d-flex align-items-center p-2'>
                        <div className='m-2 p-2 border bg-light rounded-circle'>
                            <img src={item.img} width="30px" height="30px" alt="" />
                        </div>
                        <h6>{item.name}</h6>
                    </div>
                    // <div>
                    //     <img src={item.img} alt="" />
                    //     <p key={item.id}>{item.name}</p>
                    // </div>
                )}
                <div className='d-flex flex-column'>
                    <button className='m-2 border border-3 border-dark'>Choose 1 for Me </button>
                    <button onClick={deleteButton} className='m-2 border border-3 border-dark'>Choose Again </button>
                </div>
                {/* <button >Buy One</button>
            <br />
            <button onClick={deleteButton} className='mt-2'>Choose Again</button> */}
            </div>
        </div >
    );
};

export default Shop;