import React from 'react';
import { sva } from '@styled-system/css';

interface CarouselProps {
  children: React.ReactNode;
}

const CarouselStyles = sva({
  className: 'lukas-carousel',
  slots: ['root', 'container'],
  base: {
    root: {},
    container: {
      display: 'flex',
      flexDirection: 'row',
      overflowX: 'auto',
      paddingBlock: 2,
      gap: 2,
      scrollSnapType: 'x mandatory',
      scrollbarWidth: 'none',
    },
  },
});

export const Carousel: React.FC<CarouselProps> = (
  props
) => {
  const classes = CarouselStyles();

  return (
    <div className={classes.root}>
      <ul className={classes.container}>
        {props.children}
      </ul>
    </div>
  );
};
