import { cva } from '@styled-system/css';
import React from 'react';

interface DisplayProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: 'large' | 'huge';
}

const DisplayStyles = cva({
	base: {
		fontFamily: 'inter',
		fontWeight: '800',
		fontSize: '2.25rem',
	},
	variants: {
		size: {
			huge: { fontSize: '2.875rem' },
			large: { fontSize: '2.563rem' },
		},
	},
});

export const Display: React.FC<DisplayProps> = ({
	className,
	size,
	...rest
}) => {
	return (
		<div
			className={`${className} ${DisplayStyles({ size })}`}
			{...rest}
		/>
	);
};
