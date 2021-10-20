import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../../../images/404.png'

const NotFound = () => {
    return (
        // not found section
        <div className="not-found text-center py-5">
            <div>
                <img src={notFound} alt="" />
            </div>
            <div className="not-found-details">
                <h1 className="fw-bolder">404</h1>
                <h5 className="fw-bolder">Page Not Found !</h5>
                <p>This page you are looking for doesn't exist on an other error occurred. Go to -                
                    <NavLink to="/home">Home</NavLink>
                </p>
            </div>
        </div>
    );
};

export default NotFound;