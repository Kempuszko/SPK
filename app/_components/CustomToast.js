"use client";

import { Toaster } from "react-hot-toast";
import { HiMiniShieldExclamation, HiOutlineCheckCircle } from "react-icons/hi2";

function CustomToast() {
  return (
    <Toaster position="bottom-right" toastOptions={{ duration: 2000 }}>
      {(t) => {
        return (
          <div
            className={`flex items-center gap-2 dark:bg-blue-950 bg-amber-200 border border-amber-300 dark:border-blue-800 px-3 py-2 shadow-md rounded-full ${
              t.visible ? "animate-enter" : "animate-leave"
            }`}
          >
            {t.message === "Wybierz dzień" ? (
              <HiMiniShieldExclamation className="text-red-500" size={32} />
            ) : (
              <HiOutlineCheckCircle className="text-green-600" size={32} />
            )}
            <p className="font-semibold text-sm">{t.message}</p>
          </div>
        );
      }}
    </Toaster>
  );
}

export default CustomToast;
