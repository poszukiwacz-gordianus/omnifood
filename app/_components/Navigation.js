"use client";

import Link from "next/link";
import { useState } from "react";
import { navigationContent } from "../_content/content";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`${isOpen ? "pointer-events-auto visible translate-x-0 bg-opacity-85" : "pointer-events-none invisible translate-x-full opacity-0"} absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-primary-100 transition-all duration-1000 ease-in-out lg:visible lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:items-start lg:justify-start lg:opacity-100`}
      >
        <ul className="flex flex-col items-center gap-8 lg:flex-row lg:gap-8 xl:gap-10">
          {navigationContent.map((nav, index) => (
            <li key={index}>
              <Link
                href={nav.link}
                aria-label={`Go to ${nav.text}`}
                className={`text-2xl font-medium text-accent-500 transition-all duration-300 hover:text-primary-600 lg:inline-block lg:text-base xl:text-xl ${index + 1 === navigationContent?.length ? "rounded-xl bg-primary-500 px-5 py-2 text-secondary-50 hover:bg-primary-600 hover:text-secondary-50" : ""}`}
              >
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="z-0 block text-4xl text-accent-500 lg:hidden"
        onClick={() => setIsOpen((b) => !b)}
      >
        {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>
    </>
  );
}
