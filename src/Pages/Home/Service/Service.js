import React from 'react';
import './Service.css';
const Service = ({ service }) => {
    console.log(service)
    const { name, img, price, description } = service;

    return (
        <div>
            <div className='service'>
                <div className='service-img'>
                    <img src={img} alt="" />
                </div>
                <div className='text-container'>
                    <h4>Service: {name}</h4>
                    <p><small>Description:{description}</small></p>
                    <p>Price: {price}</p>
                    <button className='service-btn'>{name}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;