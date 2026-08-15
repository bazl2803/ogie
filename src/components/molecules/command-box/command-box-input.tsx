"use client";
import { Command } from "cmdk";
import React from "react";
import { useCommandBoxContext } from "./command-box-context";

interface CommandBoxInputProps
  extends React.ComponentPropsWithoutRef<typeof Command.Input> {
  ref?: React.Ref<React.ComponentRef<typeof Command.Input>>;
}

export const CommandBoxInput: React.FC<CommandBoxInputProps> = ({
  ref,
  onKeyDown,
  onValueChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const { isOpen, setIsOpen } = useCommandBoxContext();
  return (
    <Command.Input
      {...props}
      ref={ref}
      className="command-box-input"
      onValueChange={(value) => {
        setIsOpen(value.length > 0);
        onValueChange?.(value);
      }}
      onFocus={(e) => {
        if (e.currentTarget.value.length > 0) setIsOpen(true);
        onFocus?.(e);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && isOpen) {
          e.stopPropagation();
          setIsOpen(false);
        }
        onKeyDown?.(e);
      }}
      onBlur={(e) => {
        if (e.currentTarget.value.length === 0) setIsOpen(false);
        onBlur?.(e);
      }}
    />
  );
};
