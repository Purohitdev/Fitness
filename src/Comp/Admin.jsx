import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [loadingFormData, setLoadingFormData] = useState(true);
    const [errorUsers, setErrorUsers] = useState('');
    const [errorFormData, setErrorFormData] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('https://authentication-1ffz.onrender.com/api/auth/users', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setUsers(res.data);
            } catch (err) {
                setErrorUsers('Error fetching users data');
                console.error('Error fetching users data:', err);
            } finally {
                setLoadingUsers(false);
            }
        };

        const fetchFormData = async () => {
            try {
                const res = await axios.get('https://authentication-1ffz.onrender.com/api/form/data', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setFormData(res.data);
            } catch (err) {
                setErrorFormData('Error fetching form data');
                console.error('Error fetching form data:', err);
            } finally {
                setLoadingFormData(false);
            }
        };

        fetchUsers();
        fetchFormData();
    }, []);

    return (
        <div className="admin">
            <div className="newlogin">
                <div className="upper-admin">
                    <h1>New login/Register!!</h1>
                </div>
                <div className="detail-show-login">
                    {loadingUsers ? (
                        <div className="user-div">
                            <p>Wait let (Login/register) data load it...</p>
                        </div>
                    ) : errorUsers ? (
                        <p>{errorUsers}</p>
                    ) : (
                        <div className="user-div">
                            {users.map((user) => (
                                <div className="user-box">
                                    <p> <h1> uid: </h1>{user._id} </p>
                                    <p> <h1>username: </h1>{user.username}</p>
                                    <p> <h1>email: </h1>{user.email}</p>
                                </div>
                            ))}

                        </div>
                    )}
                </div>
            </div>
            <div className="newform">
                <div className="upper-admin">
                    <h1>Contact form update!!</h1>
                </div>
                <div className="detail-show-form">
                    {loadingFormData ? (
                        <div className="user-div">
                            <p>Wait let (Contact) data load it...</p>
                        </div>

                    ) : errorFormData ? (
                        <p>{errorFormData}</p>
                    ) : (

                        <div className="user-div">
                            {formData.map((data) => (
                                <div className="user-box">
                                    <p> <h1> uid: </h1>{data._id} </p>
                                    <p> <h1>name: </h1>{data.name}</p>
                                    <p> <h1>age: </h1>{data.age}</p>
                                    <p> <h1>email: </h1>{data.email}</p>
                                    <p> <h1>address: </h1>{data.address}</p>
                                    <p> <h1>subscription: </h1>{data.subscription}</p>

                                </div>
                            ))}

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Admin;