import React from 'react';

interface DrawerTriggerProps {
	children?: React.ReactNode;
}

export function DrawerTrigger(props: DrawerTriggerProps) {
	const [open, setOpen] = React.useState(false);

	return (
		<div onClick={() => setOpen(!open)}>{props.children}</div>
	);
}
