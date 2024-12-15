import "./App.css";
import { Smoothie } from "./components/Smoothie";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import { swiperTransitionVariants } from "./components/varients";

const AnimatedRoute = () => {
  const location = useLocation();
  // const path = location.pathname;

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <Routes location={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="smoothie/:id" element={<Smoothie />} />
      </Routes>
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
