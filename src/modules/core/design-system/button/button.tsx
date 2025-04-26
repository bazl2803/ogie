import { HTMLAttributes } from 'react';
import { cva } from '@styled-system/css';
import clsx from 'clsx';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	ref?: React.Ref<HTMLButtonElement>;
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'text';
	shape?: 'pill' | 'rounded' | 'square';
	size?: 'sm' | 'md' | 'lg';
	icon?: React.ReactNode;
	children?: string;
}

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
				color: 'neutral.950',
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
				fontSize: '14px',
				'&:has(span)': { p: '12px' },
				'& svg': { w: '1rem', h: '1rem' },
			},
			md: {
				h: '2.5rem',
				minW: '2.5rem',
				fontSize: '16px',
				'&:has(span)': { p: '14px' },
				'& svg': { w: '1.25rem', h: '1rem' },
			},
			lg: {
				h: '3rem',
				minW: '3rem',
				fontSize: '18px',
				'&:has(span)': { p: '16px' },
				'& svg': { w: '1.5rem', h: '1.5rem' },
			},
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'md',
	},
});

export const Button: React.FC<ButtonProps> = ({
	icon,
	children,
	className,
	variant,
	shape,
	size,
	...rest
}) => {
	const classes = clsx(
		buttonStyles({
			variant,
			shape,
			size,
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
