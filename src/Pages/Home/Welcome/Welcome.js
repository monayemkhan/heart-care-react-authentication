import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Welcome = () => {
    return (
        <div className="welcome">
            <Container className="py-5 border-bottom border-secondary">
                <Row className="">
                    <Col>
                        <h5 className="text-danger fw-normal">Welcome to your</h5>
                        <h1 className="fw-bold">HEART CARE</h1>
                        <p className="fst-italic fw-light">The Heart Care Heart Hospital have latest technology machines with experty Heart specialist doctors consectetur adipisicing elit. Distinctio vitae maiores enim ea atque? Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos accusamus deleniti totam repellendus reiciendis, nobis vero dolorem nesciunt officia facere perspiciatis fugiat.</p>
                        <p className="fst-italic fw-light">Sapiente accusamus repudiandae architecto corporis aspernatur. Eligendi, accusamus quas mollitia. Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos accusamus deleniti totam repellendus reiciendis, nobis vero dolorem nesciunt officia facere perspiciatis fugiat.</p>
                        <h3 className="fw-normal">Monayem Khan</h3>
                        <h6 className="fst-italic"> <span className="text-danger">Heart Care</span> Hospital</h6>
                    </Col>
                    <Col>
                        <Card className="m-1 border border-5">
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