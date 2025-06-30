"use client";

import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

function Button({
  children,
  type,
  onClick = null,
  fileName = "",
  pendingMessage = "",
}) {
  const commonStyles =
    "focus:ring-4 dark:ring-blue-800 ring-amber-300 outline-none focus:outline-none bg-amber-200 border-amber-300 dark:bg-blue-950 border dark:border-blue-800 font-semibold transition-[background-color,_box-shadow,_border] hover:bg-amber-300 hover:dark:bg-blue-900 cursor-pointer disabled:cursor-not-allowed disabled:bg-amber-300 disabled:dark:bg-blue-900";

  const { pending } = useFormStatus();

  async function handleFiles(fileName) {
    if (type === "download") {
      const link = await onClick(fileName);
      window.open(link);
      toast.success("Pomyslnie pobrano");
    }
    if (type === "delete") {
      onClick(fileName);
      toast.success("Pomyslnie usunieto");
    }
  }

  if (type === "download" || type === "delete")
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
      disabled={pending}
    >
      {pending ? pendingMessage : children}
    </button>
  );
}

export default Button;
