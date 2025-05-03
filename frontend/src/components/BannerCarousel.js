// src/components/BannerCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

function BannerCarousel() {
  return (
    <Carousel>




      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/64927657033758.jpg"
          alt="First slide"
        />  
      </Carousel.Item>




      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/64927657099294.jpg"
          alt="Second slide"
        />
        </Carousel.Item>





        <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/64927657164830.jpg"
          alt="3rd slide"
        />
        </Carousel.Item>






        <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/64927657230366.jpg"
          alt="4th slide"
        />
        </Carousel.Item>






        <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/64927657295902.jpg"
          alt="5th  slide"
        />
        </Carousel.Item>





        <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/64927657361438.jpg"
          alt="6th  slide"
        />
        </Carousel.Item>





      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/64927657426974.jpg"
          alt="7th slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerCarousel;
