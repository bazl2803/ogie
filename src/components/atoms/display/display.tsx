import { cva } from '@styled-system/css';
import React from 'react';

interface DisplayProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: 'large' | 'huge';
}

const DisplayStyles = cva({
	base: {
		fontFamily: 'inter',
		fontWeight: '800',
		lineHeight: 'tight',
	},
	variants: {
		size: {
			huge: { fontSize: '2rem' },
			large: { fontSize: '1.786rem' },
			
		},
	},
	defaultVariants: {
		size: 'large',
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
