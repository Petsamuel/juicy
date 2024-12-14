import { Card } from "../components/Cards";
import { pageVariants } from "../components/Data";
import { motion } from "framer-motion";
export const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-gray-100  w-full lg:h-[100dvh] mx-auto flex"
    >
      <Card />
    </motion.div>
  );
};
