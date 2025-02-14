import React from 'react';
import { cva } from '@styled-system/css';

/**
 * Types
 */
type TitleVariant =
	| 'display-large'
	| 'display-medium'
	| 'display-small'
	| 'title-large'
	| 'title-medium'
	| 'title-small'
	| 'subtitle';

const titleTagsMap: Record<TitleVariant, keyof React.JSX.IntrinsicElements> = {
	'display-large': 'h1',
	'display-medium': 'h2',
	'display-small': 'h3',
	'title-large': 'h4',
	'title-medium': 'h5',
	'title-small': 'h6',
	subtitle: 'span',
};

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	variant?: TitleVariant;
}

/**
 * Styles
 */
const TitleStyles = cva({
	base: {
		color: 'neutral.800',
		fontFamily: 'inter',
		fontWeight: '700',
	},
	variants: {
		variant: {
			'display-large': {
				fontSize: { base: '4xl', md: '5xl' },
				fontWeight: '800',
			},
			'display-medium': {
				fontSize: { base: '3xl', md: '4xl' },
				fontWeight: '700',
			},
			'display-small': {
				fontSize: { base: '2xl', md: '3xl' },
				fontWeight: '700',
			},
			'title-large': {
				fontSize: { base: 'xl', md: '2xl' },
			},
			'title-medium': {
				fontSize: { base: 'lg', md: 'xl' },
			},
			'title-small': {
				fontSize: { base: 'md', md: 'lg' },
			},
			subtitle: {
				fontSize: { base: 'sm', md: 'md' },
				fontWeight: '400',
			},
		},
	},
	defaultVariants: {
		variant: 'title-small',
	},
});

/**
 * Title Component
 */
export const Title: React.FC<TitleProps> = ({
	className,
	variant = 'title-small',
	children,
	...props
}) => {
	const Tag = titleTagsMap[variant!];

	return React.createElement(
		Tag,
		{ className: `${TitleStyles({ variant })} ${className}`, ...props },
		children
	);
};
