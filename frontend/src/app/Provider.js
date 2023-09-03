"use client";

import { createContext, useState } from "react";

export const Context = createContext({});

export default function Provider({ children }) {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const toggleMenu = () => {
    setMenu((menu) => !menu);
  };
  return (
    <Context.Provider value={{ theme, toggleTheme, menu, toggleMenu }}>
      {children}
    </Context.Provider>
  );
}
