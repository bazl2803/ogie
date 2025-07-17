import { sva } from '@styled-system/css';

export const HeaderStyles = sva({
	slots: ['root', 'hero', 'background'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: '#283b6d',
			textAlign: 'center',
		},
		hero: {
			color: 'white',
			fontSize: { base: '2xl', md: '4xl', lg: '6xl' },
			fontWeight: 'bold',
			width: 'full',
		},
		background: {
			width: '100%',
			backgroundImage: "url('/background.jpg')",
			backgroundSize: 'cover',
			backgroundPosition: 'top',
			backgroundRepeat: 'no-repeat no-repeat',
			maskImage:'linear-gradient(black, transparent)',
			textAlign: 'center',
			height: '50vh',
		},
	},
});
