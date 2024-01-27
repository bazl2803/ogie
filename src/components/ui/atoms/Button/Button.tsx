'use client'

/**
 * Dependencies
 */
import './.Button.scss';

import clsx from 'clsx';
import React from 'react';
import { Button as AriaButton, ButtonProps } from 'react-aria-components';

/**
 * Props
 */
interface IButtonProps extends ButtonProps {
	className?: string
	children?: React.ReactNode
	color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
	disabled?: boolean
	leftSide?: React.ReactNode
	rightSide?: React.ReactNode
	shape?: 'rounded' | 'pill'
	size?: 'small' | 'medium' | 'large'
	variant?: 'filled' | 'outline' | 'tonal' | 'text'
}

/**
 * Represents a standard button element with various props for customization.
 */
export function Button({
	children,
	className,
	color,
	shape,
	size,
	leftSide,
	rightSide,
	variant,
	...props
}: IButtonProps) {
	// Classnames Variance
	const ButtonClasses = clsx('Button', {
		[`Button-color-${color}`]: color,
		[`Button-shape-${shape}`]: shape,
		[`Button-size-${size}`]: size,
		[`Button-variant-${variant}`]: variant,
		'Button-disabled': props.disabled,
		[className || '']: className,
	})

	// JSX
	return (
		<AriaButton
			{...props}
			className={ButtonClasses}>
			<div className='Button-leftSide'>{leftSide}</div>
			<div className='Button-content'>{children}</div>
			<div className='Button-rightSide'>{rightSide}</div>
		</AriaButton>
	)
}

/**
 * Default Values
 */
Button.defaultProps = {
	color: 'primary',
	shape: 'rounded',
	size: 'medium',
	variant: 'filled',
}
