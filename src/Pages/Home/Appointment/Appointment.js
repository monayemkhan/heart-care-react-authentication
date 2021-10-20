import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import formPic from '../../../images/formPic.jpg'

const Appointment = () => {
    return (
        // appointment section
        <div className="text-center">
            <Container className="border-top border-danger my-5">
                <div className="py-3 mt-5">
                    <h1 className="fs-1 fw-bold">Get Appointment</h1>
                </div>
                <Row>
                    {/* appointment form*/}
                    <Col sm={12} md={6} className="mt-5 align-center">
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="text" placeholder="Full Name *" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Control type="number" placeholder="Phone Number *" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Control type="date" placeholder="" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Select defaultValue="Visit Reason">
                                        <option>Visit Reason</option>
                                        <option>Angioplasty</option>
                                        <option>ECG</option>
                                        <option>Echo cardiogram</option>
                                        <option>Pacemaker Check</option>
                                        <option>Cardiac Surgery</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <Row className="mb-4">
                                <FloatingLabel controlId="floatingTextarea" label="Extra Note">
                                    <Form.Control as="textarea" placeholder="" style={{ height: '130px' }} />
                                </FloatingLabel>
                            </Row>
                            <Button variant="danger">Book Appointment</Button>
                        </Form>
                    </Col>
                    {/* appointment image*/}
                    <Col sm={12} md={6}>
                        <img className="w-50" src={formPic} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Appointment;