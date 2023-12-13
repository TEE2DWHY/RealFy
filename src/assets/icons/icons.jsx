import { MdDarkMode } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";

export const DarkMode = () => {
  return (
    <>
      <MdDarkMode size="25" cursor="pointer" />
    </>
  );
};

export const Location = () => {
  return (
    <>
      <ImLocation className="inline absolute mt-10 ml-3 text-blue-500 text-lg" />
    </>
  );
};

export const Next = () => {
  return (
    <>
      <FaGreaterThan className="inline text-blue-600" />
    </>
  );
};

export const Previous = () => {
  return (
    <>
      <FaLessThan className="inline text-blue-600" />
    </>
  );
};

export const ArrowDown = () => {
  return (
    <>
      <MdOutlineArrowDropDown
        className="inline bg-slate-300 p-1 rounded-lg"
        size="25"
      />
    </>
  );
};
