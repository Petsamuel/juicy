import { Card } from "../components/Cards";
import { motion } from "framer-motion";
import { swiperTransitionVariants } from "../components/varients";

export const Home = () => {
  return (
    <motion.div
      key={location.pathname}
      custom={{ direction: -1 }}
      variants={swiperTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Card />
    </motion.div>
  );
};
