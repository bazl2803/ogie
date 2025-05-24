import { sva } from '@styled-system/css';

const DrawerStyles = sva({
	className: 'drawer',
	slots: ['root', 'sheet'],
	base: {
		root: {
			position: 'fixed',
			zIndex: 1400,
			inset: 0,
			width: '100dvw',
			height: '100dvh',
			pointerEvents: 'all',
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
		},
		sheet: {
			transition: `all 1s ease-in-out, all 1s ease-in-out`,
			backgroundColor: 'red',
			height: 'full'
		},
	},
	variants: {
		open: {
			true: { root: { visibility: 'visible' } },
			false: { root: { visibility: 'collapse' } },
		},
		position: {
			left: {
				sheet: {
					transform: 'translateX(-100%)',
					maxWidth: '20rem',
				},
			},
			right: {
				sheet: {
					transform: 'translateX(100%)',
					maxWidth: '20rem',
				},
			},
			top: {
				sheet: {
					transform: 'translateY(-100%)',
					width: '100dvw',
				},
			},
			bottom: {
				sheet: {
					transform: 'translateY(100%)',
					width: '100dvw',
				},
			},
		},
	},
	compoundVariants: [
		{
			position: 'left',
			open: true,
			css: { sheet: { transform: 'translateX(0)' } },
		},
		{
			position: 'right',
			open: true,
			css: { sheet: { transform: 'translateX(0)' } },
		},
		{
			position: 'top',
			open: true,
			css: { sheet: { transform: 'translateY(0)' } },
		},
		{
			position: 'bottom',
			open: true,
			css: { sheet: { transform: 'translateY(0)' } },
		},
	],
	defaultVariants: {
		position: 'left',
		open: false,
	},
});

export default DrawerStyles;