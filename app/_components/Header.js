import DarkModeButton from "./DarkModeButton";
import LoginButton from "./LoginButton";
import Logo from "./Logo";

function Header() {
  return (
    <header className="2xs:p-2 sm:py-3 sm:px-4 2xl:py-4 2xl:px-8 border-b border-gray-200 dark:border-gray-800 transition-[border-color]">
      <div className="2xl:max-w-[100rem] flex justify-between items-center mx-auto">
        <Logo />
        <div className="2xs:gap-2 sm:gap-3 md:gap-5 xl:gap-6 2xl:gap-8 flex items-center justify-between">
          <DarkModeButton />
          <LoginButton>Zaloguj się</LoginButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
