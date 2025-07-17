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
			justifyContent: 'space-between',
			overflowX: 'auto',
			gap: { base: 3, md: 4 },
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
