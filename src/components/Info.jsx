import { motion, AnimatePresence } from "framer-motion";

const Info = ({ selectedEvent }) => {
  return (
    <div className="w-1/2 relative">
      <AnimatePresence mode="wait">
        <motion.div
          className="border-3 border-amber-900 flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-[-15%] w-[500px] h-[600px] bg-gray-200 p-6 rounded-lg shadow-md max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          key={selectedEvent ? selectedEvent.description : "empty"}
        >
          {selectedEvent === null ? (
            <motion.h1
              key="empty"
              className="text-center text-stone-900 text-lg font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              Wybierz wydarzenie, aby zobaczyć szczegóły.
            </motion.h1>
          ) : (
            <motion.div
              key={`${selectedEvent.day}-${selectedEvent.month}-${selectedEvent.year}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <strong>
                <h2 className="text-xl font-bold border-b-2 border-stone-600 pb-1">
                  {selectedEvent.day} {selectedEvent.month} {selectedEvent.year}
                </h2>
              </strong>
              <p className="text-justify">{selectedEvent.info}</p>
              {selectedEvent.image && (
                <img
                  src={selectedEvent.image}
                  alt="Event"
                  className="mt-4 w-full h-auto rounded"
                />
              )}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Info;
