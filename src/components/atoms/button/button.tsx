import { HTMLAttributes } from 'react';
import { cva } from '@styled-system/css';

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
		fontWeight: '600',
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
			},
		},
		shape: {
			pill: { borderRadius: '9999px' },
			rounded: { borderRadius: '8px' },
			square: { borderRadius: '0px' },
		},
		size: {
			sm: {
				h: '32px',
				minW: '32px',
				fontSize: '14px',
				'&:has(span)': { p: '12px' },
				'& svg': { w: '16px', h: '16px' },
			},
			md: {
				h: '40px',
				minW: '40px',
				fontSize: '16px',
				'&:has(span)': { p: '14px' },
				'& svg': { w: '20px', h: '20px' },
			},
			lg: {
				h: '48px',
				minW: '48px',
				fontSize: '18px',
				'&:has(span)': { p: '16px' },
				'& svg': { w: '24px', h: '24px' },
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
	return (
		<button
			className={buttonStyles({
				variant,
				shape,
				size,
			})}
			{...rest}
		>
			{icon && <div>{icon}</div>}
			{children && <span>{children}</span>}
		</button>
	);
};
