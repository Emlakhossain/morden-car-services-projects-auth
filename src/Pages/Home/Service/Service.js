import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    console.log(service)
    const { name, img, price, description } = service;

    return (
        <div>
            <div className='service'>
                <img src={img} alt="" />
                <div className='text-container'>
                    <h4>Service Name: {name}</h4>
                    <p><small>Description:{description}</small></p>
                    <p>Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;