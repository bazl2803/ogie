'use client'

import React from 'react'
import clsx from 'clsx'
import { LiaAngleRightSolid } from 'react-icons/lia'
import './sidebar.scss'

// ----------------------------------------------------------------------------
// Interfaces & Types
// ----------------------------------------------------------------------------

/**
 * Props for the root sidebar component (`SidebarRoot` / `Sidebar`).
 */
export interface SidebarProps extends React.ComponentPropsWithRef<'aside'> {
	/**
	 * Determines whether the sidebar is currently open or collapsed.
	 */
	isOpen?: boolean
}

/**
 * Props for the sidebar header component (`Sidebar.Header`).
 */
export interface SidebarHeaderProps extends React.ComponentPropsWithRef<'div'> {}

/**
 * Props for the sidebar footer component (`Sidebar.Footer`).
 */
export interface SidebarFooterProps extends React.ComponentPropsWithRef<'div'> {}

/**
 * Props for the sidebar main content container (`Sidebar.Content`).
 */
export interface SidebarContentProps extends React.ComponentPropsWithRef<'div'> {}

/**
 * Props for the sidebar navigation group component (`Sidebar.Group`).
 */
export interface SidebarGroupProps extends React.ComponentPropsWithRef<'div'> {
	/**
	 * Optional title or header describing the navigation group section.
	 */
	title?: string
	/**
	 * When `true`, allows the group container to grow vertically to fill available space.
	 */
	grow?: boolean
}

/**
 * Props for an individual sidebar navigation item (`Sidebar.Item`).
 */
export interface SidebarItemProps extends React.ComponentPropsWithRef<'li'> {
	/**
	 * Icon element representing the navigation item.
	 */
	icon: React.ReactNode
	/**
	 * Label or descriptive text for the navigation option.
	 */
	label: string
}

/**
 * Compound component interface for the lateral navigation (`Sidebar`).
 *
 * Defines the root sidebar component along with all its attached subcomponents.
 */
export interface SidebarComponent extends React.FC<SidebarProps> {
	/**
	 * Header section of the sidebar.
	 *
	 * Container for the top area of the sidebar, commonly used for logos,
	 * brand titles, or workspace/account switchers.
	 *
	 * @param props - Component properties {@link SidebarHeaderProps}.
	 * @returns A `<div>` container with the `sidebar__header` class.
	 */
	Header: React.FC<SidebarHeaderProps>

	/**
	 * Footer section of the sidebar.
	 *
	 * Container for the bottom area of the sidebar, ideal for user profiles,
	 * settings shortcuts, or action buttons like logout.
	 *
	 * @param props - Component properties {@link SidebarFooterProps}.
	 * @returns A `<div>` container with the `sidebar__footer` class.
	 */
	Footer: React.FC<SidebarFooterProps>

	/**
	 * Scrollable content container of the sidebar.
	 *
	 * Primary body area where navigation groups (`Sidebar.Group`) and menu items
	 * (`Sidebar.Item`) are structured.
	 *
	 * @param props - Component properties {@link SidebarContentProps}.
	 * @returns A `<div>` container with the `sidebar__content` class.
	 */
	Content: React.FC<SidebarContentProps>

	/**
	 * Navigation group organizer inside the sidebar.
	 *
	 * Categorizes related navigation items under an optional section title
	 * and renders an internal `<ul>` list for `Sidebar.Item` elements.
	 *
	 * @param props - Component properties {@link SidebarGroupProps}.
	 * @returns A `<div>` container with the `sidebar__group` class containing the title and `<ul>` list.
	 */
	Group: React.FC<SidebarGroupProps>

	/**
	 * Individual navigation item for the sidebar.
	 *
	 * Renders an `<li>` element composed of an icon, a text label, and optional
	 * support for expandable child content / submenus.
	 *
	 * @param props - Component properties {@link SidebarItemProps}.
	 * @returns An `<li>` element with the `sidebar__item` class.
	 */
	Item: React.FC<SidebarItemProps>
}

// ----------------------------------------------------------------------------
// Sidebar Root
// ----------------------------------------------------------------------------

/**
 * Root container component for the sidebar navigation.
 *
 * Renders a semantic `<aside>` element with the base `sidebar` styling.
 *
 * @param props - Component properties {@link SidebarProps}.
 * @returns An `<aside>` element configured for the sidebar layout.
 */
export const SidebarRoot: React.FC<SidebarProps> = ({ isOpen, className, ...rest }) => {
	return (
		<aside
			className={clsx('sidebar', className)}
			{...rest}
		/>
	)
}

// ----------------------------------------------------------------------------
// Sidebar Header
// ----------------------------------------------------------------------------

/**
 * Header section of the sidebar.
 *
 * Container for the top area of the sidebar, commonly used for logos,
 * brand titles, or workspace/account switchers.
 *
 * @param props - Component properties {@link SidebarHeaderProps}.
 * @returns A `<div>` container with the `sidebar__header` class.
 */
export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ className, ...rest }) => {
	return (
		<div
			{...rest}
			className={clsx('sidebar__header', className)}
		/>
	)
}

// ----------------------------------------------------------------------------
// Sidebar Footer
// ----------------------------------------------------------------------------

/**
 * Footer section of the sidebar.
 *
 * Container for the bottom area of the sidebar, ideal for user profiles,
 * settings shortcuts, or action buttons like logout.
 *
 * @param props - Component properties {@link SidebarFooterProps}.
 * @returns A `<div>` container with the `sidebar__footer` class.
 */
export const SidebarFooter: React.FC<SidebarFooterProps> = ({ className, ...rest }) => {
	return (
		<div
			{...rest}
			className={clsx('sidebar__footer', className)}
		/>
	)
}

// ----------------------------------------------------------------------------
// Sidebar Content
// ----------------------------------------------------------------------------

/**
 * Scrollable content container of the sidebar.
 *
 * Primary body area where navigation groups (`Sidebar.Group`) and menu items
 * (`Sidebar.Item`) are structured.
 *
 * @param props - Component properties {@link SidebarContentProps}.
 * @returns A `<div>` container with the `sidebar__content` class.
 */
export const SidebarContent: React.FC<SidebarContentProps> = ({ className, ...rest }) => {
	return (
		<div
			{...rest}
			className={clsx('sidebar__content', className)}
		/>
	)
}

// ----------------------------------------------------------------------------
// Sidebar Group
// ----------------------------------------------------------------------------

/**
 * Navigation group organizer inside the sidebar.
 *
 * Categorizes related navigation items under an optional section title
 * and renders an internal `<ul>` list for `Sidebar.Item` elements.
 *
 * @param props - Component properties {@link SidebarGroupProps}.
 * @returns A `<div>` container with the `sidebar__group` class containing the title and `<ul>` list.
 */
export const SidebarGroup: React.FC<SidebarGroupProps> = ({
	className,
	title,
	grow,
	children,
	...rest
}) => {
	return (
		<div
			{...rest}
			className={clsx('sidebar__group', grow && 'sidebar__group--grow', className)}
		>
			{title && <span className="sidebar__group-title">{title}</span>}
			<ul className="sidebar__group-content">{children}</ul>
		</div>
	)
}

// ----------------------------------------------------------------------------
// Sidebar Item
// ----------------------------------------------------------------------------

/**
 * Individual navigation item for the sidebar.
 *
 * Renders an `<li>` element composed of an icon, a text label, and optional
 * support for expandable child content / submenus.
 *
 * @param props - Component properties {@link SidebarItemProps}.
 * @returns An `<li>` element with the `sidebar__item` class.
 */
export const SidebarItem: React.FC<SidebarItemProps> = ({
	className,
	children,
	icon,
	label,
	...rest
}) => {
	return (
		<li
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
		</li>
	)
}

// ----------------------------------------------------------------------------
// Compound Component Export
// ----------------------------------------------------------------------------

/**
 * Compound component for lateral navigation (`Sidebar`).
 *
 * Provides a modular interface composed of the following subcomponents:
 * - `Sidebar.Header`: Top header container for branding or logos.
 * - `Sidebar.Content`: Main scrollable container for navigation elements.
 * - `Sidebar.Group`: Group organizer with an optional section title.
 * - `Sidebar.Item`: Individual menu option with icon, label, and nested submenu support.
 * - `Sidebar.Footer`: Bottom footer container for user profile or secondary actions.
 *
 * @example
 * ```tsx
 * import { Sidebar } from '@/components'
 * import { TbDashboard, TbUsers } from 'react-icons/tb'
 *
 * export const Navigation = () => (
 *   <Sidebar>
 *     <Sidebar.Header>
 *       <h1>My App</h1>
 *     </Sidebar.Header>
 *     <Sidebar.Content>
 *       <Sidebar.Group title="Main">
 *         <Sidebar.Item icon={<TbDashboard />} label="Dashboard" />
 *       </Sidebar.Group>
 *       <Sidebar.Group title="Administration">
 *         <Sidebar.Item icon={<TbUsers />} label="Users" />
 *       </Sidebar.Group>
 *     </Sidebar.Content>
 *     <Sidebar.Footer>
 *       <span>Log out</span>
 *     </Sidebar.Footer>
 *   </Sidebar>
 * )
 * ```
 */
export const Sidebar: SidebarComponent = Object.assign(SidebarRoot, {
	Header: SidebarHeader,
	Footer: SidebarFooter,
	Content: SidebarContent,
	Group: SidebarGroup,
	Item: SidebarItem,
})
