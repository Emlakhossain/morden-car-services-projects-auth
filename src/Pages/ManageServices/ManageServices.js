import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are u sure want to delete');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                })

        }
    }
    return (
        <div>
            <h2>Manage services </h2>
            <div className='text-center'>
                {
                    services.map(service => <div key={service._id}>
                        <h4>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h4>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageServices;