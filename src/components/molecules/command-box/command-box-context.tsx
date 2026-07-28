"use client";

import { createContext, useContext } from "react";

interface CommandBoxContextValue {
  loop: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const CommandBoxContext = createContext<CommandBoxContextValue | null>(
  null,
);

export const useCommandBoxContext = () => {
  const context = useContext(CommandBoxContext);
  if (!context) {
    throw new Error("useCommandBoxContext must be used within a CommandBox");
  }
  return context;
};
