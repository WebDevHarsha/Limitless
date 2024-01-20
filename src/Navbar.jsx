import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex  items-center  justify-between bg-transparent  z-20  fixed  w-screen p-4 px-10 ">
      <a className="flex items-center opacity-100" href="/">
        
        <h3 className="font-bold text-2xl p-2 text-white">Limitless</h3>
      </a>

      {/* mobile navbar */}
      <nav>
        <section className="flex lg:hidden">
          <div
            className=" space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col text-black items-center justify-between min-h-[250px]">
            <li className="mt-2">
            <a href="/about">Pricing</a>
          </li>
          <li className="mt-2">
            <a href="/portfolio">How it works</a>
          </li>
          <li className="mt-2">
            <a href="/contact">Case studies</a>
          </li>
          <li className="mt-2">
            <a href="/contact">Blog</a>
          </li>
          <li className="mt-2">
            <a href="/contact">FAQ</a>
          </li>
              
            </ul>
          </div>
        </section>

        {/* desktop navbar */}

        <ul className="items center hidden text-xl space-x-8  text-white lg:flex">
          <li className="mt-2">
            <a href="/about">Pricing</a>
          </li>
          <li className="mt-2">
            <a href="/portfolio">How it works</a>
          </li>
          <li className="mt-2">
            <a href="/contact">Case studies</a>
          </li>
          <li className="mt-2">
            <a href="/contact">Blog</a>
          </li>
          <li className="mt-2">
            <a href="/contact">FAQ</a>
          </li>
          
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
