"use client";

import { createContext, useState, useContext, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero").offsetHeight;
      if (window.scrollY > heroHeight) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <NavigationContext.Provider
      value={{
        sticky,
        setSticky,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (context === undefined)
    throw new Error("StickyContext was used outside of NavigationProvider");
  return context;
}

export { NavigationProvider, useNavigationContext };
