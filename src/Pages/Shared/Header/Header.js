import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/Logo/logo.png'

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        // navbar or navigation bar section
        <>
            <div className="header w-100 bg-light">
                <div className="container">
                    {/* site logo */}
                        <div className="navbar navbar-expand-md navbar-light w-100 ">
                            <div className="col-md-4 m-0 p-0 ">
                                <div className="navbar-brand m-0 p-0" >
                                    <img className="py-3" src={logo} alt="" />
                                </div>
                            </div>
                            {/* navigation bar */}
                            <div className="col-md-8"> 
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <nav className="collapse navbar-collapse" id="navbarNav">
                                    <div className="col-md-6">
                                        <ul className="navbar-nav ">
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="text-primary fw-bold" className="nav-link fs-5" to="/home">Home</NavLink>
                                            </li>
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="text-primary fw-bold" className="nav-link fs-5" to="/services">Services</NavLink>
                                            </li>
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="text-primary fw-bold" className="nav-link fs-5" to="/doctors">Doctors</NavLink>
                                            </li>
                                            <li className="nav-item p-2">
                                                <NavLink activeClassName="text-primary fw-bold" className="nav-link fs-5" to="/contact">Contact</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* login and registration bar */}
                                    <div className="col-md-6">
                                        <ul className="navbar-nav justify-content-center">
                                            <li className="nav-item p-2">
                                            { user?.email?
                                                    <NavLink to="/login">
                                                    <button onClick={logOut} className="btn btn-danger rounded-3" >Log-out</button>
                                                    </NavLink>
                                                    :
                                                    <NavLink to="/login">
                                                    <button className="btn btn-outline-danger me-1 rounded-3 fw-bold" >Log In</button>
                                                    </NavLink>
                                                }
                                            </li>
                                            { user?.email?
                                                <li className="nav-item p-2 my-2">
                                                    Signed in as: <a href="/login">{user?.displayName}</a>
                                                </li>
                                                :
                                                ''
                                            }
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default Header;