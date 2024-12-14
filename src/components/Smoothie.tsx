import { Header } from "./Header";

import { SharedImage, Smoothies, SharedBackground, pageVariants } from "./Data";
// import green from "../assets/image/green.png";
import { motion, LayoutGroup } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type SmoothieProps = {
  name: string;
  image: string;
  description: string;
  id: string;
};
export const Smoothie = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState<string>();
  const [currentImage, setCurrentImage] = useState<SmoothieProps>();

  useEffect(() => {
    setCurrentPath(location?.pathname?.split("/", 3).pop());

    Smoothies.filter((val) => {
      if (val.id == currentPath) {
        setCurrentImage(val);
      }
    });
  }, [currentPath, location?.pathname]);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <LayoutGroup>
        <SharedBackground
          layoutId={`val-${currentImage?.id}`}
          isExpanded
          className2={`h-screen ${
            currentImage?.name === "green smoothie"
              ? "bg-[#b1c861] "
              : currentImage?.name === "berry smoothie"
              ? "bg-[#c195b8]"
              : currentImage?.name === "orange smoothie"
              ? "bg-[#dfa91b]"
              : currentImage?.name === "coffee milk"
              ? "bg-[#c7a25e] "
              : ""
          }`}
        >
          <Header />
          <div className="justify-center flex mt-[20dvh] relative items-center ">
            <div className="relative flex items-center justify-center w-screen">
              <div>
                <p className="text-[15dvw] font-extrabold">JUICY</p>
              </div>
              <motion.div className="absolute">
                <SharedImage
                  imageUrl={currentImage?.image}
                  isExpanded
                  layoutId={`image-${currentImage?.id}`}
                />
              </motion.div>
              <div className="absolute end-[25dvh]">dfhjjhbsdjhbsdhbsjd</div>
              <div className="absolute start-[25dvh] mt-[50vh] flex items-end">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold capitalize">
                    {currentImage?.name}
                  </h1>
                  <p className="leading-4xl">{currentImage?.description}</p>

                  <input
                    onClick={() => navigate(-1)}
                    type="button"
                    value="Go back"
                    className=" cursor-pointer bg-transparent rounded-full ring-2 ring-white text-center mt-4 p-2 items-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </SharedBackground>
      </LayoutGroup>
    </motion.div>
  );
};
