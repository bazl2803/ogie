import React from 'react';
import { css } from '@styled-system/css';
import clsx from 'clsx';

type AppbarProps = React.HTMLProps<HTMLDivElement>;
type AppbarSectionProps = {
	grow?: boolean;
} & React.HTMLProps<HTMLDivElement>;

const AppbarStyles = css({
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'wrap',
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

const Section = ({ className, grow, ...props }: AppbarSectionProps) => {
	return (
		<div
			className={clsx('lukas-appbarsection', className)}
			style={{ flexGrow: grow ? 1 : 0 }}
			{...props}
		/>
	);
};

Appbar.Section = Section;

export { Appbar };
