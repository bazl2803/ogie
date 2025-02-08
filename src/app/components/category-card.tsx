import Image from 'next/image';
import React from 'react';
import { sva } from '@styled-system/css';

interface CategoryCardProps {
  displayName: string;
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
            width: '7rem',
            height: '7rem',
          },
        },
      },
    },
    imageContainer: {
      width: '6rem',
      height: '6rem',
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
      fontSize: 'xs',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'center',
      width: '100%',
    },
  },
});

export const CategoryCard: React.FC<CategoryCardProps> = ({ displayName }) => {
  const classes = categoryCardStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={`/${displayName.toLowerCase()}.jpg`}
          alt={displayName}
          sizes="256px"
          fill
        />
      </div>

      <span className={classes.title}>{displayName}</span>
    </div>
  );
};
