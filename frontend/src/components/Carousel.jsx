import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {

  return (
    <Carousel fade interval={1500}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slider/1.jpg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slider/2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slider/3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
