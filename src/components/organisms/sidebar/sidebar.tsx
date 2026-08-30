'use client'

import React from 'react'
import clsx from 'clsx'
import { LiaAngleRightSolid } from 'react-icons/lia'

const SidebarRoot: React.FC<
	{
		isOpen?: boolean
	} & React.ComponentPropsWithRef<'aside'>
> = ({ isOpen, className, ...rest }) => {
	return (
		<aside
			className={clsx('sidebar', className)}
			{...rest}
		/>
	)
}

const SidebarHeader: React.FC<React.ComponentPropsWithRef<'div'>> = ({ className, ...rest }) => {
	return (
		<div
			{...rest}
			className={clsx('sidebar__header', className)}
		/>
	)
}

const SidebarFooter: React.FC<React.ComponentPropsWithRef<'div'>> = ({ className, ...rest }) => {
	return (
		<div
			{...rest}
			className={clsx('sidebar__footer', className)}
		/>
	)
}

const SidebarContent: React.FC<React.ComponentPropsWithRef<'div'>> = ({ className, ...rest }) => {
	return (
		<div
			{...rest}
			className={clsx('sidebar__content', className)}
		/>
	)
}

const SidebarGroup: React.FC<
	{
		title?: string
		grow?: boolean
	} & React.ComponentPropsWithRef<'div'>
> = ({ className, title, grow, children, ...rest }) => {
	return (
		<div
			{...rest}
			className={clsx('sidebar__group', grow && 'sidebar__group--grow', className)}
		>
			{title && <span className="sidebar__group-title">{title}</span>}
			<div className="sidebar__group-content">{children}</div>
		</div>
	)
}

const SidebarItem: React.FC<
	{
		icon: React.ReactNode
		label: string
	} & React.ComponentPropsWithRef<'div'>
> = ({ className, children, icon, label, ...rest }) => {
	return (
		<div
			{...rest}
			className={clsx('sidebar__item', className)}
		>
			<div className="sidebar__item-icon">{icon}</div>
			<span className="sidebar__item-label">{label}</span>
			{children && (
				<>
					<div className="sidebar__item-expand-icon">
						<LiaAngleRightSolid />
					</div>
					<div className="sidebar__item-content">{children}</div>
				</>
			)}
		</div>
	)
}

export const Sidebar = Object.assign(SidebarRoot, {
	Header: SidebarHeader,
	Footer: SidebarFooter,
	Content: SidebarContent,
	Group: SidebarGroup,
	Item: SidebarItem,
})