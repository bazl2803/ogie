"use client";
import React from "react";

interface CommandBoxInputWrapperProps
  extends React.ComponentPropsWithRef<"div"> {}

export const CommandBoxInputWrapper: React.FC<CommandBoxInputWrapperProps> = (
  props,
) => {
  return <div {...props} className="command-box-input-wrapper" />;
};
