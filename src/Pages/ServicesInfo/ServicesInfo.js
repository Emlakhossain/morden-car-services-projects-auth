import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesInfo = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Service Info {serviceId}</h2>
            <Link to='/booking'><button>Booking Service</button></Link>
        </div>
    );
};

export default ServicesInfo;