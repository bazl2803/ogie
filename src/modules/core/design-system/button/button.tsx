/* ----------------------------------------------------------------
 *	Dependencies
-----------------------------------------------------------------*/

'use client';
import React, { HTMLAttributes } from 'react';
import { cva } from '@styled-system/css';
import clsx from 'clsx';

/* ----------------------------------------------------------------
 *	Props
-----------------------------------------------------------------*/

interface ButtonProps
    extends HTMLAttributes<HTMLButtonElement> {
    ref?: React.Ref<HTMLButtonElement>;
    variant?:
        | 'primary'
        | 'secondary'
        | 'outline'
        | 'ghost'
        | 'text';
    shape?: 'pill' | 'rounded' | 'square';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

/* ----------------------------------------------------------------
 *	Styles
-----------------------------------------------------------------*/

const buttonStyles = cva({
    base: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        fontWeight: '500',
        columnGap: '8px',
    },
    variants: {
        variant: {
            primary: {
                color: 'white',
                bg: 'neutral.950',
            },
            secondary: {
                color: 'neutral.950',
                bg: 'neutral.100',
            },
            outline: {
                color: 'neutral.950',
                bg: 'white',
                border: '1px solid',
                borderColor: 'neutral.100',
            },
            ghost: {
                color: 'neutral.950',
                bg: 'transparent',
            },
            text: {
                color: 'inherit',
                bg: 'transparent',
                border: 'none',
                padding: '0 !important',
            },
        },
        shape: {
            pill: { borderRadius: '9999px' },
            rounded: { borderRadius: '8px' },
            square: { borderRadius: '0px' },
        },
        size: {
            sm: {
                h: '2rem',
                minW: '2rem',
                fontSize: '1rem',
                '&:has(span)': { p: '12px' },
                '& svg': { w: '1rem', h: '1rem' },
            },
            md: {
                h: '2.5rem',
                minW: '2.5rem',
                fontSize: '16px',
                '&:has(span)': { p: '14px' },
                '& svg': { w: '1.25rem', h: '1.25rem' },
            },
            lg: {
                h: '3rem',
                minW: '3rem',
                fontSize: '18px',
                '&:has(span)': { p: '16px' },
                '& svg': { w: '1.5rem', h: '1.5rem' },
            },
        },
        fullWidth: {
            true: {
                w: 'full',
            },
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
});

/* ----------------------------------------------------------------
 *	Component
-----------------------------------------------------------------*/
export const Button: React.FC<ButtonProps> = ({
                                                  icon,
                                                  children,
                                                  className,
                                                  variant,
                                                  shape,
                                                  size,
                                                  fullWidth,
                                                  ...rest
                                              }) => {
    const classes = clsx(
        buttonStyles({
            variant,
            shape,
            size,
            fullWidth,
        }),
        className
    );

    return (
        <button
            className={classes}
            {...rest}
        >
            {icon && <div>{icon}</div>}
            {children && <span>{children}</span>}
        </button>
    );
};
