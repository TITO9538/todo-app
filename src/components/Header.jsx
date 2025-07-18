import React from "react";
import { DarkMode } from "./DarkMode";

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center">
      <nav className="h-25 w-80 flex items-center justify-between z-10 md:w-130 md:pt-25 md:mb-15">
        <h1 className="text-white text-3xl font-medium md:text-4xl">T O D O</h1>
        <DarkMode></DarkMode>
      </nav>
      <img
        src="../../images/bg-mobile-light.jpg"
        alt="bg-desktop-light"
        className="fixed top-0 w-full dark:hidden md:hidden"
      />
      <img
        src="../../images/bg-desktop-light.jpg"
        alt="bg-desktop-light"
        className="fixed top-0 w-full hidden md:block md:dark:hidden"
      />
      <img
        src="../../images/bg-mobile-dark.jpg"
        alt="bg-desktop-dark"
        className="fixed top-0 w-full hidden dark:block md:dark:hidden"
      />
      <img
        src="../../images/bg-desktop-dark.jpg"
        alt="bg-desktop-dark"
        className="fixed top-0 w-full hidden md:dark:block"
      />
    </header>
  );
}
