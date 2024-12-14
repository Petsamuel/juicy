import berry from "../assets/image/berry.png";
import green from "../assets/image/green.png";
import orange from "../assets/image/orange.png";
import coffee from "../assets/image/coffee.png";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
export const Smoothies = [
  {
    name: "green smoothie",
    image: green,
    description: "delicious smoothie",
    id: "green",
  },
  {
    name: "berry smoothie",
    image: berry,
    description: "delicious flavour",
    id: "berry",
  },
  {
    name: "orange smoothie",
    image: orange,
    description: "delicious flavour",
    id: "orange",
  },
  {
    name: "coffee milk",
    image: coffee,
    description: "delicious milk",
    id: "coffee",
  },
];

type backgroundProps = {
  backgroundImage?: string;
  isExpanded: boolean;
  children: ReactNode;
  className?: string;
  className2?: string;
  handleClick?: () => void;
  layoutId?: string;
};
export const pageVariants = {
  initial: {
    opacity: 0, // Start fully transparent
    x: "100vw", // Slide in from the right
    scale: 0.95, // Slightly shrink
  },
  animate: {
    opacity: 1, // Fully visible
    x: 0, // Slide into position
    scale: 1, // Full size
    transition: {
      duration: 0.6, // Smooth duration
      ease: "easeOut", // Ease-out for a natural feel
    },
  },
  exit: {
    opacity: 0, // Fade out
    y: "-100vw", // Slide out to the left
    scale: 0.95, // Shrink slightly
    transition: {
      duration: 0.6, // Match entrance duration
      ease: "easeIn", // Ease-in for a smooth exit
    },
  },
};

const backgroundVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
// const transition = { duration: 1.4, ease: [0.6, 0.01, -0.5, 0.96] };

export const SharedBackground = ({
  isExpanded = false,
  children,
  className2,
  className,
  handleClick,
  layoutId,
}: backgroundProps) => (
  <motion.div
    layoutId={layoutId}
    className={`${isExpanded ? className2 : className}`}
    onClick={handleClick}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={backgroundVariants}
  >
    {children}
  </motion.div>
);

// Shared Component for Image
type SharedImageProps = {
  imageUrl?: string;
  isExpanded?: boolean;
  layoutId?: string;
};
export const SharedImage = ({
  imageUrl,
  isExpanded,
  layoutId,
}: SharedImageProps) => (
  <motion.img
    whileHover={{ scale: 1.1 }}
    transition={transition}
    layout
    layoutId={layoutId}
    src={imageUrl}
    className={`${
      isExpanded
        ? "w-[50%] h-[50vh] top-[25%] left-[25%] "
        : "w-[250px] h-[300px] top-auto left-auto "
    } object-cover z-10`}
  />
);
