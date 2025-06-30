import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { auth } from "../_lib/auth";
import DarkModeButton from "./DarkModeButton";
import Logo from "./Logo";

import { signOutAction } from "../_lib/actions";
import OpenMenu from "./OpenMenu";

async function AppHeader() {
  const session = await auth();

  return (
    <header className="border-b border-gray-200 2xs:p-2 md:py-3 md:px-6  2xl:py-4 2xl:px-8  dark:border-gray-800 transition-[border]">
      <div className="flex justify-between items-center ">
        <Logo />
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img
              src={session.user.image}
              className="2xs:w-8 md:w-9 2xl:w-10 rounded-full"
            />
            <span className="2xs:hidden xs:block">{session.user.name}</span>
          </div>
          <DarkModeButton />
          <form action={signOutAction} className="flex items-center">
            <button className="transition-[background-color,_box-shadow] rounded-md focus:ring-4 dark:ring-blue-800 outline-none focus:outline-none ring-amber-300">
              <HiArrowRightOnRectangle className="2xs:h-6 2xs:w-6 xs:w-7 xs:h-7 md:h-8 md:w-8 xl:h-9 xl:w-9 cursor-pointer dark:text-gray-200 text-gray-800 " />
            </button>
          </form>
          <OpenMenu />
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
