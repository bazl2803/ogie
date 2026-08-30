
import React from "react";
import clsx from "clsx";
import { DropdownContext, useDropdown } from "./dropdown.context";


const DropdownRoot: React.FC<{
    open?: boolean;
} & React.ComponentPropsWithRef<"div">> = (props) => {
    const { children, className, open: openProp, ...rest } = props;

    const [open, setOpen] = React.useState(false);

    return (
        <DropdownContext.Provider value={{
            open: openProp ?? open,
            setOpen: (open) => {
                if (openProp === undefined) {
                    setOpen(open);
                }
            },
        }}>
            <div className={clsx(
                "dropdown",
                className
            )} {...rest}>{children}</div>
        </DropdownContext.Provider>
    );
};

export const DropdownTrigger: React.FC<{
} & React.ComponentPropsWithRef<"div">> = (props) => {
    const { children, className, ...rest } = props;

    const { open, setOpen } = useDropdown();

    return (
        <div
            className={clsx(
                "dropdown__trigger",
                className
            )}
            {...rest}
            onClick={() => setOpen(!open)}
        >
            {children}
        </div>
    );
};

export const DropdownContent: React.FC<{
} & React.ComponentPropsWithRef<"div">> = (props) => {
    const { children, className, ...rest } = props;

    const { open, setOpen } = useDropdown();

    if (!open) return null;

    return (
        <div
            className={clsx(
                "dropdown__content",
                className
            )}
            {...rest}
            onClick={() => setOpen(false)}
        >
            {children}
        </div>
    );
};

export const DropdownItem: React.FC<{
} & React.ComponentPropsWithRef<"div">> = (props) => {
    const { children, className, ...rest } = props;

    const { setOpen } = useDropdown();

    return (
        <div
            className={clsx(
                "dropdown__item",
                className
            )}
            {...rest}
            onClick={() => setOpen(false)}
        >
            {children}
        </div>
    );
};

export const Dropdown = Object.assign(DropdownRoot, {
    Trigger: DropdownTrigger,
    Content: DropdownContent,
    Item: DropdownItem,
})