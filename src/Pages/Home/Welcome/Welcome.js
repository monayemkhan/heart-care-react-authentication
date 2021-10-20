import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Welcome = () => {
    return (
        // Welcome section
        <div className="welcome">
            <Container className="py-5 border-bottom border-danger">
                <Row className="">
                    {/* welcome text */}
                    <Col sm={12} md={6}>
                    <div className="m-3">
                        <h5 className="text-danger fw-normal">Welcome to your</h5>
                        <h1 className="fw-bold">HEART CARE</h1>
                        <p className="fst-italic fw-light">The Heart Care Heart Hospital have latest technology machines with experty Heart specialist doctors consectetur adipisicing elit. Distinctio vitae maiores enim ea atque? Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos accusamus deleniti totam repellendus reiciendis, nobis vero dolorem nesciunt officia facere perspiciatis fugiat.</p>
                        <p className="fst-italic fw-light">Sapiente accusamus repudiandae architecto corporis aspernatur. Eligendi, accusamus quas mollitia. Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos accusamus deleniti totam repellendus reiciendis, nobis vero dolorem nesciunt officia facere perspiciatis fugiat.</p>
                        <h3 className="fw-normal">Monayem Khan</h3>
                        <h6 className="fst-italic"> <span className="text-danger">Heart Care</span> Hospital</h6>
                    </div>
                    </Col>
                    {/* welcome image */}
                    <Col sm={12} md={6}>
                        <Card className="m-3 border border-4">
                            <Card.Body>
                                <Card.Img variant="top" src="https://i.ibb.co/6tcpLzg/welcome.jpg" />   
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;