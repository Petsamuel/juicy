import { FaShoppingBag, FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<boolean>(false);
  const navItems = [
    { name: "green", link: "green" },
    { name: "Strawberry", link: "berry" },
    { name: "orange", link: "orange" },
    { name: "coffee", link: "coffee" },
  ];
  return (
    <header className="z-50">
      <nav className="flex justify-around items-center py-4 text-white">
        <div className="cursor-pointer flex gap-4 items-center justify-center">
          <Link className="text-2xl" to={"/"}>
            Juicy
          </Link>
          {!active ? (
            <RxHamburgerMenu
              className="text-2xl lg:hidden z-50"
              onClick={() => setActive(!active)}
            />
          ) : (
            <RiCloseLargeFill
              className="text-2xl lg:hidden z-50"
              onClick={() => setActive(!active)}
            />
          )}
        </div>
        <div className={`${active && "w-full lg:w-fit"} lg:w-fit`}>
          <ul className=" gap-x-6 hidden lg:flex">
            {navItems.map((val, index) => (
              <li
                key={index}
                className="capitalize cursor-pointer"
                onClick={() =>
                  navigate(
                    `${val.link === "/" ? "/" : `/smoothie/${val.link}`}`
                  )
                }
              >
                {val.name}
              </li>
            ))}
          </ul>
          {active && (
            <ul className="fixed gap-x-6  flex-col lg:hidden end-0 h-full bg-white w-1/2 z-20 top-0 text-black p-6">
              {navItems.map((val, index) => (
                <li
                  key={index}
                  className="capitalize cursor-pointer my-[5rem] w-full"
                  onClick={() =>
                    navigate(
                      `${val.link === "/" ? "/" : `/smoothie/${val.link}`}`
                    )
                  }
                >
                  {val.name}
                </li>
              ))}
            </ul>
          )}
          {active && (
            <span className="absolute z-10 bg-transparent h-full w-full left-0 backdrop-blur-lg top-0 lg:hidden" />
          )}
        </div>
        <div className="flex space-x-12 items-center">
          <div className="rounded-full border-white p-1 border-2 ">
            <FaUser className="rounded-full text-lg cursor-pointer" />
          </div>
          <div className="relative ">
            <FaShoppingBag className="text-xl cursor-pointer" />
            <span className="absolute text-xs  text-white  -top-2 -right-3 bg-rose-700 font-bold rounded-full  h-auto text-center w-5">
              2
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};
