"use client";

import React from "react";
import clsx from "clsx";
import { cva } from "class-variance-authority";
import "./kbd.scss";

const kbdStyles = cva("kbd", {
  variants: {
    size: {
      sm: "kbd--sm",
      md: "kbd--md",
      lg: "kbd--lg",
    },
    rounded: {
      none: "kbd--rounded-none",
      sm: "kbd--rounded-sm",
      md: "kbd--rounded-md",
      lg: "kbd--rounded-lg",
      full: "kbd--rounded-full",
    },
  },
  defaultVariants: {
    size: "md",
    rounded: "md",
  },
});

export interface KbdProps extends React.ComponentPropsWithRef<"kbd"> {
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
}

export function Kbd({
  children,
  className,
  size,
  rounded,
  ...props
}: KbdProps) {
  const classes = kbdStyles({
    size,
    rounded,
  });

  return (
    <kbd {...props} className={clsx(classes, className)}>
      {children}
    </kbd>
  );
}
