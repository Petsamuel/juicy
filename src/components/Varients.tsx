import { Variants } from "framer-motion";

export const swiperTransitionVariants: Variants = {
  initial: ({ direction }: { direction: number }) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 1,
    scale: 0.9,
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.9,
      ease: [0.4, 0, 0, 0.5],
    },
  },
  exit: ({ direction }: { direction: number }) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 1,
    scale: 0.9,
    transition: {
      type: "tween",
      duration: 0.9,
      ease: [0.4, 0, 0, 0.5],
    },
  }),
};
