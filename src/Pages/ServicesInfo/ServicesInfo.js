import React from 'react';
import { useParams } from 'react-router-dom';

const ServicesInfo = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Service Info {serviceId}</h2>
        </div>
    );
};

export default ServicesInfo;