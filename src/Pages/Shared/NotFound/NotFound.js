import React from 'react';
import { NavLink } from 'react-router-dom';
import notFound from '../../../images/404.png'

const NotFound = () => {
    return (
        <div className=" not-found text-center py-5">
            <img src={notFound} alt="" />
            <div className="not-found-details">
                <h1>404</h1>
                <h6>Page Not Found</h6>
                <p>This page you are looking for doesn't exist on an other error occurred. Go to -                
                    <NavLink to="/home">Home</NavLink>
                </p>
            </div>
            
        </div>
    );
};

export default NotFound;