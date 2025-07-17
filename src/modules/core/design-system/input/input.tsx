import React from 'react';
import { sva } from '@styled-system/css';

type InputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	variant?: 'filled' | 'outlined';
	shape?: 'rounded' | 'square' | 'pill';
	leftSlot?: React.ReactNode;
	rightSlot?: React.ReactNode;
};

const InputStyles = sva({
	className: 'lukas-input',
	slots: ['root', 'leftSlot', 'rightSlot', 'input'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'nowrap',
			alignItems: 'center',
			gap: 4,
			borderRadius: 'md',
			paddingY: '2',
            paddingX: '3',
            fontSize: 'base',
		},
		input: {
			outline: 'none',
			width: 'full',
		},
	},
	variants: {
		variant: {
			filled: {
				root: {
					backgroundColor: 'gray.100',
				},
			},
		},
		shape: {
			rounded: { root: { borderRadius: 'lg' } },
			square: { root: { borderRadius: 'none' } },
			pill: { root: { borderRadius: '9999px' } },
		},
	},
	defaultVariants: {
		variant: 'filled',
        shape: 'rounded',
	},
});

export const Input = ({ leftSlot, rightSlot, ...props }: InputProps) => {
	const styles = InputStyles();

	return (
		<div className={styles.root}>
			{leftSlot && <div className={styles.leftSlot}>{leftSlot}</div>}
			<input
				className={styles.input}
				{...props}
			/>
			{rightSlot && <div className={styles.rightSlot}>{rightSlot}</div>}
		</div>
	);
};
