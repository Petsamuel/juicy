import { motion, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Smoothies } from "./Data";
import { SharedBackground, SharedImage } from "./Data";

export const Card = () => {
  const [active, setActive] = useState<string>();
  const [, setActiveImage] = useState<string>();

  const navigate = useNavigate();

  return (
    <motion.div
      layout
      className=" lg:flex lg:flex-wrap items-center w-screen lg:justify-between lg:h-screen justify-center"
    >
      <LayoutGroup>
        {Smoothies.map((val, index) => (
          <SharedBackground
            isExpanded={false}
            key={val.id}
            className={`cursor-pointer p-[3rem]  transition-all duration-300 ease-in-out flex  h-[100dvh]   ${
              active === val.id && " text-white"
            }  ${
              val.name === "green smoothie" && active === val.id
                ? "bg-[#b1c861] "
                : val.name === "berry smoothie" && active === val.id
                ? "bg-[#c195b8]"
                : val.name === "orange smoothie" && active === val.id
                ? "bg-[#dfa91b]"
                : val.name === "coffee milk" && active === val.id
                ? "bg-[#c7a25e] "
                : ""
            }`}
            handleClick={() => {
              setActiveImage(val.image);
              setActive(active === val.id ? "" : val.id);
            }}
          >
            {val.name && (
              <div className=" justify-center flex flex-col items-center p-6 w-full">
                <div className="my-5">
                  {active === val.id ? (
                    <SharedImage
                      imageUrl={val.image}
                      isExpanded={false}
                      layoutId={`image-${val.id}`}
                    />
                  ) : (
                    <span
                      className={` text-[${val.color}] ${
                        val.name === "green smoothie"
                          ? "text-[#b1c861]"
                          : val.name === "berry smoothie"
                          ? "text-[#c195b8]"
                          : val.name === "orange smoothie"
                          ? "text-[#dfa91b]"
                          : "text-[#c7a25e]"
                      } text-3xl font-semibold`}
                    >
                      0{index + 1}
                    </span>
                  )}
                </div>
                <motion.div
                  layout
                  className={`font-extrabold capitalize w-max    ${
                    val.id === active && "-mt-6"
                  }`}
                >
                  {val.name}
                </motion.div>
                <div
                  className={`text-lg text-gray-400 ${
                    active === val.id && " text-white"
                  }  text-sm capitalize`}
                >
                  <p className="w-max">{val.description}</p>
                </div>
                <div className="mt-3">
                  <input
                    value="see more ⇾"
                    type="button"
                    className={`border-2  bg-transparent text-black py-2 px-4 rounded-full cursor-pointer ${
                      active === val.id && " text-white"
                    }  `}
                    onClick={() => navigate(`/smoothie/${val.id}`)}
                  />
                </div>
              </div>
            )}
          </SharedBackground>
        ))}
      </LayoutGroup>
    </motion.div>
  );
};
