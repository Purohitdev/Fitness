import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Reg() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://authentication-1ffz.onrender.com/api/auth/register', { username, email, password });
            setMessage(res.data.message);
            setIsSuccess(true);
        } catch (error) {
            setMessage(error.response ? error.response.data.error : 'An error occurred');
            setIsSuccess(false);
        }
    };

    return (
        <div className='reg'>
            <div className="reg-box">
                <div className="box-mid">
                    <h2>Register in Zoneis</h2>
                    <p>Grab high-class graphics and boost your design workflow</p>
                    <form onSubmit={handleRegister}>
                        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit" className='buttonn'>Register</button>
                    </form>
                    <Link className="nav-link ll" to="/login">Already a Member? Login Now!</Link>
                </div>
                {message && (
                    <div>
                        {isSuccess && <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green', marginRight: '10px' }} />}
                        <p>{message}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Reg;