import React from "react";
import { css } from '@styled-system/css';

interface CarouselItemProps {
  children: React.ReactNode;
}

const CarouselItemStyles = css({
  scrollSnapAlign: 'start',
  overflow: 'visible',
  width: 'auto'
});

export const CarouselItem: React.FC<CarouselItemProps> = (
  props
) => {
  return (
    <li className={CarouselItemStyles}>{props.children}</li>
  );
};
