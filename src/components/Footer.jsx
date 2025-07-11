import { useState } from "react";
import faceBook from "../assets/icon-facebook.svg";
import youTube from "../assets/icon-youtube.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";
import logo from "../assets/logo.svg";
export default function Footer() {
  const [email, setEmail] = useState("");
  const[error,setError]= useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email.includes('@')){
      setError('please insert a vaild email')
    }else{
      setError('')
    }


  };

  return (
    <>
      <div className=" bg-[url(./src/assets/bg-simplify-section-mobile.svg)] md:bg-[url(./src/assets/bg-simplify-section-desktop.svg)] bg-no-repeat  bg-orange-600 py-20 px-12 flex md:flex-row md:items-center md:justify-evenly flex-col items-center ">
        <h1 className="text-4xl text-center md:text-start font-bold text-white">
          Simplify how your team <br className=" hidden md:block" />
          works today.
        </h1>
        <button className=" mt-10 md:mt-0 px-10 py-3 text-orange-600 duration-500 hover:text-red-300 rounded-full  bg-white font-semibold shadow-lg ">
          Get Started
        </button>
      </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 bg-[#222225] px-6 py-16">
 
  <form
    onSubmit={handleSubmit}
    className="col-span-2 lg:col-start-4 justify-center lg:justify-end items-center"
  >
    <div className="  space-x-4 flex justify-center">

    <input
      className="outline-0 bg-white rounded-full  pl-5 py-2 w-full max-w-[300px]"
      type="text"
      name="email"
      onChange={(e) =>setEmail(e.target.value)}
      value={email}
      placeholder="Updates in your inbox..."
    />
    <button
      type="submit"
      className=" duration-500 hover:bg-red-300 bg-orange-600 py-2 text-lg text-white px-6 rounded-full"
    >
      Go
    </button>
    </div>
  <em className="ml-4 text-red-500 text-sm ">{error}</em>
  </form>

 
  <div className="grid space-x-4 justify-center text-white text-sm lg:col-start-2 lg:row-start-1 lg:row-end-3 ">
    <p>Home</p>
    <p>Pricing</p>
    <p>Products</p>
    <p>About Us</p>
  </div>


  <div className="grid space-x-4 justify-center text-white text-sm lg:col-start-3 lg:row-start-1 lg:row-end-3  ">
    <p>Careers</p>
    <p>Community</p>
    <p>Privacy Policy</p>
  </div>


  <div className="col-span-2 lg:col-start-1 lg:row-start-2 flex justify-center lg:justify-start items-center gap-6">
    <img src={faceBook} alt="Facebook" className="h-6 w-6 " />
    <img src={youTube} alt="YouTube" className="h-6 w-6" />
    <img src={twitter} alt="Twitter" className="h-6 w-6" />
    <img src={pinterest} alt="Pinterest" className="h-6 w-6" />
    <img src={instagram} alt="Instagram" className="h-6 w-6" />
  </div>


  <div className="col-span-2 lg:col-span-1 lg:row-start-1 flex justify-center lg:justify-start ">
    <img src={logo} alt="Logo" className=" w-fit" />
  </div>
  <p className="col-span-2 lg:col-start-4 text-neutral-400 text-xs flex justify-center lg:justify-end">
    Copyright 2020. All Rights Reserved
  </p>
</div>

    </>
  );
}
