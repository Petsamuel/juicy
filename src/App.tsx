import "./App.css";
import { Smoothie } from "./components/Smoothie";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode="wait">
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
