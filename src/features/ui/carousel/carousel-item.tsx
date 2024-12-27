import { css } from '@styled-system/css';

interface CarouselItemProps {
  children: React.ReactNode;
}

const CarouselItemStyles = css({
  scrollSnapAlign: 'start',
  position: 'relative',
  boxSizing: 'border-box',
  overflow: 'visible',
  userSelect: 'none',
  transition: 'transform 0.15s, padding-inline 0.15s',
  _hover: {
    transform: 'scale(1.10)',
    paddingInline: 2,
  },
});

export const CarouselItem: React.FC<CarouselItemProps> = (
  props
) => {
  return (
    <li className={CarouselItemStyles}>{props.children}</li>
  );
};
