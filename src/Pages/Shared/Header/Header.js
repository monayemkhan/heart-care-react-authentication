import React from 'react';
import { Col, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/Logo/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Col xs lg="4">
                    <Navbar.Brand to="/#home">
                        <img src={logo} alt="" />                        
                    </Navbar.Brand>
                    </Col>
                    <Col xs lg="4">
                        <Nav className="justify-content-end ">
                            <NavLink className="px-3 nav-link" to="/home">Home</NavLink>
                            <NavLink className="px-3 nav-link" to="/services">Services</NavLink>
                            <NavLink className="px-3 nav-link" to="/doctors">Doctors</NavLink>
                            <NavLink className="px-3 nav-link" to="/contact">Contact</NavLink>
                        </Nav>
                    </Col>
                    <Col xs lg="4">
                        <Nav className="justify-content-end">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                            <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                        </Nav>
                    </Col>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;