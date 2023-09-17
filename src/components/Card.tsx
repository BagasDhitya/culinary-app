import { FC } from "react";
import { motion } from "framer-motion";
import { Card } from "@/utils/component";

const Card: FC<Card> = ({ id, children }) => {
  return (
    <motion.div
      id={id}
      className="w-full h-full bg-white rounded-md shadow-md"
      whileHover={{ scale: 1.25 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
