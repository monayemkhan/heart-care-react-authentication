import { faFacebookF, faGooglePlusG, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/Logo/footer-logo.png'

const Footer = () => {
    return (
        <div className=" bg-dark">
            <Container>
                <Row>
                    <Col className="mt-4">
                        <img src={logo} alt="" />
                        <p className="text-secondary mt-3"><small>The Heart Care Heart Hospital have latest technology machines with experty Heart specialist doctors consectetur adipisicing elit. Distinctio vitae maiores enim ea atque? Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos paccusamus.</small></p>
                        <Button variant="outline-danger">Read More</Button>
                    </Col>
                    <Col className="text-light mt-4">
                        <h2>Our Services</h2>
                        <Nav  className="flex-column text-light">
                            <Nav.Link className="text-secondary"  to="/home"><FontAwesomeIcon icon={faArrowRight} /> Angioplasty</Nav.Link>
                            <Nav.Link className="text-secondary"  to="link-1"><FontAwesomeIcon icon={faArrowRight} /> ECG</Nav.Link>
                            <Nav.Link className="text-secondary"  to="link-2"><FontAwesomeIcon icon={faArrowRight} /> Echo cardiogram</Nav.Link>
                            <Nav.Link className="text-secondary"  to="link-2"><FontAwesomeIcon icon={faArrowRight} /> Stress ECG</Nav.Link>
                            <Nav.Link className="text-secondary"  to="link-2"><FontAwesomeIcon icon={faArrowRight} /> Cardiac Surgery</Nav.Link>
                        </Nav>
                    </Col>
                    <Col className="text-light mt-4">
                        <h2>Expert Doctors</h2>
                        <Nav  className="flex-column text-light">
                            <Nav.Link className="text-secondary"  to="/home"><FontAwesomeIcon icon={faArrowRight} /> Dr. Adamaris</Nav.Link>
                            <Nav.Link className="text-secondary"  to="link-1"><FontAwesomeIcon icon={faArrowRight} /> Dr. Jam Doe</Nav.Link>
                            <Nav.Link className="text-secondary"  to="link-2"><FontAwesomeIcon icon={faArrowRight} /> Dr. Stewart</Nav.Link>
                            <Nav.Link className="text-secondary"  to="link-2"><FontAwesomeIcon icon={faArrowRight} /> Dr. Benson Loius</Nav.Link>
                            <Nav.Link className="text-secondary"  to="link-2"><FontAwesomeIcon icon={faArrowRight} /> Dr. Johnson Lee</Nav.Link>
                        </Nav>
                    </Col>
                    <Col className="text-light mt-4">
                        <h2 className="text-center">Contact us</h2>
                        <div className="fs-1 my-5 text-center">
                            <Link to="/twitter"><FontAwesomeIcon className="me-5 text-danger" icon={faTwitter} /></Link>
                            <Link to="/twitter"><FontAwesomeIcon className="me-5 text-danger" icon={faGooglePlusG} /></Link>
                            <Link to="/twitter"><FontAwesomeIcon className="me-5 text-danger" icon={faFacebookF} /></Link>
                            <Link to="/twitter"><FontAwesomeIcon className="me-5 text-danger" icon={faInstagram} /></Link>
                            <Link to="/twitter"><FontAwesomeIcon className="me-5 text-danger" icon={faYoutube} /></Link>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mt-4">
                    <p className="text-secondary"> <small>Copyright &copy; 2021 All rights reserved | This template is made by <span className="text-light">Monayem Khan</span></small></p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;