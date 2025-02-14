import { css, sva } from '@styled-system/css';

import { Title } from '@/components/title/title';

// Styles
const HeroStyles = sva({
	slots: ['root', 'title', 'background'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			position: 'relative',
			overflow: 'visible',
			width: '100%',
			userSelect: 'none',
			paddingBlock: { base: '4rem', md: '5rem' },
		},
		background: {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			background: `radial-gradient(at 80.7738814993954% 64.3312101910828%, #f5b3b3 0px, transparent 50%),
						 radial-gradient(at 27.569528415961308% 32.48407643312102%, #c2cbff 0px, transparent 50%),
						 radial-gradient(at 31.922611850060463% 69.2144373673036%, #fafad6 0px, transparent 50%),
						 radial-gradient(at 67.23095525997581% 44.79830148619958%, #f0c2a5 0px, transparent 50%) #ffffff`,
			mixBlendMode: 'normal',
			filter: 'blur(50px)',
			zIndex: -1,
		},
		title: {
			textAlign: 'center',
			color: 'black/60',
		},
	},
});

export const Hero = () => {
	// Extract styles
	const classes = HeroStyles();

	return (
		<div className={classes.root}>
			<div className={classes.background} />
			<Title
				className={classes.title}
				variant="display-large"
			>
				Cientos de productos <br /> esperando por ti.
				<br />
			</Title>
			<Title
				className={css({ textAlign: 'center', color: 'red.900/50' })}
				variant="display-large"
			>
				¡Descubrelos Ya!
			</Title>
		</div>
	);
};
