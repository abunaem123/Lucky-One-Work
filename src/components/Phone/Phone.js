import React from 'react';
import './Phone.css'

const Phone = (props) => {
    const { img, name, price, id, } = props.phone;
    return (
        <div >
            <img src={img} alt="" />
            <h2>{name} </h2>
            <p>Price: {price} </p>
            <p>Id: {id} </p>
        </div>
    );
};

export default Phone;