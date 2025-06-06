import Image from 'next/image';
import React from 'react';
import { sva } from '@styled-system/css';

interface CategoryCardProps {
	label: string;
	imageUrl?: string;
}

const CategoryCardStyles = sva({
	slots: ['root', 'label', 'image'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'start',
			gap: 2,
			cursor: 'pointer',
			height: 'fit-content',
			width: { base: '5.5rem', md: '6rem' },
			overflow: 'hidden',
		},
		label: {
			fontSize: 'sm',
			textAlign: 'center',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			width: '100%',
		},
		image: {
			objectFit: 'cover',
			borderRadius: 'xl',
			aspectRatio: '1/1',
			width: { base: '5.5rem', md: '6rem' },
		},
	},
});

export const CategoryCard: React.FC<CategoryCardProps> = ({
	label,
	imageUrl,
}) => {
	const classes = CategoryCardStyles();

	return (
		<div className={classes.root}>
			<Image
				className={classes.image}
				src={imageUrl!}
				alt={label}
				sizes="128px"
				width={64}
				height={64}
			/>

			<span className={classes.label}>{label}</span>
		</div>
	);
};
