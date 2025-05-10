export const getRandomEvent = (events) => {
  const randomIndex = Math.floor(Math.random() * events.length);
  return events[randomIndex];
};
