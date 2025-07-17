import { cva } from '@styled-system/css';

export const ButtonStyles = cva({
	base: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		fontWeight: '400',
		columnGap: '8px',
		WebkitLineClamp: 1,
		textOverflow: 'ellipsis',
		textWrap: 'nowrap',
		overflow: 'hidden',
	},
	variants: {
		variant: {
			brand1: {
				color: 'black',
				bg: '#ffef11',
			},
			brand2: {
				color: 'white',
				bg: '#0f2e51',
			},
			primary: {
				color: 'white',
				bg: 'black',
			},
			secondary: {
				color: 'neutral.950',
				bg: 'neutral.100',
			},
			outline: {
				color: 'neutral.950',
				bg: 'white',
				border: '1px solid',
				borderColor: 'neutral.100',
			},
			ghost: {
				color: 'neutral.950',
				bg: 'transparent',
			},
			text: {
				color: 'inherit',
				bg: 'transparent',
				border: 'none',
				padding: '0 !important',
			},
		},
		shape: {
			pill: { borderRadius: '9999px' },
			rounded: { borderRadius: '8px' },
			square: { borderRadius: '0px' },
		},
		size: {
			sm: {
				h: 8,
				minW: '2rem',
				fontSize: '14px',
				'&:has(span)': { p: '12px' },
				'& svg': { w: '1rem', h: '1rem' },
			},
			md: {
				h: 9,
				minW: '2.5rem',
				fontSize: '16px',
				'&:has(span)': { p: '14px' },
				'& svg': { w: '1.25rem', h: '1.25rem' },
			},
			lg: {
				h: 10,
				minW: '3rem',
				fontSize: '18px',
				'&:has(span)': { p: '16px' },
				'& svg': { w: '1.5rem', h: '1.5rem' },
			},
		},
		fullWidth: {
			true: {
				w: 'full',
			},
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'sm',
	},
});
