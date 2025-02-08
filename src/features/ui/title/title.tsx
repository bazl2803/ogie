import React from 'react';
import { cva } from '@styled-system/css';

/**
 * Types
 */
type TitleVariant =
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'subtitle';

const titleTagsMap: Record<TitleVariant, keyof React.JSX.IntrinsicElements> = {
  'display-large': 'h1',
  'display-medium': 'h2',
  'display-small': 'h3',
  'title-large': 'h4',
  'title-medium': 'h5',
  'title-small': 'h6',
  subtitle: 'span',
};

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: TitleVariant;
}

/**
 * Styles
 */
const TitleStyles = cva({
  base: {
    color: 'neutral.800',
    fontFamily: 'poppins',
    fontWeight: '600',
  },
  variants: {
    variant: {
      'title-small': { fontSize: 'xl' },
      'title-medium': { fontSize: '2xl' },
      'title-large': { fontSize: '3xl' },
      'display-small': { fontSize: '4xl', fontWeight: '700' },
      'display-medium': { fontSize: '5xl', fontWeight: '700' },
      'display-large': { fontSize: '6xl', fontWeight: '700' },
      subtitle: { fontSize: 'lg', fontWeight: '400' },
    },
  },
  defaultVariants: {
    variant: 'title-small',
  },
});

/**
 * Title Component
 */
export const Title: React.FC<TitleProps> = ({
  variant = 'title-small',
  children,
  ...props
}) => {
  const Tag = titleTagsMap[variant!];

  return React.createElement(
    Tag,
    { className: `${TitleStyles({ variant })}`, ...props },
    children
  );
};
