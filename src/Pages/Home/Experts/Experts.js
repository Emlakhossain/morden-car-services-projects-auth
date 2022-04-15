import React from 'react';
import Expert1 from '../../../images/experts/expert-1.jpg';
import Expert2 from '../../../images/experts/expert-2.jpg';
import Expert3 from '../../../images/experts/expert-3.jpg';
import Expert4 from '../../../images/experts/expert-4.jpg';
import Expert5 from '../../../images/experts/expert-5.jpg';
import Expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'brand Tom', img: Expert1 },
    { id: 2, name: 'brand Tom', img: Expert2 },
    { id: 3, name: 'brand Tom', img: Expert3 },
    { id: 4, name: 'brand Tom', img: Expert4 },
    { id: 5, name: 'brand Tom', img: Expert5 },
    { id: 6, name: 'brand Tom', img: Expert6 },
];

const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-center my-5 text-primary fw-bold'>Our Experts</h2>
            <div className="row gx-5">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;