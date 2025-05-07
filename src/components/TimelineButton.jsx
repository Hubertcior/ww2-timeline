import EventIcon from "./EventIcon.jsx";
import { motion } from "framer-motion";

const TimelineButton = ({ isOpen, handleTimelineButtonClick }) => {
  return (
    <motion.div
      onClick={handleTimelineButtonClick}
      initial={{ rotate: 0 }}
      animate={{ rotate: !isOpen ? -180 : 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="sticky top-1/2 left-auto right-0 transform -translate-y-1/2  rounded-full bg-amber-900 w-16 h-16 flex items-center justify-center shadow-lg cursor-pointer z-20 hover:scale-120 transition-transform duration-300 ease-in-out"
    >
      <EventIcon type={"openButton"} />
    </motion.div>
  );
};

export default TimelineButton;

//TODO - better positioning of the button.
