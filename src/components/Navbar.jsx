import { DarkMode } from "../assets/icons/icons";

const navigationItems = [
  { text: "home", route: "/" },
  { text: "residence", route: "/residence" },
  { text: "value", route: "/value" },
  { text: "contact", route: "/contact" },
];

const Navbar = ({ currentRoute }) => {
  return (
    <nav className="text-white capitalize">
      <div className="flex items-center justify-between py-5">
        <div className="cursor-pointer">logo</div>
        <ul className="flex justify-between items-center space-x-8">
          {navigationItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer ${
                currentRoute === item.route ? "text-blue-500 font-bold" : ""
              }`}
            >
              {item.text}
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center space-x-5">
          <DarkMode />
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md capitalize">
            subscribe
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
