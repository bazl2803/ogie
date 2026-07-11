import React from 'react'
import clsx from 'clsx'
import { cva } from 'class-variance-authority'
import './container.scss'

const containerStyles = cva('container', {
	variants: {
		size: {
			sm: 'container--sm',
			md: 'container--md',
			lg: 'container--lg',
			xl: 'container--xl',
			'2xl': 'container--2xl',
			full: 'container--full',
			responsive: 'container--responsive',
		},
	},
	defaultVariants: {
		size: 'responsive',
	},
})

export function Container({
	children,
	className,
	size,
	as: Component = 'div',
	...props
}: React.ComponentPropsWithRef<'div'> & {
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'responsive'
	as?: React.ElementType
}) {
	const classes = containerStyles({ size })
	return (
		<Component
			{...props}
			className={clsx(classes, className)}
		>
			{children}
		</Component>
	)
}
