"use client";

import { HiMoon, HiSun } from "react-icons/hi2";
import { useDarkHook } from "../hooks/useDarkHook";

function DarkModeButton() {
  const [isDark, handleIsDark] = useDarkHook();

  const commonStyles =
    "2xs:h-6 2xs:w-6 xs:w-7 xs:h-7 md:h-8 md:w-8 xl:h-9 xl:w-9 cursor-pointer dark:text-gray-200 text-gray-800 ";

  function handleToggle() {
    handleIsDark();
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <button
      onClick={handleToggle}
      className="transition-[box-shadow] rounded-md focus:ring-4 dark:ring-blue-800 outline-none focus:outline-none ring-amber-300"
    >
      {isDark ? (
        <HiSun className={commonStyles} />
      ) : (
        <HiMoon className={commonStyles} />
      )}
    </button>
  );
}

export default DarkModeButton;
