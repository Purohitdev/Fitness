import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


function Reg() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
            setMessage(res.data.message);
        } catch (error) {
            setMessage(error.response ? error.response.data.error : 'An error occurred');
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
                     <Link className="nav-link ll" to="/login" >already have acc ? login  </Link> 
                </div>
                {message && <p>{message}</p>}

            </div>

        </div>
    );
}

export default Reg;
