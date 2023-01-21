import "./EventsDescriptionProps.css";

//images album
import Carousel from "react-material-ui-carousel";

//props
type EventDescriptionProps = {
  images: any;
  title: string;
  description: string;
  date: string;
};

function EventsDescriptionProps(props: EventDescriptionProps) {
  const images = props.images;
  return (
    <div className="events-description-props-container">
      <div className="events-image-name">
        <div className="events-des-carousel">
          <Carousel
            autoPlay={false}
            navButtonsAlwaysVisible={images.length > 1}
            animation={"fade"}
            indicators={false}
            className="events-des-carousel"
          >
            {images.map((image: any, index: any) => {
              return (
                <div key={index}>
                  <img
                    src={images[index]}
                    className="products-image"
                    title={props.title}
                    alt={props.title}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div>
          <p className="event-description-component-name">{props.title}</p>
          <p className="event-description-component-date">{props.date}</p>
        </div>
      </div>
      <div className="event-description-info">
        <div className="event-description">{props.description}</div>
      </div>
    </div>
  );
}

export default EventsDescriptionProps;
