import { css, sva } from '@styled-system/css';

import Image from 'next/image';
import React from 'react';

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
      width: '96px',
      gap: 1,
    },
    imageContainer: {
      width: 24,
      height: 24,
      position: 'relative',
      borderRadius: 'xl',
      overflow: 'hidden',
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

export const CategoryCard: React.FC<CategoryCardProps> = ({
  displayName,
}) => {
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
