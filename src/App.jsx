import TimeLine from "./components/Timeline.jsx";
import Info from "./components/Info.jsx";
import TimelineButton from "./components/TimelineButton.jsx";
import TimelinePanel from "./components/TimelinePanel.jsx";
import { events } from "./data/events.js";
import "./App.css";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EventProvider } from "./context/EventContext.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const timelineRef = useRef();

  const handleTimeLineButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const scrollToEvent = (event) => {
    if (timelineRef.current) {
      timelineRef.current.scrollToEvent(event);
    }
  };

  return (
    <EventProvider>
      <div>
        <motion.div
          className={`flex justify-between py-20 px-30 bg-gray-100/90 min-h-screen`}
          animate={!isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            open: { x: 0, transition: { duration: 0.5 } },
            closed: { x: -200, transition: { duration: 0.5 } },
          }}
        >
          <TimeLine ref={timelineRef} events={events} />
          <TimelineButton
            isOpen={isOpen}
            handleTimelineButtonClick={handleTimeLineButtonClick}
          />
        </motion.div>
        <Info isOpen={isOpen} />
        <AnimatePresence>
          {isOpen && <TimelinePanel scrollToEvent={scrollToEvent} />}
        </AnimatePresence>
      </div>
    </EventProvider>
  );
}

export default App;
