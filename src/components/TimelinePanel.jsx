import PanelButton from "./PanelButton.jsx";
import { motion } from "framer-motion";
import { useEvent } from "../context/EventContext.jsx";

const TimelinePanel = () => {
  const panelVariants = {
    open: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    closed: { y: 200, opacity: 0, transition: { duration: 0.5 } },
  };

  const { selectRandomEvent } = useEvent();

  return (
    <motion.div
      className="fixed flex-col border-y-amber-900 border-3 right-0 mr-6 top-1/2 transform -translate-y-1/2 w-1/5 h-4/5 bg-gray-300/90 z-50 rounded-2xl flex items-center justify-center"
      initial="closed"
      animate="open"
      exit="closed"
      variants={panelVariants}
    >
      <PanelButton label="Losowa data" onClick={selectRandomEvent} />
      <PanelButton label="Dzisiejsza data" />
    </motion.div>
  );
};

export default TimelinePanel;
