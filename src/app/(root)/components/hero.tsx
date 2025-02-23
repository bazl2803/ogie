import { Display } from '@/components/atoms/display/display';
import { sva } from '@styled-system/css';

// Styles
const HeroStyles = sva({
	slots: ['root', 'text', 'background'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			position: 'relative',
			overflow: 'visible',
			width: '100%',
			userSelect: 'none',
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
		text: {
			color: 'neutral.950/70',
			textAlign: { base: 'center', md: 'left' },
		},
	},
});

export const Hero = () => {
	// Extract styles
	const classes = HeroStyles();

	return (
		<div className={classes.root}>
			<div className={classes.background} />
			<Display
				size="huge"
				className={classes.text}
			>
				Soluciones Eléctricas <br /> para tu Hogar <br /> o Proyecto
			</Display>
		</div>
	);
};
