import React,{useState,useEffect} from "react";
import Navbar from "./Navbar";

function App() {
  
  return (
    <div>
      <Navbar></Navbar>
        <div className="h-screen overflow-x-hidden bg-gradient-to-r from-[#2006eb] to-[#cf1f60]">
          <div className="grid place-content-center text-center text-white h-3/4">
            <h1 className="text-[40px] font-semibold">
              Unlimited email design.
            </h1>
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
            <img className="w-24" src="src/assets/apple.png" alt="" />
            <img className="w-24" src="src/assets/uber.png" alt="" />
            <img className="w-24" src="src/assets/amazon.png" alt="" />
          </div>
        </div>
      </div>
  );
}

export default App;
