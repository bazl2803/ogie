"use client";

import clsx from "clsx";
import { Command } from "cmdk";

interface CommandBoxGroupProps
  extends React.ComponentPropsWithRef<typeof Command.Group> {}

export const CommandBoxGroup: React.FC<CommandBoxGroupProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Command.Group {...props} className={clsx("command-box-group", className)}>
      {children}
    </Command.Group>
  );
};
