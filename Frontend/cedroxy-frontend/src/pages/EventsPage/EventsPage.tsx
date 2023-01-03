import React from "react";
import "./EventsPage.css";

//components:
import Foot from "../../components/footer/Foot";
import Header from "../../components/header/Header";
import Events from "../../components/events/Events";

function EventsPage() {
  return (
    <div>
      <Header />
      <Events />
      <Foot />
    </div>
  );
}

export default EventsPage;
