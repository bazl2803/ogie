'use client'
import React, { useState } from 'react';

type DialogProps = React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;

const DialogContext = React.createContext<{
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    open: false,
    setOpen: () => {
    },
});

const Dialog = (props: DialogProps) => {
    const [open, setOpen] = useState(false);

    return (
        <DialogContext.Provider value={{ open, setOpen }}>
            <dialog {...props} />
        </DialogContext.Provider>
    );
}

const Trigger = ({ children }: { children: React.ReactNode }) => {
    const context = React.useContext(DialogContext);

    return <div onClick={() => context.setOpen(true)}>{children}</div>;
};

const Content = ({ children }: { children: React.ReactNode }) => {
    const context = React.useContext(DialogContext);

    return (
        <div>
            {children}
            <button onClick={() => context.setOpen(false)}>Close</button>
        </div>
    );
};

Dialog.Root = Dialog;
Dialog.Trigger = Trigger;
Dialog.Content = Content;

export { Dialog };
