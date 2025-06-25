"use client";

import { useState } from "react";

export function useDarkHook() {
  const [isDark, setIsDark] = useState(true);

  function handleIsDark() {
    setIsDark((b) => !b);
  }

  return [isDark, handleIsDark];
}
