import "./EventsDescription.css";

//components
import EventsDescriptionProps from "./eventsDescriptionProps/EventsDescriptionProps";

//data
import data from "../../../Data.json";

//get from url
import { useParams } from "react-router";

function EventsDescription() {
  //get events
  const eventsList = data["events"];
  //get eventsId from url
  const { eventId } = useParams();
  const urleventId = Number(eventId);

  //filter events
  const filtered = eventsList.filter(
    (event: any, index: any) => event.eventId === urleventId
  );

  return (
    <div className="event-des">
      {filtered.map((filtered_event: any, index: any) => (
        <EventsDescriptionProps
          key={filtered_event.eventId}
          date={filtered_event.date}
          images={filtered_event.images}
          title={filtered_event.title}
          description={filtered_event.description}
        />
      ))}
    </div>
  );
}
export default EventsDescription;
