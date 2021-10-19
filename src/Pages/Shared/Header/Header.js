import React from 'react';
import { Button, Col, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/Logo/logo.png'

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user?.email);

    return (
        <div>
            
            <Navbar bg="light" variant="light">
                <Container>
                    
                    <Col xs="1" lg="3">
                    <Navbar.Brand to="/#home">
                        <img src={logo} alt="" />                        
                    </Navbar.Brand>
                    </Col>
                    
                    <Col xs="1" lg="4" >
                        <Nav className="justify-content-end ">
                            <NavLink className="px-3 fs-5 nav-link" activeClassName="text-primary fw-bold" to="/home">Home</NavLink>
                            <NavLink className="px-3 fs-5 nav-link" activeClassName="text-primary fw-bold" to="/services">Services</NavLink>
                            <NavLink className="px-3 fs-5 nav-link" activeClassName="text-primary fw-bold" to="/doctors">Doctors</NavLink>
                            <NavLink className="px-3 fs-5 nav-link" activeClassName="text-primary fw-bold" to="/contact">Contact</NavLink>
                        </Nav>
                    </Col>
                    <Col xs="1" lg="4">
                        <Nav className="justify-content-end my-3">
                            { user?.email?
                                <NavLink to="/login">
                                <Button className="me-2 rounded-pill" variant="danger" size="sm">Log-out</Button>
                                </NavLink>
                                :
                                <NavLink to="/login">
                                <Button className="me-2 rounded-pill" variant="outline-danger" size="sm">Log In</Button>
                                </NavLink>
                            }
                            <p className="mt-1">
                                Signed is as: <Link to="/login">{user?.displayName}</Link>
                            </p>
                        </Nav>
                    </Col>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;