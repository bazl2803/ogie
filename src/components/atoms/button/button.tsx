'use client'
import React from 'react'
import clsx from 'clsx'
import { cva } from 'class-variance-authority'
import './button.scss'

const buttonStyles = cva('button', {
	variants: {
		variant: {
			subtle: 'button--subtle',
			filled: 'button--filled',
			outline: 'button--outline',
			ghost: 'button--ghost',
		},
		size: {
			small: 'button--small',
			medium: 'button--medium',
			large: 'button--large',
			'icon-sm': 'button--icon-sm',
			'icon-md': 'button--icon-md',
			'icon-lg': 'button--icon-lg',
		},
		rounded: {
			none: '',
			sm: 'button--rounded-sm',
			md: 'button--rounded-md',
			lg: 'button--rounded-lg',
			xl: 'button--rounded-xl',
			full: 'button--rounded-full',
		},
		fullWidth: {
			true: 'button--full-width',
		},
	},
	defaultVariants: {
		variant: 'subtle',
		size: 'medium',
		fullWidth: false,
		rounded: 'full',
	},
})

export function Button({
	children,
	className,
	variant,
	size,
	fullWidth,
	rounded,
	...props
}: React.ComponentPropsWithRef<'button'> & {
	variant?: 'subtle' | 'filled' | 'outline' | 'ghost'
	size?: 'small' | 'medium' | 'large' | 'icon-sm' | 'icon-md' | 'icon-lg'
	fullWidth?: boolean
	rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}) {
	const classes = buttonStyles({
		variant,
		size,
		fullWidth,
		rounded,
	})
	return (
		<button
			{...props}
			className={clsx(classes, className)}
		>
			{children}
		</button>
	)
}
