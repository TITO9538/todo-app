import { useEffect, useState } from "react";

export function DarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="hover:scale-110 transition-transform duration-300 p-2">
      {/* MOON ICON (Visible en dark mode) */}
      <img src="../../public/images/icon-moon.svg" alt="Moon" className={`w-6 h-6 ${isDark ? "hidden" : "inline-block"}`}/>

      {/* SUN ICON (Visible en light mode) */}
      <img src="../../public/images/icon-sun.svg" alt="Sun" className={`w-6 h-6 ${isDark ? "inline-block" : "hidden"}`}/>
    </button>
  );
}
