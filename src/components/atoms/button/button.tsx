import { HTMLAttributes } from 'react';
import { cva } from '@styled-system/css';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	ref?: React.Ref<HTMLButtonElement>;
	shape?: 'pill' | 'rounded' | 'square';
	size?: 'sm' | 'md' | 'lg';
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'text';
}

const buttonStyles = cva({
	base: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
		outline: 'none',
		background: 'none',
		fontWeight: 'semibold',
		textWrap: 'nowrap',
	},
	variants: {
		shape: {
			rounded: {
				borderRadius: 'lg',
			},
			pill: {
				borderLeftRadius: 'full',
				borderRightRadius: 'full',
			},
			square: {},
		},
		size: {
			sm: {
				height: '36px',
				fontSize: '14px',
				paddingInline: '10px',
				gap: '6px',
				'& svg': {
					width: '8px',
					height: '16px',
					fontSize: '16px',
				},
			},
			md: {
				height: '40px',
				fontSize: '16px',
				paddingInline: '12px',
				gap: '8px',
				'& svg': {
					width: '20px',
					height: '20px',
				},
			},
			lg: {
				height: '56px',
				fontSize: '18px',
				paddingInline: '20px',
				gap: '8px',
				'& svg': {
					width: '24px',
					height: '24px',
				},
			},
		},
		variant: {
			primary: {
				backgroundColor: 'black',
				color: 'white',
			},
			secondary: {
				backgroundColor: 'neutral.50',
				outline: '1px solid',
				outlineColor: 'neutral.200',
				_hover: { backgroundColor: 'neutral.100' },
				_active: { backgroundColor: 'neutral.200' },
			},
			outline: {
				outline: '1px solid',
				outlineColor: 'neutral.950',
				color: 'neutral.950',
			},
			ghost: {
				backgroundColor: 'transparent',
				color: 'neutral.950',
				_hover: {
					backgroundColor: 'neutral.100',
				},
			},
			text: {},
		},
	},
	defaultVariants: {
		variant: 'primary',
		shape: 'rounded',
		size: 'md',
	},
});

export const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button
			className={buttonStyles({
				variant: props.variant,
				shape: props.shape,
				size: props.size,
			})}
			ref={props.ref}
			{...props}
		/>
	);
};
