import React from 'react';
import { sva } from '@styled-system/css';

interface CarouselProps {
	children: React.ReactNode;
}

const CarouselStyles = sva({
	className: 'lukas-carousel',
	slots: ['root', 'container'],
	base: {
		root: { overflow: 'hidden' },
		container: {
			display: 'flex',
			flexDirection: 'row',
			overflowX: 'auto',
			gap: { base: 4, md: 5 },
			scrollSnapType: 'x mandatory',
			scrollbarWidth: 'none',
		},
	},
});

export const Carousel: React.FC<CarouselProps> = (props) => {
	const classes = CarouselStyles();

	return (
		<div className={classes.root}>
			<ul className={classes.container}>{props.children}</ul>
		</div>
	);
};
