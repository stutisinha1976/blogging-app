import Image from "next/image";
import React from "react";
import { assets } from "@/Assets/assets";

function Header() {
  return (
    <div className="py-5 px-12 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt="Logo"
          className="w-[130px]sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] hover:shadow-[-4px_4px_0px_#000000] transition-all duration-200">
          Get Started <Image src={assets.arrow} width={20} alt="Arrow Right" />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium ">Latest Blogs</h1>
        <p className="mt-10 max-w-185 m-auto text-xs sm:text-base ">
          Stay updated with our latest news and articles
        </p>
        <form className="flex justify-between max-w-125 scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000] hover:shadow-[-4px_4px_0px_#000000] transition-all duration-200">
          <input
            type="email"
            placeholder="Enter your email"
            className=" px-4 py-2 outline-none text-sm sm:text-base pl-4"
          />
          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
