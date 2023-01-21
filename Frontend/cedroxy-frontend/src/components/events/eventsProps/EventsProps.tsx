import React from "react";
import "./EventsProps.css";

//props
type EventsCardProps = {
  id?: number;
  title: string;
  date: string;
  description: string;
  images: any;
};

function EventsProps(props: EventsCardProps) {
  return (
    <div className="events-props-container">
      <img
        className="event-component-image"
        title={props.title}
        src={props.images}
        alt={props.title}
      />
      <div className="event-info">
        <div>
          <p className="event-component-name">{props.title}</p>
          <p className="event-component-description">{props.description}</p>
        </div>
        <div>
          <p className="event-component-date">{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default EventsProps;
