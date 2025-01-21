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
  'subtitle': 'span',
};

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: TitleVariant;
}

/**
 * Styles
 */
const TitleStyles = cva({
  base: {
    fontFamily: 'poppins',
    fontWeight: '700',
  },
  variants: {
    variant: {
      'title-small': { fontSize: 'xl' },
      'title-medium': { fontSize: '2xl' },
      'title-large': { fontSize: '3xl' },
      'display-small': { fontSize: '4xl' },
      'display-medium': { fontSize: '5xl' },
      'display-large': { fontSize: '6xl' },
      subtitle: { fontSize: 'lg', fontWeight: '600' },
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
