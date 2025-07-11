import { useState } from "react";
import logo from "../assets/logo.svg";
import close from "../assets/icon-close.svg";
import menu from "../assets/icon-hamburger.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="  flex items-center lg:justify-evenly justify-between p-5">
        <img src={logo} alt="" />
        <div
          className="md:hidden relative z-30"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {!isOpen ? <img src={menu} alt="" /> : <img src={close} alt="" />}
        </div>
        <div className=" hidden  bg-white md:flex items-center gap-6 text-lg font-semibold">
          <p className="text-blue-950 duration-500 hover:text-neutral-400">
            Pricing
          </p>
          <p className="text-blue-950 duration-500 hover:text-neutral-400">
            Product
          </p>
          <p className="text-blue-950 duration-500 hover:text-neutral-400">
            About Us
          </p>
          <p className="text-blue-950 duration-500 hover:text-neutral-400">
            Careers
          </p>
          <p className="text-blue-950 duration-500 hover:text-neutral-400">
            Community
          </p>
        </div>
              <button className=" hidden lg:block  px-10 py-3 duration-700 hover:bg-red-300 bg-orange-600 rounded-full text-white font-semibold shadow-xl shadow-orange-500 hover:shadow-red-300">
        Get Started
      </button>
      </div>

      <div
      style={{background:'linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.72) 50%, rgba(0, 0, 0, 0.49) 100%)'}}
        className={`${
          isOpen ? "fixed" : "hidden"
        } z-20 w-full h-dvh top-0 left-0  px-5`}
      >
        <div className=" h-70 bg-white mt-25 flex flex-col items-center gap-6 py-6 text-lg font-semibold">
          <p className="text-blue-950 duration-500 hover:text-neutral-400">
            Pricing
          </p>
          <p className="text-blue-950 duration-500 hover:text-neutral-400">
            Product
          </p>
          <p className="text-blue-950 duration-500 hover:text-neutral-400">
            About Us
          </p>
          <p className="text-blue-950 duration-500 hover:text-neutral-400">
            Careers
          </p>
          <p className="text-blue-950 duration-500 hover:text-neutral-400">
            Community
          </p>
        </div>
      </div>
    </>
  );
}
