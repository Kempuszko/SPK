"use client";
import {
  HiArchiveBox,
  HiMiniCalendar,
  HiHome,
  HiSquare2Stack,
  HiXMark,
  HiBars3,
} from "react-icons/hi2";
import NavLink from "./NavLink";

const navLinks = [
  { name: "Strona główna", href: "/application/dashboard", icon: <HiHome /> },
  {
    name: "Kalendarz",
    href: "/application/calendar",
    icon: <HiMiniCalendar />,
  },
  { name: "Posty", href: "/application/posts", icon: <HiSquare2Stack /> },
  { name: "Pliki", href: "/application/files", icon: <HiArchiveBox /> },
];
const mobileNav =
  "2xs:fixed 2xs:top-0 2xs:left-0 2xs:w-full 2xs:flex 2xs:h-full 2xs:justify-center 2xs:items-center 2xs:bg-[rgb(229,231,235,0.3)] 2xs:dark:bg-[rgba(0,0,0,0.3)] 2xs:backdrop-blur-sm z-20 xl:static xl:justify-start xl:items-start xl:bg-gray-100 xl:dark:bg-gray-900 invisible xl:visible xl:w-fit ";

function AppNav() {
  function handleNav() {
    document.querySelector(".mobileNav").classList.add("invisible");
  }

  return (
    <>
      <ul
        className={`${mobileNav} border-r border-gray-200 py-4 px-6 dark:border-gray-800 mobileNav transition-all duration-200`}
      >
        <div className="flex flex-col 2xs:gap-8">
          <button
            className="xl:hidden absolute right-0 top-0 p-4"
            onClick={handleNav}
          >
            <HiXMark className="w-8 h-8" />
          </button>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              name={link.name}
              href={link.href}
              icon={link.icon}
              onClick={handleNav}
            />
          ))}
        </div>
      </ul>
    </>
  );
}

export default AppNav;
