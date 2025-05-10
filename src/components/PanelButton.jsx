import { motion } from "framer-motion";

const Button = ({ onClick, label }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
      className="px-4 py-2 mt-2 w-2xs bg-amber-900 text-white rounded-lg shadow-md transition cursor-pointer"
    >
      {label}
    </motion.button>
  );
};

export default Button;
