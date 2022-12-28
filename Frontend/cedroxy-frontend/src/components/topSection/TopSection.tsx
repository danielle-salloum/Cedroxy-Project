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
//import { Carousel } from "react-bootstrap";

function TopSection() {
  return (
    <div className="top-section-container">
      <img
        src={topSectionPic}
        alt="Top Section Pic"
        className="top-section-pic"
      />
      <h1 className="top-section-text">
        Reflecting the lebanese beauty using different species of trees grown
        around this region
      </h1>
    </div>
  );
}

export default TopSection;
