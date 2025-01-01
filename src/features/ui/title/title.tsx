import { Poppins } from 'next/font/google';
import React from 'react';
import { cva } from '@styled-system/css';

// Define the props for the title component
interface TitleProps {
  order: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

// Create a new instance of the Poppins font with a weight of 800
const poppins = Poppins({ weight: '600' });

// Create a new style object for the title component
const titleStyles = cva({
  base: {
    fontFamily: poppins.style.fontFamily,
    fontWeight: poppins.style.fontWeight,
  },
  variants: {
    order: {
      h1: { fontSize: '3rem' },
      h2: { fontSize: '2.5rem' },
      h3: { fontSize: '2rem' },
      h4: { fontSize: '1.75rem' },
      h5: { fontSize: '1.5rem' },
      h6: { fontSize: '1.25rem' },
    },
  },
});

/**
 * Title component
 * @param props
 * @returns
 */
export const Title: React.FC<TitleProps> = (props) => {
  return React.createElement(
    `${props.order}`,
    { className: `${poppins.className} ${titleStyles({ order: props.order })}` },
    props.children
  );
};
