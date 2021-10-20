import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    // destructuring data
    const { name, details, img} = props.doctor

    return (
        // single doctor card
        <div className="col-md-4 p-0">
            <Card className="m-2">
                <Card.Body>
                    <Card.Img variant="top" src={img} />
                </Card.Body>
            </Card>
            <Card className="m-2 text-center">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to="/twitter"><FontAwesomeIcon className="me-3 text-danger fs-5" icon={faFacebookF} /></Link>
                    <Link to="/twitter"><FontAwesomeIcon className="me-3 text-danger fs-5" icon={faTwitter} /></Link>
                    <Link to="/twitter"><FontAwesomeIcon className="me-3 text-danger fs-5" icon={faInstagram} /></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Doctor;