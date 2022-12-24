import React from "react";
import "./TopSection.css";

import topSectionPic from "../../assets/topsection.png";
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
