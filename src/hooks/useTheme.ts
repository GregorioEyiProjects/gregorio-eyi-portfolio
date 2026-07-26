// src/hooks/useTheme.ts

import { useState, useEffect } from "react";

type Theme = "light" | "dark";

const useTheme = () => {
  const getInitialTheme = (): Theme => {
    const themeFound =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark";

    return themeFound;
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    try {
      if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "light");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }

      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

export default useTheme;
