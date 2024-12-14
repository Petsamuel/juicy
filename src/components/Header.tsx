import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const navItems = [
    { name: "green", link: "green" },
    { name: "Strawberry", link: "berry" },
    { name: "orange", link: "orange" },
    { name: "coffee", link: "coffee" },
  ];
  return (
    <header>
      <nav className="flex justify-around items-center py-4 text-white">
        <div className="cursor-pointer">
          <Link className="text-2xl" to={"/"}>
            Juicy
          </Link>
        </div>
        <div>
          <ul className="flex gap-x-6">
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
        </div>
        <div className="flex gap-x-3">
          <FaCartShopping />
          <p>my Account</p>
        </div>
      </nav>
    </header>
  );
};
