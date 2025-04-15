import React from 'react';
import { cva } from '@styled-system/css';

interface CardProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
    variant?: 'solid' | 'outline',
    size?: 'sm' | 'md' | 'lg'
}

const CardStyles = cva({
    base: {},
    variants: {
        variant: {
            solid: {
                backgroundColor: "neutral.50"
            },
            outline: {
                backgroundColor: "white",
                outline: '1px solid',
                outlineColor: 'neutral.100'
            }
        },
        size: {
            small: { padding: '16px' },
            medium: { padding: '24px' },
            large: { padding: '28px' }
        }
    }
});

export const Card: React.FC<CardProps> = (props) => {
    return (
        <div
            className={CardStyles()}
            {...props}
        />
    );
};
