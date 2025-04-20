import { cva } from '@styled-system/css';
import React from 'react';

const SIZES = ['7xl', '6xl', '5xl', '4xl', '3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs'] as const;
type Size = typeof SIZES[number];

interface DisplayProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: Size;
}

const DisplayStyles = cva({
	base: {
		fontFamily: 'inter',
		fontWeight: '800',
		lineHeight: 'tight',
	},
	variants: {
		size: Object.fromEntries(
			SIZES.map(size => [size, { fontSize: size }])
		),
	},
	defaultVariants: {
		size: 'xl',
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
