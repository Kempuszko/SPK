import { signInAction } from "../_lib/actions";

function LoginButton({ children }) {
  const responsive =
    "2xs:text-sm 2xs:px-2 2xs:py-1 2xs:font-semibold xs:text-[1rem] xs:px-3 xs:py-2 sm:px-4 sm:py-3 sm:text-base xl:text-xl xl:px-6 xl:py-4 2xl:px-8 2xl:py-4 xl:tracking-wider 2xl:font-bold 2xl:focus:ring-4";

  return (
    <form action={signInAction}>
      <button
        className={` ${responsive}
      bg-amber-200 text-gray-800 rounded-4xl uppercase cursor-pointer hover:bg-amber-300 transition-all shadow dark:bg-blue-900 dark:text-gray-100 dark:hover:bg-blue-700 dark:ring-blue-800 ring-amber-300 outline-none focus:outline-none`}
      >
        {children}
      </button>
    </form>
  );
}

export default LoginButton;
