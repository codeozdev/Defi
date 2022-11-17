import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-black text-white">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[var(--primary-blue)]">DEFI</h1>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex items-center">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className="ml-4">Use Defi</button>
          </ul>
        </nav>
        {/*Hamburger Icon*/}
        <div onClick={handleClick} className="block md:hidden">
          {!nav ? (
            <AiOutlineClose className="text-white text-2xl" />
          ) : (
            <AiOutlineMenu className="text-white text-2xl" />
          )}
        </div>
        {/*Mobile Menu*/}
        <nav
          className={
            !nav
              ? "absolute top-[90px] left-0 flex justify-center flex-col items-center bg-black w-full text-center"
              : "hidden"
          }
        >
          <ul className="md:hidden">
            <li className="text-2xl">Platform</li>
            <li className="text-2xl">Developers</li>
            <li className="text-2xl">Community</li>
            <li className="text-2xl">About</li>
            <button className="m-8">Use Defi</button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
