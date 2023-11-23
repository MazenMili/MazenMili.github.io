import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed top-0 left-0 right-0 text-white flex justify-between items-center h-20 max-w-[1240px] mx-auto">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Mazen.Dev</h1>
      <ul className="hidden md:flex text-2xl">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Projects</li>
        <li className="p-4">contact</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r-gray-800 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Mazen.Dev
        </h1>

        <ul className="p-4 uppercase ">
          <li className="p-4 border-b border-gray-100">Home</li>
          <li className="p-4 border-b border-gray-100">About</li>
          <li className="p-4 border-b border-gray-100">Projects</li>
          <li className="p-4">contact</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
