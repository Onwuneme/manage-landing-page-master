import introImg from "../assets/illustration-intro.svg";
import { useEffect, useState } from "react";

export default function Intro() {
    const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
   <>
  <div className="px-6 flex flex-col lg:flex-row-reverse lg:justify-evenly md:items-center text-center lg:text-start mb-20 md:mt-20">
    
 
    <img
      src={introImg}
      alt=""
      className={`my-4 transform transition-all duration-500 ease-in ${
        animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
      } delay-[300ms]`}
    />

    <div>
      {/* h2 animation from right */}
      <h2
        className={`text-blue-950 text-[40px] font-semibold md:text-[50px] xl:text-[60px] md:font-bold transform transition-all duration-500 ease-in ${
          animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        } delay-[500ms]`}
      >
        Bring everyone <br className="hidden md:block" /> together to build
        <br className="hidden md:block" /> better products.
      </h2>

      {/* p animation from right */}
      <p
        className={`text-neutral-400 md:text-lg mb-6 mt-2 transform transition-all duration-500 ease-in ${
          animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        } delay-[800ms]`}
      >
        Manage makes it simple for software teams
        <br className="hidden md:block" />
        to plan day-to-day tasks while keeping the
        <br className="hidden md:block" />
        larger team goals in view.
      </p>

      <button className={`px-10 py-3 bg-orange-600 hover:bg-red-300 rounded-full text-white font-semibold shadow-lg shadow-orange-600 hover:shadow-red-300 transition-all duration-500 ease-in hover:ease-linear hover:duration-300 ${
        animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
      } delay-[1300]`}>
        Get Started
      </button>
    </div>
  </div>
</>

    </>
  );
}
