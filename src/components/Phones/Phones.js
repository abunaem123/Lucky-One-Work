import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';
import './Phones.css'

const Phones = () => {
    const [phones, setPhone] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPhone(data))
    }, [])
    return (
        <div className='single-div'>
            {
                phones.map(phone => <Phone key={phone.id}
                    phone={phone}
                ></Phone>)
            }
        </div>
    );
};

export default Phones;