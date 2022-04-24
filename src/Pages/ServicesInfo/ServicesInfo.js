import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesInfo = () => {
    const { serviceId } = useParams();
    const [informations, setInformations] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInformations(data))
    }, [])
    return (
        <div>
            <h2>Service Info {serviceId}</h2>
            <p>Name:{informations.name}</p>
            <Link to='/booking'><button>Booking Service</button></Link>
        </div>
    );
};

export default ServicesInfo;