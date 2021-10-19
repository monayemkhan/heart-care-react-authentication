import React, { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
// import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
    <Carousel className="banner" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
        <div className="overlay"></div>
        <img
          className="d-block w-100 "
          src="https://i.ibb.co/JFSRrK8/slide1.jpg"
          alt=""
        />
        <Carousel.Caption>
          <h1 className="fs-1 fw-bolder">
          Complete Comprehensive and
          <br />
          Compassionate Cardiac Care
          </h1>
          <p className="mb-4">Our Treatments & services are provided comfortable lorem ipsum dolor sit amet.</p>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Call for Inquiry</Button>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Ask Cardiologist</Button>
        </Carousel.Caption>
      </Carousel.Item>  
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/h1Gmb6Z/slide2.jpg"
          alt=""
        />
        <Carousel.Caption>
          <h1 className="fs-1 fw-bolder">We’ve got your heart covered</h1>
          <p className="mb-4">Our Treatments & services are provided comfortable lorem ipsum dolor sit amet.</p>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Call for Inquiry</Button>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Ask Cardiologist</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/4Wmg3C6/slide3.jpg"
          alt=""
        />
        <Carousel.Caption>
          <h1 className="fs-1 fw-bolder">
          Efficient Affordable High
          <br />
          Quality Heart Care
          </h1>
          <p className="mb-4">Our Treatments & services are provided comfortable lorem ipsum dolor sit amet.</p>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Call for Inquiry</Button>
          <Button className="rounded-pill mx-2 mb-5" variant="danger">Ask Cardiologist</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;