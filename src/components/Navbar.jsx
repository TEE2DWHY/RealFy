const navigationItems = [
  { text: "home", route: "/" },
  { text: "residence", route: "/residence", id: "residence" },
  { text: "value", route: "/value" },
  { text: "contact", route: "/contact" },
];

const Navbar = ({ currentRoute, toggleMode, icons }) => {
  return (
    <nav className="text-white capitalize">
      <div className="flex items-center justify-between py-5">
        <div className="cursor-pointer font-bold uppercase text-blue-600">
          Realfy.
        </div>
        <ul className="hidden justify-between items-center space-x-8 md:flex">
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
          <div onClick={toggleMode}>{icons}</div>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md capitalize">
            subscribe
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
