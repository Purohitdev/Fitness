import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post('https://authentication-1ffz.onrender.com/api/auth/login', formData);
            setMessage(res.data.message || 'Login successful!');
        } catch (error) {
            console.error('Login error:', error);
            setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='reg new'>
            <div className="reg-box">
                <div className="box-mid">
                    <h2>Login back in Zoneis</h2>
                    <p>Grab high-class graphics and boost your design workflow</p>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <div className="div-btnnn">
                        <button type="submit" disabled={loading} className='buttonn'>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                        </div>

                    
                      
                    </form>
                    <Link className="nav-link ll" to="/Reg">Don't have an account? Register now</Link>

                    <div className="approv">
                        {message && <p>{message}</p>} 👋🏻
                        </div>
                </div>
               
            </div>
        </div>
    );
}

export default Login;