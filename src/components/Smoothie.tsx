import { Header } from "./Header";
import { SharedImage, Smoothies, SharedBackground } from "./Data";
import { motion, LayoutGroup } from "framer-motion";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
} from "react-icons/tb";

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

  useEffect(() => {
    setCurrentPath(location?.pathname?.split("/", 3).pop());

    Smoothies.filter((val) => {
      if (val.id == currentPath) {
        setcurrentProduct(val);
      }
    });
  }, [currentPath, location?.pathname]);

  return (
    <motion.div>
      <LayoutGroup>
        <SharedBackground
          isExpanded={true}
          className2={`lg:h-dvh h-fit pb-[2rem] w-full z-10 bg-[${currentProduct?.color}] `}
        >
          <Header />
          <div className="justify-center flex lg:mt-[20dvh] relative items-center my-[8rem]">
            <div className="relative flex items-center justify-center w-full lg:flex-row flex-col lg:gap-0 ">
              <motion.div
                layout
                className="relative mt-[5rem] mb-[2rem] lg:md:my-0"
              >
                <p className="text-9xl lg:text-[13rem] font-extrabold text-white">
                  JUICY
                </p>

                <SharedImage
                  imageUrl={currentProduct?.image}
                  isExpanded
                  layoutId={`image-${currentProduct?.id}`}
                  className=" h-auto cursor-pointer absolute inset-0 -top-20"
                  handleClick={() => navigate(-1)}
                />
              </motion.div>
              <motion.div
                layout
                className="lg:absolute end-0 lg:mr-[7rem] flex lg:flex-col flex-row lg:mt-0 gap-3 bottom-0 text-center items-center p-3 justify-center w-full lg:md:w-fit mt-10"
              >
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
              </motion.div>
              <div className="lg:absolute start-[25dvh] lg:mt-[50vh] flex lg:items-end lg:w-48 w-full mt-10 justify-center lg:justify-start text-center lg:text-start">
                <div className="flex flex-col text-white lg:text-start text-center">
                  <motion.h1 className="text-2xl font-bold capitalize">
                    {currentProduct?.name}
                  </motion.h1>
                  <motion.p className="leading-4xl ">
                    {currentProduct?.description}
                  </motion.p>

                  <div className="mt-3 flex lg:justify-start justify-center w-full lg:flex-row gap-4 flex-col items-center">
                    <input
                      onClick={() => navigate(-1)}
                      type="button"
                      value="Add to Cart"
                      className="w-[8rem] cursor-pointer bg-white rounded-full text-black text-center mt-4 p-2 items-center flex justify-center lg:justify-start"
                    />
                    <motion.div className="lg:absolute right-[-65dvw] bottom-0 mt-4 lg:mt-0">
                      <ul
                        className={`flex gap-4 text-2xl text-white items-center hover:text-[${currentProduct?.color2}]`}
                      >
                        <Link
                          to="https://instagram.com/bieefilled"
                          className=""
                        >
                          <TbBrandInstagram />
                        </Link>
                        <Link
                          to="https://linkedin.com/in/bieefilled"
                          className=""
                        >
                          <TbBrandLinkedin />
                        </Link>
                        <Link to="https://github.com/petsamuel" className="">
                          <TbBrandGithub />
                        </Link>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SharedBackground>
      </LayoutGroup>
    </motion.div>
  );
};
