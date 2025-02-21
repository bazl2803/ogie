import React from 'react';
import { css } from '@styled-system/css';

type CardProps = React.HTMLProps<HTMLDivElement>

const cardStyles = css({
	outline: '1px solid',
	outlineColor: 'black/10',
});

export const Card: React.FC<CardProps> = (props) => {
	return (
		<div
			className={cardStyles}
			{...props}
		/>
	);
};
