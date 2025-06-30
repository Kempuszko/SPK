"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ name, href, icon, onClick }) {
  const pathname = usePathname();

  return (
    <Link
      className={`focus:ring-4 dark:ring-blue-800 ring-amber-300 outline-none focus:outline-none hover:bg-amber-200 dark:hover:bg-blue-950 transition-[background-color] py-2 px-6 rounded-sm ${
        pathname === href ? "bg-amber-200 dark:bg-blue-950" : ""
      }`}
      href={href}
      onClick={onClick}
    >
      <span className="flex gap-4 items-center text-xl w-full">
        {icon}
        {name}
      </span>
    </Link>
  );
}

export default NavLink;
