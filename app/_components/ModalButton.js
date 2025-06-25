"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function ModalButton({
  children,
  userId,
  className = "",
  text,
  data,
  type,
}) {
  const [isShowing, setIsShowing] = useState(false);

  function handleModal() {
    setIsShowing(false);
  }

  return (
    <>
      <button
        className={
          !className
            ? "px-4 py-2 bg-amber-200 border-amber-300 dark:bg-blue-950 rounded-2xl border dark:border-blue-800 w-32 font-semibold transition-all duration-200 hover:bg-amber-300 hover:dark:bg-blue-900 cursor-pointer focus:ring-4 dark:ring-blue-800 ring-amber-300 outline-none focus:outline-none"
            : className
        }
        onClick={() => setIsShowing(true)}
      >
        {children}
      </button>
      {isShowing && (
        <Modal
          type={type}
          onClose={handleModal}
          userId={userId}
          text={text}
          data={data}
        />
      )}
    </>
  );
}
