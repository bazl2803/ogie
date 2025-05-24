import { css } from '@styled-system/css';
import clsx from 'clsx';
import React, { JSX } from 'react';

type TableProps = React.TableHTMLAttributes<HTMLTableElement>;

const TableStyles = css({
	width: '100%',
	borderCollapse: 'collapse',
	margin: '0 auto',
});

/**
 * Table component that renders a table element with the given props.
 *
 * @param {TableProps} props - The props to pass to the table element.
 * @returns {JSX.Element} The rendered table element.
 */
export default function Table({
	className,
	...props
}: TableProps): JSX.Element {
	return (
		<table
			className={clsx(TableStyles, className)}
			{...props}
		/>
	);
}
