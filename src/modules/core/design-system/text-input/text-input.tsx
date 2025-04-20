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
			paddingInline: '12px',
			outline: 'none',
			borderRadius: 'xl',
			gap: '8px',
			color: 'neutral.400',
			transition: 'color 0.2s ease-in-out',
			'&:focus-within': {
				color: 'neutral.600',
			},
		},
		input: {
			width: 'full',
			border: 'none',
			outline: 'none',
			fontSize: '1rem',
			transition: 'color 0.2s ease-in-out',
			_placeholder: {
				color: 'neutral.400',
			},
			_focus: {
				_placeholder: {
					color: 'neutral.600',
				}
			}
		},
		slot: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			'& svg': {
				width: '1.1rem',
				height: '1.1rem',
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
