import { MdDarkMode } from "react-icons/md";
import { ImLocation } from "react-icons/im";

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
