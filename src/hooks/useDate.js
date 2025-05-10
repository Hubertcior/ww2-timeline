import { useState, useCallback } from "react";

export function useDate() {
  const startDate = new Date("1939-09-01").getTime();
  const endDate = new Date("1945-09-02").getTime();

  const getRandomDate = useCallback(() => {
    const randomTime = startDate + Math.random() * (endDate - startDate);
    return new Date(randomTime);
  }, [startDate, endDate]);

  const [date, setDate] = useState(getRandomDate);

  const rollDate = () => {
    setDate(getRandomDate());
  };

  return { date, rollDate };
}
