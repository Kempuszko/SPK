"use client";

import { HiBars3 } from "react-icons/hi2";

function OpenMenu() {
  function handleOpenMenu() {
    document.querySelector(".mobileNav").classList.remove("invisible");
  }

  return (
    <button
      onClick={handleOpenMenu}
      className="focus:ring-4 dark:ring-blue-800 ring-amber-300 outline-none focus:outline-none transition-[background-color,_box-shadow] rounded-md"
    >
      <HiBars3 className="2xs:h-6 2xs:w-6 xs:w-7 xs:h-7 md:h-8 md:w-8 xl:h-9 xl:w-9 cursor-pointer dark:text-gray-200 text-gray-800 xl:hidden" />
    </button>
  );
}

export default OpenMenu;
