import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 py-5 bg-dark text-white items-center'>
            <h4>Modern Car Solution </h4>
            <p>©copyRight:{year}</p>
        </footer>
    );
};

export default Footer;