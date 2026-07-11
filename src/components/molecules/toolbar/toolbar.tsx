'use client'
import { ComponentPropsWithRef } from 'react'
import './toolbar.scss'

export function Toolbar({ children, ...props }: ComponentPropsWithRef<'div'>) {
	return (
		<div
			{...props}
			className="toolbar"
		>
			{children}
		</div>
	)
}

export function ToolbarRow({
	children,
	...props
}: ComponentPropsWithRef<'div'>) {
	return (
		<div
			className="toolbar__row"
			{...props}
		>
			{children}
		</div>
	)
}

export function ToolbarGroup({
	children,
	...props
}: ComponentPropsWithRef<'div'>) {
	return (
		<div
			className="toolbar__group"
			{...props}
		>
			{children}
		</div>
	)
}

Toolbar.Row = ToolbarRow
Toolbar.Group = ToolbarGroup
