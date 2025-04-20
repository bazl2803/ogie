import { Display } from '@/modules/core/design-system';
import { css } from '@styled-system/css';

// Styles
const HeroStyles = css({
	paddingInline: '4',
	textWrap: 'pretty',
	textAlign: 'center',
});

export const Hero = () => {
	return (
		<Display
			className={HeroStyles}
			size="4xl"
		>
			Soluciones Eléctricas para su Hogar o Proyecto.
		</Display>
	);
};
