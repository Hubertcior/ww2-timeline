import TimeLine from "./components/Timeline.jsx";
import Info from "./components/Info.jsx";
import TimelineButton from "./components/TimelineButton.jsx";
import TimelinePanel from "./components/TimelinePanel.jsx";
import { events } from "./data/events.js";
import "./App.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleTimeLineButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const panelVariants = {
    open: { x: 0, transition: { duration: 0.5 } },
    closed: { x: -200, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <motion.div
        className={`flex justify-between py-20 px-30 bg-gray-100/90 min-h-screen`}
        animate={!isOpen ? "open" : "closed"}
        initial="closed"
        variants={panelVariants}
      >
        <TimeLine
          events={events}
          handleClick={handleEventClick}
          selectedEvent={selectedEvent}
        />
        <TimelineButton
          isOpen={isOpen}
          handleTimelineButtonClick={handleTimeLineButtonClick}
        />
      </motion.div>
      <Info selectedEvent={selectedEvent} isOpen={isOpen} />
      <AnimatePresence>
        {isOpen && <TimelinePanel></TimelinePanel>}
      </AnimatePresence>
    </div>
  );
}

export default App;
