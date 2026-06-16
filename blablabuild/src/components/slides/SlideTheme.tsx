"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { SlideVariant } from "@/lib/types";

const SlideThemeContext = createContext<SlideVariant>("light");

export function SlideThemeProvider({
  variant,
  children,
}: {
  variant: SlideVariant;
  children: ReactNode;
}) {
  return (
    <SlideThemeContext.Provider value={variant}>
      {children}
    </SlideThemeContext.Provider>
  );
}

export function useSlideTheme() {
  return useContext(SlideThemeContext);
}
