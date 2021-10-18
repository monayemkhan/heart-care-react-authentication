import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

const Appointment = () => {
    return (
        <div >
            <Container>
                <Form className="w-50 ">
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
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-4">
                        <FloatingLabel controlId="floatingTextarea" label="Extra Note">
                            <Form.Control as="textarea" placeholder="" style={{ height: '100px' }} />
                        </FloatingLabel>
                    </Row>
                </Form>
                <Button variant="outline-danger">Danger</Button>
            </Container>
        </div>
    );
};

export default Appointment;