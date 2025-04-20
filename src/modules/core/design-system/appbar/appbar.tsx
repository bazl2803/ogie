import React from 'react';
import { css } from '@styled-system/css';
import clsx from 'clsx';

type AppbarProps = React.HTMLProps<HTMLDivElement>;
type AppbarSectionProps = React.HTMLProps<HTMLDivElement>;

const AppbarStyles = css({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'nowrap',
	overflow: 'hidden',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '100%',
	paddingBlock: '2',
	paddingInline: '4',
	gap: '2',
});

const Appbar = ({ className, ...props }: AppbarProps) => {
	return (
		<div
			className={clsx('lukas-appbar', AppbarStyles, className)}
			{...props}
		/>
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
