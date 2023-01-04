import "./Events.css";
import React from "react";

//data
import data from "../../Data.json";

//components
import EventsProps from "./eventsProps/EventsProps";

function Events() {
  //get all events:
  const EventsList = data["events"];

  return (
    <div className="events-main-container">
      {EventsList && EventsList.length > 0
        ? EventsList.map((event: any, index: any) => (
            <div key={index}>
              <EventsProps
                id={event.id}
                title={event.title}
                date={event.date}
                description={event.description}
                images={event.images}
              />
            </div>
          ))
        : "No events Found"}
    </div>
  );
}

export default Events;
