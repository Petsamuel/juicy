import "./App.css";
import { Smoothie } from "./components/Smoothie";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { swiperTransitionVariants } from "./components/Varients";


const AnimatedRoute = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.div
        key={location.pathname}
        custom={{ direction: path === "/" ? -1 : 1 }}
        variants={swiperTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="smoothie/:id" element={<Smoothie />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};
function App() {
  return (
    <BrowserRouter>
      <AnimatedRoute />
    </BrowserRouter>
  );
}

export default App;
