import { Display } from '@/modules/core/design-system';
import { css } from '@styled-system/css';

// Styles
const HeroStyles = css({
	paddingInline: { base: '2rem', md: '6rem' },
	textWrap: 'pretty',
	textAlign: { base: 'center', md: 'left' },
});

export const Hero = () => {
	return (
		<Display
			className={HeroStyles}
			size="4xl"
		>
			Soluciones Eléctricas <br/>para su Hogar <br/>o Proyecto.
		</Display>
	);
};
