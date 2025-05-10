import { motion } from "framer-motion";
import EventIcon from "./EventIcon";
import { useEvent } from "../context/EventContext.jsx";
import { useRef, useEffect } from "react";

const TimeLine = ({ events }) => {
  const { selectedEvent, setSelectedEvent } = useEvent();
  const eventsRef = useRef([]);

  const basicStyle =
    "mr-4 text-center text-sm w-40 bg-white p-2 rounded shadow z-10 cursor-pointer";

  useEffect(() => {
    if (selectedEvent) {
      const selectedEventIndex = events.findIndex(
        (event) => event.description === selectedEvent.description
      );
      if (selectedEventIndex !== -1) {
        eventsRef.current[selectedEventIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [selectedEvent, events]);

  return (
    <div className="relative min-h-screen flex justify-center">
      <div className="absolute top-0 bottom-0 w-1 bg-gray-300 left-[77px] z-0"></div>

      <div className="relative w-full max-w-[600px]">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative flex items-center mb-24"
            ref={(el) => (eventsRef.current[index] = el)}
          >
            <motion.div
              className={
                selectedEvent !== null &&
                selectedEvent.description === event.description
                  ? basicStyle + " border-2 border-amber-900"
                  : basicStyle
              }
              whileHover={{
                scale: 1.08,
                borderColor: "#92400e",
                boxShadow: "0 0 12px black",
              }}
              onClick={() => setSelectedEvent(event)}
            >
              <strong>
                {event.day + " " + event.month + " " + event.year}
              </strong>

              <br />
              {event.description}
              <br />
              <EventIcon type={event.type} />
            </motion.div>
            <div className="w-4 h-4 bg-amber-900 rounded-full border-2 border-white z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
