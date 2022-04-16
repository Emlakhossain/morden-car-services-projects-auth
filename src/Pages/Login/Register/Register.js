import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/home')
    }

    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='register-form mb-5'>
            <h2 className='text-center my-4 text-primary'>Please Register</h2>

            <form onSubmit={handleRegister}>
                <input type="text" name="Name" id="" placeholder='Enter Your Name' />
                <input type="email" name="email" id="" placeholder='Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='bg-primary text-white fw-bold rounded' type="submit" value="Register" />
            </form>
            <p>Already Have an account? <Link to='/login' className='register-login' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;