import React from 'react';
import { sva } from '@styled-system/css';
import clsx from 'clsx';

type AppbarProps = React.HTMLProps<HTMLDivElement>;
type AppbarSectionProps = React.HTMLProps<HTMLDivElement>;

const AppbarStyles = sva({
	className: 'lukas-appbar',
	slots: ['root', 'container'],
	base: {
		root: {
			width: '100%',
			height: '64px',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
		},
		container: {
			width: 'full',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			gap: '4',
			marginInline: 'auto',
		},
	},
});

const Appbar = ({ className, children, ...props }: AppbarProps) => {
	const styles = AppbarStyles();
	return (
		<div
			className={(styles.root, className)}
			{...props}
		>
			<div className={styles.container}>{children}</div>
		</div>
	);
};

const Section = ({ className, ...props }: AppbarSectionProps) => {
	return (
		<div
			className={clsx('lukas-appbarsection', className)}
			{...props}
		/>
	);
};

Appbar.Section = Section;

export { Appbar };
