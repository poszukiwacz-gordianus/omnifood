"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import { createContext, useState, useContext, useEffect } from "react";

const StickyHeaderContext = createContext();

function StickyHeaderProvider({ children }) {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    console.log(sticky);
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero").offsetHeight;
      if (window.scrollY > heroHeight) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [sticky]);

  return (
    <StickyHeaderContext.Provider
      value={{
        sticky,
        setSticky,
      }}
    >
      {children}
    </StickyHeaderContext.Provider>
  );
}

function useStickyHeaderContext() {
  const context = useContext(StickyHeaderContext);
  if (context === undefined)
    throw new Error("StickyContext was used outside of StickyHeaderProvider");
  return context;
}

export { StickyHeaderProvider, useStickyHeaderContext };
