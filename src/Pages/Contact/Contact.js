import { faEnvelope, faGlobeAsia, faHospital, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    
    // contact section
    return (
        // contact inner section
        <div className="contact-section">
            <div className="inner-banner">
                <div className="overlay">
                    <div class="container py-5">
                        <Row className="text-center py-5">
                            <Col className="py-5">
                                <h1 className="fs-1 fw-bold text-light">Contact Us</h1>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            {/* Contact Details Section */}
            <div className="contact-form my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 p-3">
                            <h4 className="">Contact Information:</h4>
                            <div className="address border-0 border-bottom mt-4 ">
                                <h6><FontAwesomeIcon className="icon fs-5 mx-2 fw-bold text-secondary" icon={faHospital} />Cheryy Road, Wirral Road</h6>
                                <h6 className="mx-5">Heart care Building</h6>
                                <p className="mx-5 text-secondary">Dhaka, Bangladesh</p>
                            </div>
                            <div className="address border-0 border-bottom my-1">
                                <h5><FontAwesomeIcon className="icon fs-5 mx-2 fw-bold text-secondary" icon={faPhone} />+110 9876 5433</h5>
                                <p className="mx-5 text-secondary">9:00 am to 5:00 pm</p>
                            </div>
                            <div className="address border-0 border-bottom">
                                <h5><FontAwesomeIcon className="icon fs-5 mx-2 fw-bold text-secondary" icon={faEnvelope} />For Inquiry:</h5>
                                <p className="mx-5 text-secondary">info@heartcaer.com</p>
                            </div>
                            <div className="address border-0 border-bottom">
                                <h5><FontAwesomeIcon className="icon fs-5 mx-2 fw-bold text-secondary" icon={faGlobeAsia} />heartcare2021@gmail.com</h5>
                                <p className="mx-5 text-secondary">Send us your query anytime!</p>
                            </div>
                        </div>  
                        {/* contact form section */}
                        <div className="col-md-6 p-3">
                            <h4 className="">Get in Touch</h4>
                            <div className="input-group mt-4">
                                <input className="form-control border-0 border-bottom me-3" placeholder="Your Name *" type="text" />
                                <input className="form-control border-0 border-bottom me-3" placeholder="Email *" type="text" />
                            </div>
                            <div className="input-group my-4">
                                <input className="form-control border-0 border-bottom me-3" placeholder="phone *" type="text" />
                                <input className="form-control border-0 border-bottom me-3" placeholder="Subject" type="text" />
                            </div>

                            <div className="input-group my-4">
                                <textarea className="form-control" placeholder="Massage *" name="" id="" style={{ height: '150px' }}></textarea>
                            </div>

                            <div className="text-center">
                                <button className="btn btn-danger fw-bold">Send Us</button>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
};

export default Contact;