"use client";
import { ScrollContextType } from "@lib/utils/type";
import React, { useState } from "react";


const ScrollValueContext = React.createContext<ScrollContextType>({
  scrollValue: 0,
  handleScrollValue: () => {},
});
export const ScrollValueProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [scrollValue, setScroll] = useState(0);

  const handleScrollValue = (value:number) => {
    setScroll(value);
  };
  return (
    <ScrollValueContext.Provider value={{ scrollValue, handleScrollValue }}>
      {children}
    </ScrollValueContext.Provider>
  );
};
export default ScrollValueContext;
