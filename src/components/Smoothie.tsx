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
    <div>
      <LayoutGroup>
        <SharedBackground
          isExpanded={true}
          className2={`pb-[2rem] px-4 z-10 bg-[${currentProduct?.color}] `}
        >
          <Header />
          <div className="justify-center flex lg:my-[10dvh] relative flex-col">
            <div className="relative flex items-center  flex-col lg:gap-0 ">
              <motion.div className=" mb-[2rem]  lg:md:my-0 flex">
                <motion.p
                  layout
                  className="text-[32dvw] lg:text-[15dvw] font-extrabold text-white"
                >
                  JUICY
                </motion.p>

                <SharedImage
                  imageUrl={currentProduct?.image}
                  isExpanded
                  layoutId={`image-${currentProduct?.id}`}
                  className=" h-auto cursor-pointer absolute inset-0 lg:-top-20 top-[-1rem]"
                  handleClick={() => navigate(-1)}
                />
              </motion.div>

              <motion.div
                layout
                className="lg:absolute end-0 lg:mr-[8rem] flex lg:flex-col flex-row lg:mt-0 gap-3 bottom-0 text-center items-center p-3 justify-center w-screen lg:md:w-fit mt-[1rem]"
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
            </div>
            <div className="lg:mx-[10rem]">
              <div className="flex flex-col text-white lg:text-start text-center">
                <motion.h1 className="text-2xl font-bold capitalize">
                  {currentProduct?.name}
                </motion.h1>
                <motion.p className="leading-4xl text-sm">
                  {currentProduct?.description} lorem ipsum dolor sit amet
                  <p>credit @uiuxzaid</p>
                </motion.p>

                <div className="mt-3 flex lg:justify-between justify-center lg:flex-row gap-4 flex-col items-center ">
                  <input
                    onClick={() => navigate(-1)}
                    type="button"
                    value="Add to Cart"
                    className={`w-[8rem] cursor-pointer bg-white hover:bg-[${currentProduct?.color}] rounded-full text-black text-center mt-4 p-2 items-center flex justify-center lg:justify-start text-sm`}
                  />
                  <motion.div className=" right-[-55dvw] bottom-0 mt-4 lg:mt-0">
                    <ul
                      className={`flex gap-4 text-2xl text-white items-center hover:text-[${currentProduct?.color2}]`}
                    >
                      <Link to="https://instagram.com/bieefilled" className="">
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
                      </Link>{" "}
                    </ul>
                    <Link
                      to="https://github.com/petsamuel"
                      className="text-sm mt-4"
                    >
                      bieefilled 2024
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </SharedBackground>
      </LayoutGroup>
    </div>
  );
};
