import { createContext, useContext, useState } from "react";
import { events } from "../data/events.js";
import { getRandomEvent } from "../utils/random.js";

const EventContext = createContext();

export const useEvent = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const selectRandomEvent = () => {
    const randomEvent = getRandomEvent(events);
    setSelectedEvent(randomEvent);
  };

  const value = {
    selectedEvent,
    setSelectedEvent,
    selectRandomEvent,
  };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};
