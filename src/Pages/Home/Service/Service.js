import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const { name, description, img} = props.service
    return (
        <div className="col-md-3 p-0">
            <Card  className="m-2">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Button variant="danger">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;