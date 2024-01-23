import { MdDarkMode } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineFilterList } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";

export const DarkMode = () => {
  return (
    <>
      <MdDarkMode size="25" cursor="pointer" data-aos="fade-in" />
    </>
  );
};

export const LightMode = () => {
  return (
    <>
      <CiLight size="25" cursor="pointer" data-aos="fade-in" />
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
        className="inline bg-slate-300 p-1 rounded-lg cursor-pointer"
        size="25"
      />
    </>
  );
};

export const ArrowTop = () => {
  return (
    <>
      <MdOutlineKeyboardDoubleArrowUp
        className="inline bg-slate-300 p-1 rounded-lg fixed bottom-10 right-5 text-blue-600 cursor-pointer font-extrabold"
        size="25"
      />
    </>
  );
};

export const List = () => {
  return (
    <>
      <MdOutlineFilterList className="inline mr-1 cursor-pointer" size="20" />
    </>
  );
};

export const Cancel = () => {
  return (
    <>
      <MdCancel className="inline mr-1 cursor-pointer" size="20" />
    </>
  );
};

export const Menu = () => {
  return (
    <>
      <RiMenu3Line />
    </>
  );
};
