import React, { useState, useEffect } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import { motion } from "framer-motion";

const navlinks = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "About",
    slug: "/about",
  },
  {
    title: "Skills",
    slug: "/skills",
  },
  {
    title: "Portfolio",
    slug: "/portfolio",
  },
  {
    title: "Contact",
    slug: "/contact",
  },
];

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkTheme(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkTheme(false);
    }
  }, []);

  const handleTheme = () => {
    if (!isDarkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkTheme(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkTheme(false);
    }
  };
  return (
    <header className="h-[80px] w-full border-b text-neutral-800 bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-300 dark:border-b-neutral-700 duration-300 ">
      <div className="max-w-[1200px] mx-auto h-full  flex items-center justify-between px-5">
        <div>
          <Link href="/">
            <a className="font-semibold text-2xl cursor-pointer hover:text-violet-500 transition-colors duration-300">
              Jethro
            </a>
          </Link>
        </div>

        {/* mobile and tablets only */}
        <div className="md:hidden flex gap-5 items-center relative h-full">
          <span
            className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-2 cursor-pointer hover:text-yellow-500 duration-300"
            onClick={() => handleTheme()}
          >
            {isDarkTheme ? <BsMoonFill size={24} /> : <BsSunFill size={24} />}
          </span>
          <div
            className="md:hidden  p-1 rounded-md dark:ring-1 ring-inset  bg-neutral-200 dark:bg-neutral-800 dark:ring-neutral-500 text-neutral-700 cursor-pointer dark:text-neutral-300"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <BiMenu size={36} />
          </div>

          {/* dropdown nav*/}
          <nav
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } absolute top-[80px] right-0 mt-4  rounded-md py-4 px-3 bg-neutral-100 sm:w-[50vw] z-50 ring-neutral-200 ring-2 dark:ring-neutral-700 dark:bg-neutral-800`}
          >
            <ul>
              {navlinks.map((link) => (
                <li
                  key={link.slug}
                  className="py-3 px-10 text-center hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md cursor-pointer transition duration-300"
                >
                  <Link href={link.slug}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <nav className="gap-5 h-full items-center hidden md:flex">
          <ul className="flex items-center gap-1">
            {navlinks.map((link) => (
              <li key={link.slug} className="">
                <Link href={link.slug}>
                  <a className="font-medium py-4 px-4 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300 inline-block hover:text-violet-500">
                    {link.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <span
            className="bg-neutral-200 dark:bg-neutral-700 rounded-md p-2 cursor-pointer hover:text-yellow-500 duration-300"
            onClick={() => handleTheme()}
          >
            {isDarkTheme ? <BsMoonFill size={20} /> : <BsSunFill size={20} />}
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
