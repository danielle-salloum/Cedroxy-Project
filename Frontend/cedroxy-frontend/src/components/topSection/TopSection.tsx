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
import { Slide } from "react-slideshow-image";

function TopSection() {
  // const slideImages = [
  //   {
  //     url: { slideshow1 },
  //   },
  //   {
  //     url: { slideshow2 },
  //   },
  //   {
  //     url: { slideshow3 },
  //   },
  //   {
  //     url: { slideshow4 },
  //   },
  //   {
  //     url: { slideshow5 },
  //   },
  //   {
  //     url: { slideshow6 },
  //   },
  // ];
  return (
    // <div>
    //   <Slide>
    //     {slideImages.map((slideImage, index) => (
    //       <div className="each-slide" key={index}>
    //         <div style={{ backgroundImage: `url(${slideImage.url})` }}></div>
    //       </div>
    //     ))}
    //   </Slide>
    // </div>
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
