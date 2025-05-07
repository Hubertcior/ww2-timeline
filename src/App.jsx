import TimeLine from "./components/Timeline.jsx";
import Info from "./components/Info.jsx";
import TimelineButton from "./components/TimelineButton.jsx";
import { events } from "./data/events.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleTimeLineButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-center py-20 bg-gray-100/90 min-h-screen ">
      <TimeLine
        events={events}
        handleClick={handleEventClick}
        selectedEvent={selectedEvent}
      />
      <Info selectedEvent={selectedEvent} />
      <TimelineButton
        isOpen={isOpen}
        handleTimelineButtonClick={handleTimeLineButtonClick}
      />
    </div>
  );
}

export default App;
