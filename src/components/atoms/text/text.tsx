import React from 'react';
import { css } from '@styled-system/css';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  weight?: React.CSSProperties['fontWeight'];
  size?: React.CSSProperties['fontSize'];
  color?: React.CSSProperties['color'];
  lineclamp?: number;
  as?: React.ElementType;
}

const textStyles = css({
  fontFamily: 'inter',
});

export const Text: React.FC<TextProps> = ({
  children,
  weight,
  size,
  color,
  lineclamp,
  ...props
}) =>
  React.createElement(
    `${props.as || 'p'}`,
    {
      className: textStyles,
      style: {
        fontWeight: weight,
        fontSize: size,
        color: color,
        ...(lineclamp && {
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: lineclamp,
          WebkitBoxOrient: 'vertical',
          textOverflow: 'ellipsis',
        }),
      },
      ...props,
    },
    children
  );
