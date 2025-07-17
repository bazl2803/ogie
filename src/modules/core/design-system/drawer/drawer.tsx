/* ------------------------------------------------------------------
 * Dependencies
-------------------------------------------------------------------- */
import React from 'react';
import DrawerStyles from './drawer.styles';
import { DrawerTrigger } from './drawer-trigger';
import { DrawerSheet } from './drawer-sheet';
import clsx from 'clsx';
import { DrawerProvider } from './drawer-context';

/*------------------------------------------------------------------
 * Drawer Component Props
 * The Drawer component accepts the following props:
 * - className: string (optional) - additional class names to apply to the component
 * - position: 'left' | 'right' | 'top' | 'bottom' (optional) - position of the drawer
 * - ...props: any other HTML attributes that can be applied to a div element
 *------------------------------------------------------------------*/
interface DrawerProps
	extends React.HTMLAttributes<HTMLDivElement> {
	position?: 'left' | 'right' | 'top' | 'bottom';
}

/*------------------------------------------------------------------
 * Drawer Component
 * The Drawer component is a customizable component that can be used to create a sliding panel
 * It accepts a position prop to determine the position of the drawer (left, right, top, bottom)
 * It also accepts any other HTML attributes that can be applied to a div element
 *------------------------------------------------------------------*/
export function Drawer({
	className,
	position,
	...props
}: DrawerProps) {
	const styles = DrawerStyles({ position });

	return (
		<DrawerProvider>
			<div
				className={clsx(styles.root, className)}
				{...props}
			>
				<DrawerSheet />
			</div>
		</DrawerProvider>
	);
}

Drawer.Trigger = DrawerTrigger;
Drawer.Sheet = DrawerSheet;
