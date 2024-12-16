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

export const SharedBackground = ({
  isExpanded = false,
  children,
  className2,
  className,
  handleClick,
}: backgroundProps) => (
  <motion.div
    className={`relative h-full ${isExpanded ? className2 : className}`}
    onClick={handleClick}
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
    layout
    whileHover={{ scale: 1.1 }}
    transition={transition}
    layoutId={layoutId}
    src={imageUrl}
    className={`${
      isExpanded
        ? " lg:h-auto h-auto lg:w-[20%] w-[30%] top-[2%] lg:top-[-7dvh] lg:left-[38%] left-[32%]"
        : "w-[250px] h-auto top-auto left-auto"
    } object-cover ${className}`}
    onClick={handleClick}
  />
);
