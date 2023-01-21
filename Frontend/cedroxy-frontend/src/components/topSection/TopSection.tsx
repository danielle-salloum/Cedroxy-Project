import "./TopSection.css";

//slideshow
import data from "../../Data.json";
import { useCallback, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";

function TopSection() {
  const slideshows = data.slideshow;
  const [activeImage, setActiveImage] = useState(0);
  const changeImage = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveImage((a) => (a - 1 < 0 ? slideshows.length - 1 : a - 1));
      } else if (e.key === "ArrowRight") {
        setActiveImage((a) => (a + 1 > slideshows.length - 1 ? 0 : a + 1));
      }
    },
    [slideshows]
  );
  useEffect(() => {
    document.addEventListener("keydown", changeImage);

    return function cleanup() {
      document.removeEventListener("keydown", changeImage);
    };
  });
  return (
    <div>
      <div className="top-section-slideshow-text">
        <div className="top-section-carrousel">
          <Carousel
            index={activeImage}
            autoPlay={true}
            interval={3000}
            indicators={false}
          >
            {slideshows.map((image: any, index: any) => {
              return (
                <div key={index}>
                  <img
                    className="top-section-image"
                    src={image.image}
                    alt="slideshow"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="top-section-text">
          <span>𝒴𝑜𝓊 </span>
          <span> 𝒟𝑒𝓈𝑒𝓇𝓋𝑒 </span>
          <span> 𝐿𝓊𝓍𝓊𝓇𝓎 </span>
        </div>
      </div>
      <hr className="accessory" />
    </div>
  );
}

export default TopSection;
