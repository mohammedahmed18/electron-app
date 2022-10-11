import React, { createContext, useContext, useEffect, useState } from "react";

export const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const theme = window.localStorage.getItem("theme");
    if (typeof theme === "string") {
      return theme;
    }

    //   check user system
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light";
};

type contextValues = {
  theme: string;
  setTheme: React.SetStateAction<string>;
  toggleTheme: () => void;
};
export const ThemeContext = createContext<contextValues>(null);

interface props {
  initialTheme?: string;
  children: React.ReactNode;
}
export const ThemeProvider = ({ initialTheme, children }: props) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  };

  const toggleTheme = () => {
    const oldtheme = getInitialTheme();
    const newTheme = oldtheme == "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default () => useContext<{ theme: string }>(ThemeContext);
