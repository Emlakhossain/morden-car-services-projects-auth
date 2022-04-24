import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    // console.log(service)
    const { _id, name, img, price, description } = service;

    /* use navigate for using dynamic route */
    const navigate = useNavigate();
    const singleServiceInfo = id => {
        navigate(`service/${id}`)
    }

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
                    <button onClick={() => singleServiceInfo(_id)} className='service-btn'>{name}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;