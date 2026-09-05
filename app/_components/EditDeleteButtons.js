"use client";

import toast from "react-hot-toast";

function EditDeleteButtons({ children, onClick, data }) {
  async function handleClick() {
    try {
      await onClick(data);
      toast.success("Pomyślnie usunięto");
    } catch (error) {
      console.error(error);
      toast.error("Wystąpił błąd podczas usuwania");
    }
  }

  return (
    <button
      type="button"
      className="cursor-pointer hover:text-gray-500 transition-[background-color,_box-shadow] rounded-md focus:ring-4 dark:ring-blue-800 outline-none focus:outline-none ring-amber-400"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default EditDeleteButtons;
