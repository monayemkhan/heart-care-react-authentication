import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctor] = useState([]);

    // use useEffect for doctors data load
    useEffect(() => {
        fetch('./DoctorsData.json')
        .then(res => res.json())
        .then(data => setDoctor(data))

    }, []);

    return (
        // doctors section
        <div className="">
            <div className="inner-banner">
                {/* doctors banner section */}
                <div className="overlay">
                <div class="container py-5">
                    <Row className="text-center">
                        <Col className="py-5 text-des">
                        <h1 className="fs-1 fw-bold text-light">Our Doctors</h1>
                        </Col>
                    </Row>
                </div>
                </div>
            </div>
            {/* get doctor by mapping */}
            <div className=" py-5 text-center">
                <div className="container">
                    <div className="row service-section">
                        {
                            doctors.map(doctor => <Doctor
                            key={doctor.key}
                            doctor={doctor}
                            ></Doctor>)
                        }
                    </div>
                    <Button variant="outline-danger" className="mt-5">See All</Button>
                </div>
            </div>
        </div>
    );
};

export default Doctors;