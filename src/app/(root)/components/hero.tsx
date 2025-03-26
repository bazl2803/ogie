import { Display } from '@/components/atoms/display/display';
import { sva } from '@styled-system/css';
import Image from 'next/image';

// Styles
const HeroStyles = sva({
	slots: ['root', 'text', 'image'],
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			userSelect: 'none',
			backgroundColor: 'neutral.200',
			marginInline: '16px',
			padding: '16px 8px',
			borderRadius: 'xl',
			gap: '8px',
		},
		text: {
			color: 'neutral.900',
			textAlign: 'center',
			fontSize: '24px',
			fontWeight: '900',
			lineHeight: 'tight',
		},
		image: {
			mixBlendMode: 'multiply',
		},
	},
});

export const Hero = () => {
	// Extract styles
	const classes = HeroStyles();

	return (
		<div className={classes.root}>
			<Display
				size="huge"
				className={classes.text}
			>
				Soluciones Eléctricas
				<br />
				para su Hogar
				<br />o Proyecto
			</Display>

			<Image
				className={classes.image}
				src="/Gemini_Generated_Image_z9lgkyz9lgkyz9lg.jpeg"
				alt="hero"
				width={200}
				height={200}
			/>
		</div>
	);
};
