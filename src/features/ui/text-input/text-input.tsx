import React from "react";
import { css } from '@styled-system/css';

interface TextInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    leftSlot?: React.ReactNode
    rightSlot?: React.ReactNode
}

const TextInputStyles = css({
    backgroundColor: 'neutral.50/0',
    padding: '8 12',
    outline: '1px solid',
    outlineColor: 'neutral.200',
    borderRadius: 'lg',
});

export const TextInput: React.FC<TextInputProps> = ({ className, ...props }) => {
    return (
        <div className={`${TextInputStyles} ${className}`}>
            <input type="text" {...props} />
        </div>
    );
};
