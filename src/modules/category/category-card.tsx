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
			maxWidth: '64px',
			width: '64px',
			height: 'fit-content',
			overflow: 'hidden',
		},
		label: {
			fontSize: 'sm',
			textAlign: 'center',
			whiteSpace: 'nowrap',
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			width: '64px',
		},
		image: {
			objectFit: 'cover',
			borderRadius: 'md',
			aspectRatio: '1/1',
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
				sizes="64px"
				style={{ width: '64px', height: '64px' }}
				width={64}
				height={64}
			/>

			<span className={classes.label}>{label}</span>
		</div>
	);
};
