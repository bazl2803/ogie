import React from "react";
import "./input.scss";
import { cva } from "class-variance-authority";

/* ---------------------------
   Types
--------------------------- */
type InputVariants = "subtle" | "outline" | "none";

export interface InputProps {
  variant?: InputVariants;
}

const InputVariants = cva("input", {
  variants: {
    variant: {
      subtle: "input--subtle",
      outline: "input--outline",
      none: "input--none",
    },
  },
});

/* ---------------------------
   Input
--------------------------- */
export function Input(
  props: InputProps & React.ComponentPropsWithRef<"input">,
) {
  const { variant, ...rest } = props;
  return <input {...rest} className={InputVariants({ variant })} />;
}

/* ---------------------------
   Input Group (root)
--------------------------- */
interface InputGroupProps
  extends InputProps,
    React.ComponentPropsWithRef<"div"> {}

const InputGroupVariants = cva("input__group", {
  variants: {
    variant: {
      subtle: "input__group--subtle",
      outline: "input__group--outline",
      none: "input__group--none",
    },
  },
});

export function InputGroup(props: InputGroupProps) {
  const { variant, ...rest } = props;
  return <div {...rest} className={InputGroupVariants({ variant })} />;
}

/* ---------------------------
   Input Group Input
--------------------------- */
InputGroup.Input = function InputGroupInput(
  props: React.ComponentPropsWithRef<"input">,
) {
  return <Input {...props} variant={"none"} />;
};

/* ---------------------------
   Input Group Addon
--------------------------- */
InputGroup.Addon = function InputGroupAddon({
  children,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div className="input__addon" {...props}>
      {children}
    </div>
  );
};
