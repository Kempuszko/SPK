"use client";

import { Toaster, resolveValue } from "react-hot-toast";
import { HiMiniShieldExclamation, HiOutlineCheckCircle } from "react-icons/hi2";

function CustomToast() {
  return (
    <Toaster position="bottom-right" toastOptions={{ duration: 2000 }}>
      {(t) => (
        <div
          className={`flex items-center gap-2 dark:bg-blue-950 bg-amber-200 border border-amber-300 dark:border-blue-800 px-3 py-2 shadow-md rounded-full ${
            t.visible ? "animate-enter" : "animate-leave"
          }`}
        >
          {t.type === "error" ? (
            <HiMiniShieldExclamation
              className="text-red-500 shrink-0"
              size={28}
            />
          ) : (
            <HiOutlineCheckCircle
              className="text-green-600 shrink-0"
              size={28}
            />
          )}

          <p className="font-semibold text-sm">{resolveValue(t.message, t)}</p>
        </div>
      )}
    </Toaster>
  );
}

export default CustomToast;
