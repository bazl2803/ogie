import Image from 'next/image';
import React from 'react';
import { sva } from '@styled-system/css';

interface CategoryCardProps {
	title: string;
	imageUrl?: string;
}

const categoryCardStyles = sva({
	className: 'category-card',
	slots: ['root', 'imageContainer', 'image', 'title'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			gap: 1,
			overflow: 'visible',
			'@media (hover: hover)': {
				_hover: {
					'& .category-card__imageContainer': {
						width: { base: '6rem' },
						height: { base: '6rem' },
					},
				},
			},
			_active: {
				filter: 'brightness(0.9)',
			},
		},
		imageContainer: {
			width: { base: '4rem' },
			height: { base: '4rem' },
			position: 'relative',
			borderRadius: 'xl',
			overflow: 'hidden',
			transitionProperty: 'width, height',
			transitionDuration: 'normal',
		},
		image: {
			objectFit: 'cover',
		},
		title: {
			fontSize: { base: 'sm', md: 'sm' },
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			textAlign: 'center',
			maxWidth: '5rem',
		},
	},
});

export const CategoryCard: React.FC<CategoryCardProps> = ({
	title,
	imageUrl,
}) => {
	const classes = categoryCardStyles();

	return (
		<div className={classes.root}>
			<div className={classes.imageContainer}>
				<Image
					className={classes.image}
					src={imageUrl!}
					alt={title}
					sizes="256px"
					fill
				/>
			</div>

			<span className={classes.title}>{title}</span>
		</div>
	);
};
