import { cva } from '@styled-system/css';
import React from 'react';

interface DisplayProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

const DisplayStyles = cva({
	base: {
		fontFamily: 'inter',
		fontWeight: '800',
		lineHeight: 'tight',
	},
	variants: {
		size: {
			'4xl': { fontSize: '2rem' },
			'3xl': { fontSize: '1.786rem' },
			'2xl': { fontSize: '1.571rem' },
			xl: { fontSize: '1.357rem' },
			lg: { fontSize: '1.143rem' },
			md: { fontSize: '1rem' },
			sm: { fontSize: '0.857rem' },
			xs: { fontSize: '0.714rem' },
		},
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
