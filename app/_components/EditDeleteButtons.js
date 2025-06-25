"use client";

import toast from "react-hot-toast";

function EditDeleteButtons({ children, onClick, data }) {
  return (
    <button
      className="cursor-pointer hover:text-gray-500 pl-2 transition-all duration-200"
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
