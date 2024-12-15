import { Header } from "./Header";

import { SharedImage, Smoothies, SharedBackground, pageVariants } from "./Data";
// import green from "../assets/image/green.png";
import { motion, LayoutGroup } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type SmoothieProps = {
  name?: string;
  image?: string;
  description?: string;
  id?: string;
  color?: string;
  color2?: string;
};
export const Smoothie = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState<string>();
  const [currentProduct, setcurrentProduct] = useState<SmoothieProps>();
  const [currentSize, setCurrentSize] = useState<number>(0);
  console.log(currentSize);

  useEffect(() => {
    setCurrentPath(location?.pathname?.split("/", 3).pop());

    Smoothies.filter((val) => {
      if (val.id == currentPath) {
        setcurrentProduct(val);
      }
    });
  }, [currentPath, location?.pathname]);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="lg:overflow-hidden flex "
      layout
    >
      <LayoutGroup>
        <SharedBackground
          layoutId={`sharedBg-${currentProduct?.id}`}
          isExpanded={true}
          className2={`lg:h-[100vh] w-[100vw] z-10 bg-[${currentProduct?.color}] `}
        >
          <Header />
          <div className="justify-center flex mt-[20dvh] relative items-center ">
            <div className="relative flex items-center justify-center w-screen lg:flex-row flex-col">
              <motion.div className="relative">
                <p className="text-9xl lg:text-[13rem] font-extrabold text-white">
                  JUICY
                </p>

                <SharedImage
                  imageUrl={currentProduct?.image}
                  isExpanded
                  layoutId={`image-${currentProduct?.id}`}
                  className=" h-auto cursor-pointer absolute inset-0 lg:-top-20"
                  handleClick={() => navigate(-1)}
                />
              </motion.div>
              <div className="absolute end-0 mr-[7rem] flex lg:flex-col flex-row lg:mt-0 gap-3 bottom-0 text-center items-center p-3 justify-center">
                {["small", "medium", "large"].map((val, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-full w-[4.5rem] h-[4.5rem] flex items-center capitalize ${
                      index === currentSize
                        ? "bg-white"
                        : `${currentProduct?.color2} text-white`
                    }  
                        
                     `}
                    onClick={() => setCurrentSize(index)}
                  >
                    <div className={`text-xs text-center w-full`}>
                      <p> {val}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:absolute start-[25dvh] mt-[50vh] flex items-end w-48">
                <div className="flex flex-col text-white">
                  <h1 className="text-2xl font-bold capitalize">
                    {currentProduct?.name}
                  </h1>
                  <p className="leading-4xl">{currentProduct?.description}</p>

                  <input
                    onClick={() => navigate(-1)}
                    type="button"
                    value="Go back"
                    className="w-[8rem] cursor-pointer bg-white rounded-full text-black text-center mt-4 p-2 items-center"
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
