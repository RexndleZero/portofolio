import Link from "next/link";
import React, { useState } from "react";
import Navlinks from "./Navlinks";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "about",
    path: "#about",
  },
  {
    title: "projects",
    path: "#project",
  },
  {
    title: "contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setnavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 ">
        <Link href="/" legacyBehavior>
          <a className="text-2xl md:text-5xl text-white font-semibold">LOGO</a>
        </Link>
        <div className="mobile menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setnavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5 " />
            </button>
          ) : (
            <button
              onClick={() => setnavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XmarkIcon className="h-5 w-5 " />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} legacyBehavior>
                  <a className="text-white">{link.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
