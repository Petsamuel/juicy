import { Card } from "../components/Cards";
import { motion } from "framer-motion";
import { HomeVariant } from "../components/Data";
export const Home = () => {
  return (
    <motion.div
      variants={HomeVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      <Card />
    </motion.div>
  );
};
