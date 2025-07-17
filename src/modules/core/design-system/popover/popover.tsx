'use client';

import { sva } from '@styled-system/css';
import React from 'react';
import { PopoverContext } from './popover-context';
import clsx from 'clsx';
import { PopoverContent } from './popover-content';
import { PopoverTrigger } from './popover-trigger';

interface PopoverProps
	extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	trigger: React.ReactNode;
	children: React.ReactNode;
}

const PopoverStyles = sva({
	className: 'Popover',
	slots: ['root'],
	base: {
		root: {},
	},
	variants: {
		placement: {
			bottomLeft: {},
		},
	},
});

export const Popover = (props: PopoverProps) => {
	const [open, setOpen] = React.useState(false);
	const styles = PopoverStyles();
	return (
		<PopoverContext.Provider value={{ open, setOpen }}>
			<div className={clsx(styles.root)}>{props.children}</div>
		</PopoverContext.Provider>
	);
};

Popover.displayName = 'Popover';

Popover.Root = Popover;
Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
