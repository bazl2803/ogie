/* ----------------------------------------------------------------
 *	Dependencies
-----------------------------------------------------------------*/

'use client';
import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { ButtonStyles } from './button.styles';

/* ----------------------------------------------------------------
 *	Props
-----------------------------------------------------------------*/

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	ref?: React.Ref<HTMLButtonElement>;
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'text';
	shape?: 'pill' | 'rounded' | 'square';
	size?: 'sm' | 'md' | 'lg';
	fullWidth?: boolean;
	icon?: React.ReactNode;
	children?: React.ReactNode;
}

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
		ButtonStyles({
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
