import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center">
            <h1>404</h1>
            <h6>Page Not Found</h6>
            <p>This page you are looking for doesn't exist on an other error occurred. Go to -                
                <NavLink to="/home">Home</NavLink>
            </p>
        </div>
    );
};

export default NotFound;