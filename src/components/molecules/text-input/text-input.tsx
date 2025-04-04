import React from 'react';
import { sva } from '@styled-system/css';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	leftSlot?: React.ReactNode;
	rightSlot?: React.ReactNode;
}

const TextInputStyles = sva({
	slots: ['root', 'slot', 'input'],
	base: {
		root: {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'row',
			flexWrap: 'nowrap',
			backgroundColor: 'gray.50',
			paddingInline: 4,
			paddingBlock: 2,
			outline: 'none',
			borderRadius: 'lg',
			gap: 4,
			color: 'neutral.400',
			'&:focus-within': {
				color: 'neutral.600',
			},
		},
		input: {
			width: 'full',
			border: 'none',
			outline: 'none',
			fontSize: '1rem',
			'&::placeholder': {
				color: 'neutral.400',
			},
		},
		slot: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			'& svg': {
				width: '1rem',
				height: '1rem',
			},
		},
	},
});

export const TextInput: React.FC<TextInputProps> = ({
	className,
	leftSlot,
	rightSlot,
	...props
}) => {
	const classes = TextInputStyles();

	return (
		<div className={`${classes.root} ${className}`}>
			<div className={classes.slot}>{leftSlot}</div>
			<div className={classes.slot}>
				<input
					className={classes.input}
					type="text"
					{...props}
				/>
			</div>
			<div className={classes.slot}>{rightSlot}</div>
		</div>
	);
};
