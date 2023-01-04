import "./TopSection.css";

//slideshow
import data from "../../Data.json";

function TopSection() {
  const slideshows = data.slideshow;
  return (
    <div className="slider" id="slider">
      <figure>
        {slideshows && slideshows.length > 0
          ? slideshows.map((slideshow: any, index: any) => (
              <img
                key={index}
                className="top-section-image"
                src={slideshow.image}
                alt="slideshow"
              />
            ))
          : "You should insert pictures"}
      </figure>
    </div>
  );
}

export default TopSection;
