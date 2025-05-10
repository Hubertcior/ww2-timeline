import PanelButton from "./PanelButton.jsx";
import { useDate } from "../hooks/useDate.js";

const TimelinePanel = () => {
  const { date, rollDate } = useDate();

  function handleRandomDateClick() {
    rollDate();
    console.log(date);
  }

  return (
    <div className="fixed flex-col border-y-amber-900 border-3 right-0 mr-6 top-1/2 transform -translate-y-1/2 w-1/5 h-4/5 bg-gray-300/90 z-50 rounded-2xl flex items-center justify-center">
      <PanelButton label="Losowa data" onClick={handleRandomDateClick} />
      <PanelButton label="Dzisiejsza data" />
    </div>
  );
};

export default TimelinePanel;
