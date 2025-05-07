import TimeLine from "./components/Timeline.jsx";
import Info from "./components/Info.jsx";
import { events } from "./data/events.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="flex justify-center p-20 py-10 bg-gray-100 min-h-screen">
      <TimeLine
        events={events}
        handleClick={handleEventClick}
        selectedEvent={selectedEvent}
      />
      <Info selectedEvent={selectedEvent} />
    </div>
  );
}

export default App;
