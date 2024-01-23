import { useState } from "react";
import { Menu } from "../assets/icons/icons";
const navigationItems = [
  { text: "home", route: "/" },
  { text: "residence", route: "/residence", id: "residence" },
  { text: "value", route: "/value" },
  { text: "contact", route: "/contact" },
];

const Navbar = ({ currentRoute, toggleMode, icons }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="text-white capitalize">
      <div className="flex items-center justify-between py-5">
        <div className="cursor-pointer font-bold uppercase text-blue-600">
          Realfy.
        </div>

        <ul
          className={`${
            mobileMenu
              ? "absolute bg-slate-100"
              : "hidden justify-between items-center space-x-8 md:flex"
          }`}
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        >
          {navigationItems.map((item, index) => (
            <a href={item.id ? `#${item.id}` : null} key={index}>
              <li
                className={`cursor-pointer ${
                  currentRoute === item.route
                    ? "text-blue-500 font-bold hover:opacity-75"
                    : ""
                }`}
              >
                {item.text}
              </li>
            </a>
          ))}
        </ul>
        <div className="flex justify-between items-center space-x-5">
          <div className="ml-40 md:ml-0" onClick={toggleMode}>
            {icons}
          </div>
          <button className="hidden md:flex px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md capitalize">
            subscribe
          </button>
        </div>
        <div className="flex md:hidden nav-toggler">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
