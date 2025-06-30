"use client";

import toast from "react-hot-toast";

function EditDeleteButtons({ children, onClick, data }) {
  return (
    <button
      className="cursor-pointer hover:text-gray-500 transition-[background-color,_box-shadow] rounded-md focus:ring-4 dark:ring-blue-800 outline-none focus:outline-none ring-amber-400"
      onClick={() => {
        onClick(data);
        toast.success("Pomyslnie usunieto");
      }}
    >
      {children}
    </button>
  );
}

export default EditDeleteButtons;
