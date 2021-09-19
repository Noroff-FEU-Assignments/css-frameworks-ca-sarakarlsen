import React from "react";
import Image1 from "./carouselimages/carousel-1.jpg";
import Image2 from "./carouselimages/carousel-2.jpg";
import Image3 from "./carouselimages/carousel-3.jpg";

import Carousel from "react-bootstrap/Carousel";

function ImageSlider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ImageSlider;
