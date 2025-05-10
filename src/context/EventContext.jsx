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

  const selectFirstEvent = () => {
    const firstEvent = events[0];
    setSelectedEvent(firstEvent);
  };

  const selectLastEvent = () => {
    const lastEvent = events[events.length - 1];
    setSelectedEvent(lastEvent);
  };

  const value = {
    selectedEvent,
    setSelectedEvent,
    selectRandomEvent,
    selectFirstEvent,
    selectLastEvent,
  };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};
