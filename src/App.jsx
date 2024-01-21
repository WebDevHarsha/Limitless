import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="bg-[#f1eef7]">
      <div className="h-screen overflow-x-hidden bg-gradient-to-r from-[#2006eb] to-[#cf1f60]">
        <Navbar></Navbar>

        <div className="grid place-content-center text-center text-white h-3/4">
          <h1 className="text-[40px] font-semibold">Unlimited email design.</h1>
          <h1 className="text-[40px] font-semibold">
            One low priced monthly rate.
          </h1>
          <p className="opacity-80">
            With Limitless, you can get unlimited email design requests, and
            revisions for
          </p>
          <h3 className="underline decoration-2 underline-offset-8 decoration-[#fb9e67]">
            70% less than the cost of a full-time designer
          </h3>
          <button className="bg-white font-semibold text-black w-32 h-10 mx-auto mt-5 rounded-lg">
            See our plans
          </button>
        </div>
        <div className="mb-5 w-screen text-center text-white">
          TRUSTED BY THESE INNOVATIVE COMPANIES
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 ">
          <img className="w-24" src="src/assets/microsoft.png" alt="" />
          <img className="w-24" src="src/assets/insta.png" alt="" />
          <img className=" w-24" src="src/assets/apple.png" alt="" />
          <img
            className="hidden sm:inline w-24"
            src="src/assets/uber.png"
            alt=""
          />
          <img
            className="hidden sm:inline w-24"
            src="src/assets/amazon.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row p-5 lg:flex-none  ">
  <div className="text-balance rounded-lg mx-10 bg-white text-center sm:text-left grid place-content-center sm:p-10">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-8">
      Finding a reliable freelancer is really hard. Hiring a full-time designer
      is too expensive.
    </h1>
    <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-8 font-semibold bg-gradient-to-r from-[#2006eb] to-[#cf1f60] bg-clip-text text-transparent">
      Limitless makes email easy.
    </h1>

    <p className="p-1">
      Our high-quality email design service is stress-free and affordable. We
      give you access to world-class design, unlimited projects, and limitless
      revisions for one flat monthly fee.
    </p>
    <button className="mt-5 sm:mt-10 mb-4 bg-[#0009ff] w-full sm:w-32 text-white font-semibold border-2 rounded-lg h-10 hover:ring-2 transition-all duration-300 ring-[#0009ff]">
      How it Works
    </button>
  </div>

  <div className="w-full sm:w-1/2 lg:w-full flex justify-center items-center mt-5 sm:mt-0">
    <img
      className="rounded-3xl object-cover w-full h-64 sm:h-auto"
      src="src/assets/cards.jpg"
      alt=""
    />
  </div>
</div>

    </div>
  );
}

export default App;
