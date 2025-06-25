"use client";

import { useFormStatus } from "react-dom";

function Button({ children, type, onClick = null, fileName = "" }) {
  const commonStyles =
    "focus:ring-4 dark:ring-blue-800 ring-amber-300 outline-none focus:outline-none bg-amber-200 border-amber-300 dark:bg-blue-950 border dark:border-blue-800border dark:border-blue-800 font-semibold transition-all duration-200 hover:bg-amber-300 hover:dark:bg-blue-900 cursor-pointer";

  async function handleFiles(fileName) {
    const link = await onClick(fileName);
    window.open(link);
  }

  if (type === "download")
    return (
      <button
        onClick={() => handleFiles(fileName)}
        type={type}
        className={`${commonStyles} 2xs:p-1 2xl:p-2 rounded-full`}
      >
        {children}
      </button>
    );

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${commonStyles} px-4 py-2 rounded-2xl w-32`}
    >
      {children}
    </button>
  );
}

export default Button;
