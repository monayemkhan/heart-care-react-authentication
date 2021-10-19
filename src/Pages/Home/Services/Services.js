import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('./servicesData.json')
        .then(res => res.json())
        .then(data => setService(data))

    }, []);

    return (
        <div className="text-center mb-5">
            <div className="mt-5">
                <div className="container">
                    <h3 className="text-danger fw-light">Our Departments</h3>
                    <h1 className="fw-bold">DEPARTMENTAL SERVICES</h1>
                </div>
            </div>
            <div className="py-5">
                <div className="container">
                    <div className="row service-section">
                        {
                            services.map(service => <Service
                            key={service.key}
                            service={service}
                            ></Service>)
                        }
                    </div>
                    <Button variant="outline-danger" className="mt-5">See All</Button>
                </div>
            </div>
        </div>
    );
};

export default Services;