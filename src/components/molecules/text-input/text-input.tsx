import React from 'react';
import { sva } from '@styled-system/css';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	leftSlot?: React.ReactNode;
	rightSlot?: React.ReactNode;
}

const TextInputStyles = sva({
	slots: ['root', 'slot', 'input', 'inputSlot'],
	base: {
		root: {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'row',
			flexWrap: 'nowrap',
			backgroundColor: 'white',
			paddingInline: 4,
			paddingBlock: 2,
			outline: '1px solid',
			outlineColor: 'neutral.200',
			borderRadius: 'lg',
			gap: 4,
			color: 'neutral.400',
			'&:focus-within': {
				color: 'neutral.600',
			},
		},
		input: {
			border: 'none',
			outline: 'none',
			width: '100%',
			'&::placeholder': {
				color: 'neutral.400',
			},
		},
		inputSlot: {
			flexGrow: 1,
			flexShrink: 1,
		},
		slot: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			'& svg': {
				width: 4,
				height: 4,
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
			<div className={classes.inputSlot}>
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
