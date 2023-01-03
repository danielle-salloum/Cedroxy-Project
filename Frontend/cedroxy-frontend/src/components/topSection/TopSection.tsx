import "./TopSection.css";

//components
import topSectionPic from "../../assets/topsection.png";

//Hooks
import React, { useState } from "react";

//images
import slideshow1 from "../../assets/Slideshow/slideshow1.jpg";
import slideshow2 from "../../assets/Slideshow/slideshow2.jpg";
import slideshow3 from "../../assets/Slideshow/slideshow3.jpg";
import slideshow4 from "../../assets/Slideshow/slideshow4.jpg";
import slideshow5 from "../../assets/Slideshow/slideshow5.jpg";
import slideshow6 from "../../assets/Slideshow/slideshow6.jpg";

//slideshow package
// import { Component } from "react";
// import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const images = [
  {
    image: { slideshow1 },
  },
  {
    image: { slideshow2 },
  },
  {
    image: { slideshow3 },
  },
  {
    image: { slideshow4 },
  },
  {
    image: { slideshow6 },
  },
];
function TopSection() {
  return (
    <div className="top-section-container">
      {/* <Carousel autoPlay centerMode infiniteLoop interval={1000} width="100%">
        <img src={slideshow1} alt="slideshow" />
        <img src={slideshow2} alt="slideshow" />
        <img src={slideshow3} alt="slideshow" />
      </Carousel> */}
      {/* <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slideshow1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideshow2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideshow3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideshow4} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideshow6} alt="Third slide" />
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
}

export default TopSection;
