import React from 'react';
import { Navigate } from 'react-router-dom';

// Function to check if the user is an admin
const isAdmin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user && user.email === 'xyz@gmail.com' && user.role === 'admin';
};

const ProtectedAdminRoute = ({ children }) => {
    return isAdmin() ? children : <Navigate to="/login" />;
};

export default ProtectedAdminRoute;
