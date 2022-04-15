import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {

    const navigate = useNavigate();
    const handleOnSubmit = event => {
        event.preventDefault()
    }

    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <div className='register-form mb-5'>
            <h2 className='text-center my-4 text-primary'>Please Register</h2>

            <form onSubmit={handleOnSubmit}>
                <input type="text" name="Name" id="" placeholder='Enter Your Name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='bg-primary text-white fw-bold rounded' type="submit" value="Register" />
            </form>
            <p>Already Have an account? <Link to='/login' className='register-login' onClick={handleLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;