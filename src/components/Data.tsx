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
    color: "#b1c861",
    color2: "bg-[#b9d250]",
  },
  {
    name: "berry smoothie",
    image: berry,
    description: "delicious flavour",
    id: "berry",
    color: "#c195b8",
    color2: "bg-[#f3bce8]",
  },
  {
    name: "orange smoothie",
    image: orange,
    description: "delicious flavour",
    id: "orange",
    color: "#dfa91b",
    color2: "bg-[#e9d193]",
  },
  {
    name: "coffee milk",
    image: coffee,
    description: "delicious milk",
    id: "coffee",
    color: "#c7a25e",
    color2: "bg-[#e6caa5]",
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
    opacity: 0.5, // Start invisible
    x: "80vw", // Slide in from the right
    scale: 0.95, // Slight shrink
  },
  animate: {
    opacity: 1, // Fully visible
    x: 0, // Move to center
    scale: 1, // Full size
    transition: {
      duration: 0.6, // Slower transition
      ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth easing
    },
  },
  exit: {
    opacity: 0.9, // Fade out
    x: "-100vw", // Slide out to the left
    scale: 0.95, // Slight shrink
    transition: {
      duration: 1, // Match entrance duration
      ease: [0.42, 0, -0.5, 0.96], // Ease-in for smooth fade
    },
  },
};

export const HomeVariant = {
  initial: {
    opacity: 0.5, // Start invisible
    x: "-80vw", // Slide in from the right
    scale: 0.95, // Slight shrink
  },
  animate: {
    opacity: 1, // Fully visible
    x: 0, // Move to center
    scale: 1, // Full size
    transition: {
      duration: 0.6, // Slower transition
      ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth easing
    },
  },
  exit: {
    opacity: 0.9, // Fade out
    x: "100vw", // Slide out to the left
    scale: 0.95, // Slight shrink
    transition: {
      duration: 1, // Match entrance duration
      ease: [0.42, 0, -0.5, 0.96], // Ease-in for smooth fade
    },
  },
};

const backgroundVariants = {
  initial: { opacity: 0.2 },
  animate: { opacity: 1 },
  exit: { opacity: 1 },
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
    className={`overflow-hidden relative ${
      isExpanded ? className2 : className
    }`}
    onClick={handleClick}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={backgroundVariants}
    transition={{
      duration: 2,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

// Shared Component for Image
type SharedImageProps = {
  imageUrl?: string;
  isExpanded?: boolean;
  layoutId?: string;
  className?: string;
  handleClick?: () => void;
};
export const SharedImage = ({
  imageUrl,
  isExpanded,
  layoutId,
  className,
  handleClick,
}: SharedImageProps) => (
  <motion.img
    whileHover={{ scale: 1.1 }}
    transition={transition}
    layoutId={layoutId}
    src={imageUrl}
    className={`${
      isExpanded
        ? "w-[50%] h-[50vh] top-[25%] left-[25%]"
        : "w-[250px] h-[300px] top-auto left-auto"
    } object-cover ${className}`}
    onClick={handleClick}
  />
);
