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
    <div className=" flex flex-wrap  justify-center items-center my-auto mx-auto   rounded-3xl bg-white shadow-lg ">
      <LayoutGroup>
        {Smoothies.map((val, index) => (
          <SharedBackground
            // layoutId={`val-${val.id}`}
            isExpanded={false}
            key={val.id}
            className={`cursor-pointer p-6 lg:w-[15dvw] transition-all duration-300 ease-in-out ${
              active === val.id && " text-white"
            }  ${
              val.name === "green smoothie" && active === val.id
                ? "bg-[#b1c861] lg:rounded-l-3xl lg:rounded-tr-none rounded-t-3xl"
                : val.name === "berry smoothie" && active === val.id
                ? "bg-[#c195b8]"
                : val.name === "orange smoothie" && active === val.id
                ? "bg-[#dfa91b]"
                : val.name === "coffee milk" && active === val.id
                ? "bg-[#c7a25e] lg:rounded-r-3xl rounded-b-3xl lg:rounded-bl-none"
                : ""
            }`}
            handleClick={() => {
              setActive(val.id);
              setActiveImage(val.image);
            }}
          >
            {val.name && (
              <div className=" justify-center flex flex-col items-center p-6">
                <div className="my-5">
                  {active === val.id ? (
                    <SharedImage
                      imageUrl={val.image}
                      isExpanded={false}
                      layoutId={`image-${val.id}`}
                    />
                  ) : (
                    <span
                      className={` ${
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
                  className={`font-extrabold capitalize    ${
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
                  <p>{val.description}</p>
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
    </div>
  );
};
