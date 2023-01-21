import "./Events.css";
import React from "react";

//data
import data from "../../Data.json";

//components
import EventsProps from "./eventsProps/EventsProps";

//navigate
import { useNavigate } from "react-router-dom";
function Events() {
  //get all events:
  const EventsList = data["events"];
  const navigate = useNavigate();
  return (
    <div className="events-main-container">
      {EventsList && EventsList.length > 0
        ? EventsList.map((event: any, index: any) => (
            <div
              key={index}
              onClick={() => navigate(`/events/${event.eventId}`)}
            >
              <EventsProps
                id={event.eventId}
                title={event.title}
                date={event.date}
                description={event.description}
                images={event.images[0]}
              />
            </div>
          ))
        : "No events Found"}
    </div>
  );
}

export default Events;
